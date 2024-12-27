# Generated by Django 5.1.4 on 2024-12-12 05:03

import useraccount.models
import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('name', models.CharField(blank=True, max_length=255, null=True)),
                ('avatar', models.ImageField(upload_to='uploads/avatars')),
                ('is_active', models.BooleanField(default=True)),
                ('is_superuser', models.BooleanField(default=False)),
                ('is_staff', models.BooleanField(default=False)),
                ('date_joined', models.DateTimeField(auto_now_add=True)),
                ('last_login', models.DateTimeField(blank=True, null=True)),
            ],
            options={
                'abstract': False,
            },
            bases=(models.Model, PermissionError),
            managers=[
                ('objects', useraccount.models.CustomUserManager()),
            ],
        ),
    ]
