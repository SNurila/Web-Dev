import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product!: Product;
  @Output() delete = new EventEmitter<number>();

  selectedImage = '';

  ngOnInit() {
    this.selectedImage =
      this.product.images?.length
        ? this.product.images[0]
        : this.product.image;
  }

  changeImage(img: string) {
    this.selectedImage = img;
  }

  like() {
    this.product.likes++;
  }

  remove() {
    this.delete.emit(this.product.id);
  }

  share() {
  window.open(
    'https://wa.me/87085304019' +
    encodeURIComponent(this.product.link),
    '_blank'
  );
}
}