# Generated by Django 4.2.10 on 2024-02-22 18:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0005_size_delete_typeclothes_remove_item_category_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Color',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('color', models.CharField(choices=[('Червоний', 'Red'), ('Білий', 'White'), ('Зелений', 'Green'), ('Чорний', 'Black'), ('Сірий', 'Gray'), ('Жовтий', 'Yellow'), ('Фіолетовий', 'Pink'), ('Синій', 'Blue')], max_length=11)),
            ],
        ),
        migrations.RenameField(
            model_name='item',
            old_name='size',
            new_name='sizes',
        ),
        migrations.AlterField(
            model_name='semicategory',
            name='category',
            field=models.CharField(choices=[('Одяг', 'Clothes'), ('Взуття', 'Shoes'), ('Аксесуари', 'Accessories')], max_length=30),
        ),
        migrations.AddField(
            model_name='item',
            name='colors',
            field=models.ManyToManyField(to='shop.color'),
        ),
    ]