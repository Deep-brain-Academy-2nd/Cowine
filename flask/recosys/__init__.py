from re import L
from flask import Flask, render_template, g
from flask_wtf.csrf import CSRFProtect
csrf = CSRFProtect()
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate


csrf = CSRFProtect()
db = SQLAlchemy()
migrate = Migrate()

def create_app(config=None):
    print('run: create_app()')
    app = Flask(__name__)

    from .configs import DevelopmentConfig, ProductionConfig

    if not config :
        if app.config['DEBUG']:
            config = DevelopmentConfig()
        else:
            config = ProductionConfig()

    print('run with : ', config)
    app.config.from_object(config)

    csrf.init_app(app)


    db.init_app(app)

    
    if app.config['SQLALCHEMY_DATABASE_URI'].startswith('sqlite'):
        migrate.init_app(app, db, render_as_batch=True)
    else:
        migrate.init_app(app, db)


    @app.before_request
    def before_request():
        g.db = db.session

    @app.teardown_request
    def teardown_request(exception):
        if hasattr(g, 'db'):
            g.db.close()

    app.config['SWAGGER_UI_DOC_EXPANSION'] = 'list'

    from recosys.apis import blueprint as api
    app.register_blueprint(api)


    @app.errorhandler(404)
    def page_404(error):
        return render_template('/404.html'), 404
        
    return app
