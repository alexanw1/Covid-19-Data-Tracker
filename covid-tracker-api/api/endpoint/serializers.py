# api/api/serializers.py
from rest_framework import serializers
from api.models import Casedata
from api.models import Counties
from api.models import States
from api.models import vacData
from api.models import closureData

class CaseDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = Casedata
        fields = ["idcasedata", "stateid", "fips", "iscounty", "countyname", "stateabvr", "casesconfirmed", "casesprobable", "deathsconfirmed", "deathsprobable"]


class CountyDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = Counties
        fields = ["countyname", "latitude", "longitude", "fips", "state"]


class StateDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = States
        fields = ["stateid", "statename", "abrv", "latitude", "longitude",]


class VacDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = vacData
        fields = ["stateid", "statename", "firstdose", "seconddose", "totaldose"]

class ClosureDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = closureData
        fields = ["stateid", "statename", "stayathome", "travelquarantine", "nonessentialclosed", "largegatherings", "restaurants", "bars", "masks", "stateofemergency"]