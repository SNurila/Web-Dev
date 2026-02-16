import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Products } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product!: Products;

  selectedImage = '';

  ngOnInit() {
    this.selectedImage = this.product.image;
  }

  share() {
    const url =
      'https://wa.me/?text=' +
      encodeURIComponent('Check this product: ' + this.product.link);

    window.open(url, '_blank');
  }

  changeImage(img: string) {
    this.selectedImage = img;
  }
}
