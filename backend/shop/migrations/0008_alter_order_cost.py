# Generated by Django 4.2.10 on 2024-06-06 10:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("shop", "0007_order_cost"),
    ]

    operations = [
        migrations.AlterField(
            model_name="order",
            name="cost",
            field=models.DecimalField(decimal_places=2, default=0, max_digits=12),
        ),
    ]