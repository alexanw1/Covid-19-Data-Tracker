# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Casedata(models.Model):
    idcasedata = models.IntegerField(db_column='idCaseData', blank=True, primary_key=True)  # Field name made lowercase.
    stateid = models.IntegerField(db_column='StateID', blank=True, null=True)  # Field name made lowercase.
    fips = models.TextField(db_column='fips', blank=True, null=True)
    iscounty = models.IntegerField(db_column='isCounty', blank=True, null=True)  # Field name made lowercase.
    countyname = models.TextField(db_column='countyName', blank=True, null=True)  # Field name made lowercase.
    stateabvr = models.TextField(db_column='stateAbvr', blank=True, null=True)  # Field name made lowercase.
    casesconfirmed = models.IntegerField(db_column='casesConfirmed', blank=True, null=True)  # Field name made lowercase.
    casesprobable = models.IntegerField(db_column='casesProbable', blank=True, null=True)  # Field name made lowercase.
    deathsconfirmed = models.IntegerField(db_column='deathsConfirmed', blank=True, null=True)  # Field name made lowercase.
    deathsprobable = models.IntegerField(db_column='deathsProbable', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'casedata'


class Counties(models.Model):
    countyname = models.CharField(db_column='countyName', max_length=100)  # Field name made lowercase.
    latitude = models.FloatField(db_column='latitude', null=False)
    longitude = models.FloatField(db_column='longitude', null=False)
    fips = models.IntegerField(db_column='fips', primary_key=True)
    state = models.CharField(db_column='state', max_length=100)

    class Meta:
        managed = False
        db_table = 'counties'


class States(models.Model):
    stateid = models.IntegerField(db_column='StateID', blank=True, primary_key=True)  # Field name made lowercase.
    statename = models.CharField(db_column='stateName', max_length=100)  # Field name made lowercase.
    abrv = models.CharField(db_column='abrv', max_length=100)
    latitude = models.FloatField(db_column='latitude', null=False)
    longitude = models.FloatField(db_column='longitude', null=False)

    class Meta:
        managed = False
        db_table = 'states'

class vacData(models.Model):
    stateid = models.IntegerField(db_column='StateID', blank=True, primary_key=True)  # Field name made lowercase.
    statename = models.CharField(db_column='stateName', max_length=45, null=False)  # Field name made lowercase.
    firstdose = models.IntegerField(db_column='firstDose', null=False)
    seconddose = models.IntegerField(db_column='secondDose', null=False)
    totaldose = models.IntegerField(db_column='totalDose', null=False)
    class Meta:
        managed = False
        db_table = 'vacdata'

class closureData(models.Model):
    stateid = models.IntegerField(db_column='stateID', blank=True, primary_key=True)  # Field name made lowercase.
    statename = models.TextField(db_column='stateName', max_length=65535, null=False)  # Field name made lowercase.
    stayathome = models.TextField(db_column='stayAtHome', max_length=65535, null=False)
    travelquarantine = models.TextField(db_column='travelQuarantine', max_length=65535, null=False)
    nonessentialclosed = models.TextField(db_column='nonEssentialClosed', max_length=65535, null=False)
    largegatherings = models.TextField(db_column='largeGatherings', max_length=65535, null=False)
    restaurants = models.TextField(db_column='restaurants', max_length=65535, null=False)
    bars = models.TextField(db_column='bars', max_length=65535, null=False)
    masks = models.TextField(db_column='masks', max_length=65535, null=False)
    stateofemergency = models.TextField(db_column='stateOfEmergency', max_length=65535, null=False)

    class Meta:
        managed = False
        db_table = 'closuredata'