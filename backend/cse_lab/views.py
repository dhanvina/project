from django.shortcuts import render
from .models import Department, Lab, PurchaseOrder, Equipment

def department_list(request):
    departments = Department.objects.all()
    context = {'departments':departments}
    return render(request, 'department/department_list.html', context)

def department_detail(request, pk):
    department = Department.objects.get(pk=pk)
    context = {'department':department}
    return render(request, 'department/department_detail.html', context)

def lab_list(request):
    labs = Lab.objects.all()
    context = {'labs':labs}
    return render(request, 'lab/lab_list.html', context)

def lab_detail(request, pk):
    lab = Lab.objects.get(pk=pk)
    context = {'lab':lab}
    return render(request, 'lab/lab_detail.html', context)

def purchase_order_list(request):
    purchase_orders = PurchaseOrder.objects.all()
    context = {'purchase_orders':purchase_orders}
    return render(request, 'purchase_order/purchase_order_list.html', context)

def purchase_order_detail(request, pk):
    purchase_order = PurchaseOrder.objects.get(pk=pk)
    context = {'purchase_order':purchase_order}
    return render(request, 'purchase_order/purchase_order_detail.html', context)

def equipment_list(request):
    equipments = Equipment.objects.all()
    context = {'equipments':equipments}
    return render(request, 'equipment/equipment_list.html', context)

def equipment_detail(request, pk):
    equipment = Equipment.objects.get(pk=pk)
    context = {'equipment':equipment}
    return render(request, 'equipment/equipment_detail.html', context)

from .models import EquipmentIssue

def equipment_issue_list(request):
    issues = EquipmentIssue.objects.all()
    return render(request, "equipment_issue_list.html", {"issues": issues})