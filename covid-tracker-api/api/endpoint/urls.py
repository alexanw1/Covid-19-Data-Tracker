# api/urls.py : App urls.py
from django.conf.urls import url
from django.urls import path, include
from .views import (
    CaseDataApiView,
    CountiesApiView,
    StatesApiView,
    VacDataApiView,
    ClosureDataApiView,
)

urlpatterns = [
    path('casedata/', CaseDataApiView.as_view()),
    path('counties/', CountiesApiView.as_view()),
    path('states/', StatesApiView.as_view()),
    path('vacdata/', VacDataApiView.as_view()),
    path('closuredata/', ClosureDataApiView.as_view()),
]