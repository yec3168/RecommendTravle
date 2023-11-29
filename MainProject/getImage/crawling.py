import requests
import os
import re
import sys
import urllib.request
import json

from django.conf import settings
from getImage.models import Valley, Mountain, Sea, Camping


client_id = "kffYtEVruaGNfKtcySHC"
client_secret= "Kr2s6JmhdJ"

query = "계곡"
param = {
    "query" : query,
    "display" : 10, # 최대 10개만 출력
    "start" : 1, #검색 시작위치 1부터
    "sort" : "date", #날짜순으로 내림차순 정렬
    "filter": "all"
}

# URL 인코딩 시켜줌, query 인코딩
def urllib_request():
    encText = urllib.parse.quote(param["query"])

    #json 형식
    url = "https://openapi.naver.com/v1/search/image?query=" + encText
    # URL 요청을 추상화하기 위한 클래스
    request = urllib.request.Request(url)
    # 요청에 Application 아이디와 secret을 붙여줌
    request.add_header("X-Naver-Client-Id",client_id)
    request.add_header("X-Naver-Client-Secret",client_secret)

    # url open
    response = urllib.request.urlopen(request)
    # 코드
    rescode = response.getcode()
    if rescode == 200: # 정상 요청
        response_body = response.read()
        json_data = json.loads(response_body.decode('utf-8'))
        download_image(json_data["items"], query)
    else:
        print("Errorcode : ", rescode)


# 요청받은 json중 link만 가져옴
def download_image(json_data, qurey):
    # static -> 이미지를 저장할 폴더
    PATH = os.path.join(os.path.join(os.getcwd(), 'static'), query+ "\\") # 현재위치 + query
    
    if not os.path.exists(PATH): #폴pyth더가 없으면
        os.makedirs(PATH)
    
    count = 0
    for item in json_data:
        title = normalize_filename(item['title'])
        title = get_unique_filename(PATH, title)
        image = item['link']
        # 현재 이미지 title 인코딩문제 있어서 utf-8로 만든느 법을 배워야함.
        insert_to_ValleyDB("title"+str(count), settings.STATIC_URL+query+"\\title"+str(count)+".jpg")
        urllib.request.urlretrieve(image, PATH + "title"+str(count)+".jpg")
        count +=1

def normalize_filename(title):
    '''파일 이름 정규화'''
    title = re.sub(r'[\\/*?:"<>|]', '', title)
    title = title.replace(' ', '_')
    max_length = 100
    if len(title) > max_length:
        title = title[:max_length]
    
    return title

def get_unique_filename(path, filename):
    '''파일이름 중복 해결'''
    counter = 1
    new_filename = filename
    while os.path.exists(os.path.join(path, new_filename + '.jpg')):
        new_filename = filename + "-" + str(counter)
        counter += 1
    return new_filename


def insert_to_ValleyDB(title, path):
    result = Valley.objects.create(title=title, url=path)
    print(result)

def insert_to_MoutainDB(title, path):
    result = Mountain.objects.create(title=title, url=path)
    print(result)

def insert_to_CampingDB(title, path):
    result = Camping.objects.create(title=title, url=path)
    print(result)

def insert_to_SeaDB(title, path):
    result = Sea.objects.create(title=title, url=path)
    print(result)    