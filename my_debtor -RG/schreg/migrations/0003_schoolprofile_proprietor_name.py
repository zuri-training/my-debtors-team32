# Generated by Django 4.1 on 2022-08-10 04:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('schreg', '0002_remove_staffinfo_email_remove_staffinfo_phone_number_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='schoolprofile',
            name='proprietor_name',
            field=models.CharField(help_text='Surname first', max_length=100, null=True),
        ),
    ]
