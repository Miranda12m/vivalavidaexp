# Generated by Django 4.2.7 on 2023-11-12 00:49

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Tour',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('hour', models.CharField(max_length=10)),
                ('duration', models.CharField(max_length=20)),
                ('language', models.CharField(max_length=50)),
                ('meeting_point', models.CharField(max_length=255)),
                ('price', models.CharField(max_length=50)),
                ('image', models.ImageField(blank=True, null=True, upload_to='')),
                ('url', models.URLField()),
            ],
        ),
    ]
