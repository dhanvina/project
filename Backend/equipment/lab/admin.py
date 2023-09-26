from django.contrib import admin
from .models import Department, Lab, LabInCharge, Equipment, EquipmentIssue, EquipmentReview, PurchaseOrder
from lab.models import User
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

class UserModelAdmin(BaseUserAdmin):
  # The fields to be used in displaying the User model.
  # These override the definitions on the base UserModelAdmin
  # that reference specific fields on auth.User.
  list_display = ('id', 'email', 'name', 'is_admin')
  list_filter = ('is_admin',)
  fieldsets = (
      ('User Credentials', {'fields': ('email', 'password')}),
      ('Personal info', {'fields': ('name',)}),
      ('Permissions', {'fields': ('is_admin',)}),
  )
  # add_fieldsets is not a standard ModelAdmin attribute. UserModelAdmin
  # overrides get_fieldsets to use this attribute when creating a user.
  add_fieldsets = (
      (None, {
          'classes': ('wide',),
          'fields': ('email', 'name', 'password1', 'password2'),
      }),
  )
  search_fields = ('email',)
  ordering = ('email', 'id')
  filter_horizontal = ()


# Now register the new UserModelAdmin...
admin.site.register(User, UserModelAdmin)





# Register your models here.
@admin.register(Department)
class DepartmentAdmin(admin.ModelAdmin):
    list_display = ('department_number', 'department_name', 'hod_name')

@admin.register(Lab)
class LabAdmin(admin.ModelAdmin):
    list_display = ('lab_number', 'department', 'location')

@admin.register(LabInCharge)
class LabInChargeAdmin(admin.ModelAdmin):
    list_display = ('lab_incharge_name', 'lab')

@admin.register(Equipment)
class EquipmentAdmin(admin.ModelAdmin):
    list_display = ('equipment_serial_number', 'lab', 'purchase_date', 'status')

@admin.register(EquipmentIssue)
class EquipmentIssueAdmin(admin.ModelAdmin):
    list_display = ('experiment', 'lab_incharge', 'number_of_equipments')

@admin.register(EquipmentReview)
class EquipmentReviewAdmin(admin.ModelAdmin):
    list_display = ('equipment', 'quantity', 'date', 'lab_incharge')

@admin.register(PurchaseOrder)
class PurchaseOrderAdmin(admin.ModelAdmin):
    list_display = ('purchase_order_number', 'purchase_date', 'supplier', 'total_value')

# @admin.register(LabInchargeRegister)
# class LabInchargeRegisterAdmin(admin.ModelAdmin):
#     list_display = ('lab_incharge', 'password', 'confirm_password', 'email','department','lab')

# @admin.register(LabInchargeLogin)
# class LabInchargeLoginAdmin(admin.ModelAdmin):
#     list_display = ('email', 'password')