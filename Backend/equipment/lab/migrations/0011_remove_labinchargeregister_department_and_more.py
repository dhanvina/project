# Generated by Django 4.2.5 on 2023-09-26 08:06

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('lab', '0010_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='labinchargeregister',
            name='department',
        ),
        migrations.RemoveField(
            model_name='labinchargeregister',
            name='lab',
        ),
        migrations.RemoveField(
            model_name='labinchargeregister',
            name='lab_incharge',
        ),
        migrations.DeleteModel(
            name='LabInchargeLogin',
        ),
        migrations.DeleteModel(
            name='LabInchargeRegister',
        ),
    ]
