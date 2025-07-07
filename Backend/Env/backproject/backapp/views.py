from django.shortcuts import render
from rest_framework.views import APIView
from . models import *
from . serializer import *
from rest_framework.response import Response
# Create your views here.

class ReactView(APIView):
    def get(self,request):
        output =[{"employee":output.employee, "department":output.department}
                ]