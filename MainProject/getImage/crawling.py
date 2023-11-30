import requests
import os
import re
import sys
import urllib.request
import json

from django.conf import settings
from getImage.models import Valley, Mountain, Sea, Camping

from config.place_list import place as place_list


client_id = "kffYtEVruaGNfKtcySHC"
client_secret= "Kr2s6JmhdJ"

def urllib_request_loop():
    for key, value in place_list.items():
        param = {
            "query" : key,
            "display" : 10, # 최대 10개만 출력
            "start" : 1, #검색 시작위치 1부터
            "sort" : "sim", #날짜순으로 내림차순 정렬
            "filter": "all"
        }
        print(key, value)
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
            download_image(json_data["items"], key)
        else:
            print("Errorcode : ", rescode)



# URL 인코딩 시켜줌, query 인코딩
# def urllib_request():
#     encText = urllib.parse.quote(param["query"])

#     #json 형식
#     url = "https://openapi.naver.com/v1/search/image?query=" + encText
#     # URL 요청을 추상화하기 위한 클래스
#     request = urllib.request.Request(url)
#     # 요청에 Application 아이디와 secret을 붙여줌
#     request.add_header("X-Naver-Client-Id",client_id)
#     request.add_header("X-Naver-Client-Secret",client_secret)

#     # url open
#     response = urllib.request.urlopen(request)
#     # 코드
#     rescode = response.getcode()
#     if rescode == 200: # 정상 요청
#         response_body = response.read()
#         json_data = json.loads(response_body.decode('utf-8'))
#         download_image(json_data["items"], query)
#     else:
#         print("Errorcode : ", rescode)



# 요청받은 json중 link만 가져옴
def download_image(json_data, place):
    # assets -> 이미지를 저장할 폴더
    PATH = os.path.join(os.path.join(os.getcwd(), 'static'), place+"\\")
    # PATH = os.path.join(os.getcwd(), query+"/") # 현재위치 + query
    
    if not os.path.exists(PATH): #폴더가 없으면
        os.makedirs(PATH)

    for item in json_data:
        title = normalize_filename(item['title'])
        image = item['link']
        urllib.request.urlretrieve(image, PATH + title+".jpg")
        if place == '계곡':
            insert_to_ValleyDB(title, settings.STATIC_URL+place+"\\"+title+".jpg")
        elif place == '산':
            insert_to_MoutainDB(title, settings.STATIC_URL+place+"\\"+title+".jpg")
        elif place == '바다':
            insert_to_SeaDB(title, settings.STATIC_URL+place+"\\"+title+".jpg")
        elif place == '캠핑':
            insert_to_CampingDB(title, settings.STATIC_URL+place+"\\"+title+".jpg")



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