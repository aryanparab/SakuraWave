import os
from dj_static import Cling
from django.core.wsgi import get_wsgi_application
from whitenoise.django import DjangoWhiteNoise

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "home.settings.prod")

application = get_wsgi_application()
application = Cling(get_wsgi_application())

application = DjangoWhiteNoise(application)

