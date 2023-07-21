from django.db import models

class Department(models.Model):
    department_number = models.CharField(max_length=10)
    department_name = models.CharField(max_length=100)
    hod_name = models.CharField(max_length=100)
    def __str__(self):
        return f"{self.department_number}, {self.department_name}"

class Lab(models.Model):
    lab_id = models.AutoField(primary_key=True)
    lab_number = models.CharField(max_length=10)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    location = models.CharField(max_length=100)
    lab_incharge = models.CharField(max_length=100)
    def __str__(self):
        return f"{self.lab_id}, {self.department}"

class PurchaseOrder(models.Model):
    purchase_order_number = models.CharField(max_length=10)
    purchase_date = models.DateField()
    supplier = models.TextField()
    purchase_order_value = models.DecimalField(max_digits=10, decimal_places=2)
    def __str__(self):
        return f"{self.purchase_order_number}, {self.purchase_date}"

class Equipment(models.Model):
    equipment_serial_number = models.CharField(max_length=50)
    purchase_order = models.ForeignKey(PurchaseOrder, on_delete=models.CASCADE)
    purchase_date = models.DateField()
    equipment_value = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()
    invoice = models.ImageField(upload_to='invoices/')
    lab = models.ForeignKey(Lab, on_delete=models.CASCADE)
    status = models.BooleanField(default=True)
    def __str__(self):
        return f"{self.equipment_serial_number}, {self.status}"

class EquipmentIssue(models.Model):
    experiment = models.CharField(max_length=100)
    lab = models.CharField(max_length=100)
    number_of_equipments = models.IntegerField()
    details = models.TextField()

    def __str__(self):
        return f"{self.lab}, {self.experiment}"



class EquipmentReview(models.Model):
    equipment = models.ForeignKey(Equipment, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    date = models.DateField()
    lab_incharge_name = models.CharField(max_length=100)
    not_working_quantity = models.IntegerField()
    remarks = models.TextField()

    def __str__(self):
        return f"{self.equipment}, {self.date}"