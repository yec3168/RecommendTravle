DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql', # mysqlclient librarly 설치
        'NAME': 'travel_place',
        'USER': 'root',
        'PASSWORD': '1234', # mariaDB 설치 시 입력한 root 비밀번호 입력
        'HOST': 'localhost',
        'PORT': '3306'
    }
}