from django.http import JsonResponse
from .models import Product, Category


# /api/products/
def product_list(request):
    products = Product.objects.all()
    return JsonResponse([
        {
            "id": p.id,
            "name": p.name,
            "price": p.price,
            "description": p.description,
            "count": p.count,
            "is_active": p.is_active,
            "category_id": p.category.id
        } for p in products
    ], safe=False)


# /api/products/<id>/
def product_detail(request, id):
    p = Product.objects.get(id=id)
    return JsonResponse({
        "id": p.id,
        "name": p.name,
        "price": p.price,
        "description": p.description,
        "count": p.count,
        "is_active": p.is_active,
        "category_id": p.category.id
    })


# /api/categories/
def category_list(request):
    categories = Category.objects.all()
    return JsonResponse([
        {
            "id": c.id,
            "name": c.name
        } for c in categories
    ], safe=False)


# /api/categories/<id>/
def category_detail(request, id):
    c = Category.objects.get(id=id)
    return JsonResponse({
        "id": c.id,
        "name": c.name
    })


# /api/categories/<id>/products/
def products_by_category(request, id):
    products = Product.objects.filter(category_id=id)
    return JsonResponse([
        {
            "id": p.id,
            "name": p.name,
            "price": p.price
        } for p in products
    ], safe=False)