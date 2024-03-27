import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  // product: any = {
  //   Name: "subhransu",
  //   price: 100,
  //   stock: false
  // }
  product: any = {}
  productNo: number = 1;

  name: string = "subhransu";
  stock: boolean = false;
  price: number = 3000;
  selectItem: string = "Delhi";

  ngOnInit(): void {

    fetch(`https://fakestoreapi.com/products/${this.productNo}`)
      .then((res) => res.json())
      .then((res) => {
        this.product = res
      })
  }

}
