# Generated by Django 4.2.7 on 2023-11-13 05:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vivalv', '0003_alter_tour_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tour',
            name='image',
            field=models.URLField(),
        ),
    ]