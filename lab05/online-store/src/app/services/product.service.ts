import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  categories: Category[] = [
    { id: 1, name: 'Phones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Accessories' },
    { id: 4, name: 'Watches' },
    { id: 5, name: 'Phone Cases' }
  ];

  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 17',
      description: 'Смартфон Apple iPhone 17 256Gb черный',
      price: 605000,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p14/pa5/64165039.png?format=preview-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/peb/p15/64165698.png?format=preview-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p2b/pa6/64164567.png?format=preview-large'
      ],
      link: 'https://kaspi.kz/shop/search/?text=iPhone%2017&q=%3AavailableInZones%3AMagnum_ZONE1&sort=relevance&filteredByCategory=false&sc=',
      likes: 0,
      categoryId: 1
    },
    {
      id: 2,
      name: 'Samsung Galaxy',
      description: 'Смартфон Samsung Galaxy A07 6 ГБ/128 ГБ черный',
      price: 68666,
      rating: 4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p60/p06/30558681.png?format=preview-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p60/p06/30558681.png?format=preview-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p0d/pdb/61291709.jpg?format=preview-large'
      ],
      link: 'https://kaspi.kz/shop/search/?text=samsung%20galaxy&q=%3AavailableInZones%3AMagnum_ZONE1&sort=relevance&filteredByCategory=false&sc=',
      likes: 0,
      categoryId: 1
    },
    {
      id: 3,
      name: 'MacBook Air',
      description: 'Ноутбук Apple MacBook Air 13 2025 13.6" / 16 Гб / SSD 256 Гб / macOS / MC6T4',
      price: 522315,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pa2/p94/37425233.png?format=preview-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/pa2/p94/37425233.png?format=preview-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p3c/p38/16711028.jpg?format=preview-large'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000',
      likes: 0,
      categoryId: 2
    },
    {
      id: 4,
      name: 'MacBook Pro',
      description: 'Ноутбук Apple MacBook Pro 14 2024 14.2" / 16 Гб / SSD 512 Гб / macOS / MW2W3',
      price: 1091187,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pa1/pce/15484955.jpg?format=preview-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/pa1/pce/15484955.jpg?format=preview-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p45/p1e/79089383.jpeg?format=preview-large'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2024-14-2-16-gb-ssd-512-gb-macos-mw2w3-134209187/?c=750000000',
      likes: 0,
      categoryId: 2
    },
    {
      id: 5,
      name: 'Sony Headphones',
      description: 'Наушники Sony WH-CH520 синий',
      price: 18619,
      rating: 4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hed/hd3/84007329103902.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hed/hd3/84007329103902.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-ch520-sinii-113518221/?c=750000000',
      likes: 0,
      categoryId: 3
    },
    {
      id: 6,
      name: 'iPad Pro',
      description: 'Планшет Apple iPad Pro 11 2024 Wi-Fi 11 дюйм 8 Гб/256 Гб черный',
      price: 515564,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb3/h75/86106948239390.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hb3/h75/86106948239390.png?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/h27/h89/86106948272158.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-ipad-pro-11-2024-wi-fi-11-djuim-8-gb-256-gb-chernyi-119774227/?c=750000000',
      likes: 0,
      categoryId: 3
    },
    {
      id: 7,
      name: 'iPad Air',
      description: 'Планшет Apple iPad Air 11 2025 Wi-Fi 11 дюйм 8 Гб/128 Гб фиолетовый',
      price: 350000,
      rating: 4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pae/pf8/37020299.png?format=preview-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/pae/pf8/37020299.png?format=preview-large', 
        'https://resources.cdn-kaspi.kz/img/m/p/pe5/p31/37020582.png?format=preview-large'],
      link: 'https://kaspi.kz/shop/p/apple-ipad-air-11-2025-wi-fi-11-djuim-8-gb-128-gb-fioletovyi-138202498/?c=750000000',
      likes: 0,
      categoryId: 3
    },
    {
      id: 8,
      name: 'iPhone 17 Air',
      description: 'Apple smartphone with advanced features',
      price: 900000,
      rating: 4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pb8/p40/64171189.png?format=preview-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/pb8/p40/64171189.png?format=preview-large', 
        'https://resources.cdn-kaspi.kz/img/m/p/pb8/p40/64171189.png?format=preview-large'],
      link: 'https://kaspi.kz/shop/search/?text=iPhone%2017%20air&q=%3AavailableInZones%3AMagnum_ZONE1&sort=relevance&filteredByCategory=false&sc=',
      likes: 0,
      categoryId: 1
    }
    ,
    {
      id: 9,
      name: 'iPhone 13 Pro Transparent Case',
      description: 'Чехол для Apple iPhone 13 прозрачный',
      price: 10,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h5c/hec/86261115060254.png?format=preview-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h5c/hec/86261115060254.png?format=preview-large'],
      link: 'https://kaspi.kz/shop/p/chehol-dlja-apple-iphone-13-prozrachnyi-106185651/?c=750000000',
      likes: 0,
      categoryId:5
    },
    {
      id:10,
      name: 'Apple Watch Series 7',
      description: 'Умные часы Apple Watch Series 7 41 мм алюминий синий',
      price: 150000,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p00/p18/7079036.png?format=preview-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p00/p18/7079036.png?format=preview-large'],
      link: 'https://kaspi.kz/shop/p/apple-watch-series-7-41-mm-aluminium-sinii-113518221/?c=750000000',
      likes: 0,
      categoryId:4
    },
    {
      id:11,
      name: 'Apple Watch Series 11',
      description: 'Смарт-часы Apple Watch Series 11 M/L 46 мм черный',
      price: 220000,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p89/pba/64468961.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p89/pba/64468961.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p6d/pba/64468962.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-watch-series-11-m-l-46-mm-chernyi-145555823/?c=750000000',
      likes: 0,
      categoryId:4
    },
    {
      id:12,
      name: 'Iphone 17 case',
      description: 'Чехол для Apple iPhone 17',
      price: 200,
      rating: 4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p66/98651568.jpeg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p18/p66/98651568.jpeg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/chehol-casesh-dlja-apple-iphone-17-pro-max-temno-zelenyi-155343301/?c=750000000',
      likes: 0,
      categoryId:5
    }
  ];

  getCategories() {
    return this.categories;
  }

  getProductsByCategory(categoryId: number) {
    return this.products.filter(p => p.categoryId === categoryId);
  }
}