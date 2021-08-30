# todo/api/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from api.models import Casedata
from .serializers import CaseDataSerializer

from api.models import Counties
from .serializers import CountyDataSerializer

from api.models import States
from .serializers import StateDataSerializer

from api.models import vacData
from .serializers import VacDataSerializer

from api.models import closureData
from .serializers import ClosureDataSerializer

class CaseDataApiView(APIView):
    # add permission to check if user is authenticated
    # permission_classes = [permissions.IsAuthenticated]

    # 1. List all
    def get(self, request, *args, **kwargs):
        params = request.query_params
        if(len(params) == 0):
            cases = Casedata.objects.all()
        elif("countyname" in params.keys() and "stateabvr" in params.keys()):
            cases = Casedata.objects.filter(countyname = params['countyname'], stateabvr = params['stateabvr'])
        elif("iscounty" in params.keys() and "stateabvr" in params.keys()):
            cases = Casedata.objects.filter(iscounty = params['iscounty'], stateabvr = params['stateabvr'])
        elif("iscounty" in params.keys()):
            cases = Casedata.objects.filter(iscounty = params['iscounty'])
        elif("countyname" in params.keys()):
            cases = Casedata.objects.filter(countyname = params['countyname'])
        serializer = CaseDataSerializer(cases, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    # # 2. Create
    # def post(self, request, *args, **kwargs):
    #     '''
    #     Create the Todo with given todo data
    #     '''
    #     data = {
    #         'task': request.data.get('task'), 
    #         'completed': request.data.get('completed'), 
    #         'user': request.user.id
    #     }
    #     serializer = TodoSerializer(data=data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data, status=status.HTTP_201_CREATED)

    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CountiesApiView(APIView):
    # add permission to check if user is authenticated
    # permission_classes = [permissions.IsAuthenticated]

    # 1. List all
    def get(self, request, *args, **kwargs):
        params = request.query_params
        if(len(params) == 0):
            counties = Counties.objects.all()
        elif("state" in params.keys() and "countyname" in params.keys()):
            counties = Counties.objects.filter(state__contains=params['state'], countyname = params['countyname'])
        elif("state" in params.keys()):
            counties = Counties.objects.filter(state__contains = params['state'])
        elif("countyname" in params.keys()):
            counties = Counties.objects.filter(countyname_ = params['countyname'])
        serializer = CountyDataSerializer(counties, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class StatesApiView(APIView):
    # add permission to check if user is authenticated
    # permission_classes = [permissions.IsAuthenticated]

    # 1. List all
    def get(self, request, *args, **kwargs):
        params = request.query_params
        if(len(params) == 0):
            states = States.objects.all()
        elif("abrv" in params.keys()):
            states = States.objects.filter(abrv = params['abrv'])
        # elif("countyname" in params.keys()):
        #     counties = Counties.objects.filter(countyname = params['countyname'])
        serializer = StateDataSerializer(states, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class VacDataApiView(APIView):
    # add permission to check if user is authenticated
    # permission_classes = [permissions.IsAuthenticated]

    # 1. List all
    def get(self, request, *args, **kwargs):
        params = request.query_params
        if(len(params) == 0):
            vacs = vacData.objects.all()
        elif("statename" in params.keys()):
            vacs = vacData.objects.filter(statename = params['statename'])
        # elif("countyname" in params.keys()):
        #     counties = Counties.objects.filter(countyname = params['countyname'])
        serializer = VacDataSerializer(vacs, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class ClosureDataApiView(APIView):
    # add permission to check if user is authenticated
    # permission_classes = [permissions.IsAuthenticated]

    # 1. List all
    def get(self, request, *args, **kwargs):
        params = request.query_params
        if(len(params) == 0):
            closures = closureData.objects.all()
        elif("statename" in params.keys()):
            closures = closureData.objects.filter(statename = params['statename'])
        serializer = ClosureDataSerializer(closures, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)