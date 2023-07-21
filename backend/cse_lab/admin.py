from django.contrib import admin
from .models import Department, Lab, PurchaseOrder, Equipment, EquipmentIssue, EquipmentReview

admin.site.register(Department)
admin.site.register(Lab)
admin.site.register(PurchaseOrder)
admin.site.register(Equipment)
admin.site.register(EquipmentIssue)
admin.site.register(EquipmentReview)