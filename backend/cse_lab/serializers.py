from rest_framework import serializers
from .models import Department, Lab, PurchaseOrder, Equipment, EquipmentIssue, EquipmentReview

class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = ('id','department_number','department_name','hod_name')

class LabSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lab
        fields = ('lab_id','lab_number','department','location','lab_incharge')

class PurchaseOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = PurchaseOrder
        fields = ('id','purchase_order_number','purchase_date','supplier','purchase_order_value')

class EquipmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Equipment
        fields = ('id','equipment_serial_number','purchase_order','purchase_date','equipment_value','description','invoice','lab','status')

class EquipmentIssueSerializer(serializers.ModelSerializer):
    class Meta:
        model = EquipmentIssue
        fields = ('id','experiment','lab','number_of_equipments','details')

class EquipmentReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = EquipmentReview
        fields = ('id','equipment','quantity','date','lab_incharge_name','not_working_quantity','remarks')