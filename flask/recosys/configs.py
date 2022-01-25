class Config:
    ''' Flask Config '''
    SECRET_KEY = 'secretkey'
    SESSION_COOKIE_NAME = 'cowine'
    SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://root:password@localhost:3308/cowinedb?charset=utf8'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SWAGGER_UI_DOC_EXPANSION = 'list'

class DevelopmentConfig(Config):
    """ Flask Config for dev """
    DEBUG = True
    SEND_FILE_MAX_AGE_DEFAULT = 1
    # TODO: Front 호출시 처리
    WTF_CSRF_ENABLED = False

class ProductionConfig(DevelopmentConfig):
    pass
