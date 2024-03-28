import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {



  categories: string[] = [];
  selectedProduct: string = ""

  products: any = []
  getCatagory() {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((res) => {
        res.unshift("all");
        this.categories = res;
      })
  }

  getSelectedCatagory(item: string) {
    if (item === "all") {
      this.getProducts()
    } else {
      fetch(`https://fakestoreapi.com/products/category/${item}`)
        .then((res) => res.json())
        .then((res) => {
          this.products = res;
        })
    }
  }

  getProducts() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        this.products = res;
      })
  }

  ngOnInit(): void {
    this.getCatagory();
    this.getProducts()
  }

  catagoryChange(e: any) {
    const { value }: { value: string } = e.target
    this.selectedProduct = value;
    this.getSelectedCatagory(value)
  }

  toggleCarts: boolean = false;
  Toggle() {
    this.toggleCarts = this.toggleCarts ? false : true
  }


  totalPrice: number = 0;
  totalCount: number = 0;

  CartItems: any[] = [];
  updatePrice() {
    let price: number = 0;
    for (let x: number = 0; x < this.CartItems.length; x++) {
      price = price + (this.CartItems[x].price * this.CartItems[x].count)
    }
    this.totalPrice = price;
  }

  AddCartClick(product: any) {
    console.log(product);
    const existingItemIndex = this.CartItems.findIndex((item: any) => item.id === product.id);

    if (existingItemIndex !== -1) {
      this.CartItems[existingItemIndex].count++;
    } else {
      product.count = 1;
      this.CartItems.push(product);
    }
    this.updatePrice();
    alert(`${product.title} item added to cart`);
  }

  removedCartItem(cart: any) {
    const index = this.CartItems.indexOf(cart);
    if (index !== -1) {
      this.CartItems.splice(index, 1);
      alert(`${cart.title} removed from cart`);
    }
    this.updatePrice();
  }
  updateCount(event: any, items: any) {
    const newCount = event.target.value;
    items.count = newCount;
    this.updatePrice();
  }
}
