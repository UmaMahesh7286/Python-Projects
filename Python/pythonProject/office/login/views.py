from django.shortcuts import render
from .models import Employee
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
@csrf_exempt# Create your views here.
def index(request):
    return render(request,'index.html')
def profile(request):
    if request.method =='POST':
            print("post")
            try:
                print("try")
                id = request.POST['id']
            except:
                id=0
                print("except")
            if(id!=0):
                password = request.POST['password']
                print(password)
                emp=Employee.objects.get(id=id)
                print(emp.password,"dgfhrtr",password)
                if(emp.password==password):
                    print(emp.password,"dsfsdfsd")
                    context = {
                        'emp': emp
                    }
                    return render(request, 'profile.html',context)
                else:
                    return HttpResponse("invalid credentials")
            else:
                empName=request.POST['empName']
                designation = request.POST['designation']
                email = request.POST['email']
                password1 = request.POST['password1']
                new_emp= Employee(empName=empName,designation=designation,email=email,password=password1)
                print("post before save",new_emp)
                new_emp.save()
                context = {
                    'emp': new_emp
                }
                print("post",new_emp)
                return render(request,'profile.html',context)
def viewallemp(request):
       emps=Employee.objects.all()
       context ={
           'emps': emps
       }
       return render(request,'viewallemp.html',context)
def delete(request,id=0):
    remove_emp=Employee.objects.get(id=id)
    remove_emp.delete()
    emps=Employee.objects.all()
    context ={
        'emps': emps
    }
    return render(request,'viewallemp.html',context)

def editemp(request,id=0):
    emp=Employee.objects.get(id=id)
    context={
        'emp':emp
    }
    return render(request,'editemp.html',context)

def filteremp(request):
    emps = Employee.objects.all()
    context = {
        'emps': emps
    }
    print(context)
    return render(request,'filteremp.html',context)

@csrf_exempt
def loginlogs(request):
   if request.method =='POST':
       print("POST 111",request)
       print( request.POST.get('email'),"emailtest")
       if 'email' in request.POST:
           # Access the 'data' key
           print("email")
           data_value = request.POST['email']

           # Rest of your code that uses 'data_value'
       else:
           # Handle the case when 'data' key is not present
           print("The 'data' key is not present in the MultiValueDict.")
       # print(request.POST['data'],"loginlogs")
       # print(request.POST['current_time'],"loginlogs")

       return render(request,'loginlogs.html')
   else:
       return render(request, 'loginlogs.html')