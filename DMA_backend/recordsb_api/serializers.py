from rest_framework import serializers
from recordsb.models import Records


class RecordsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Records
        fields = ('id', 'author', 'name_of_student', 'name_of_parent', 'email', 'school_owed', 'amount_owed', 'created_at', 'updated_at')