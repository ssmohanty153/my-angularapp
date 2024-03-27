import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-practice',
  templateUrl: './ng-if-practice.component.html',
  styleUrl: './ng-if-practice.component.css'
})
export class NgIfPracticeComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {

  }

  product: any = {
    name: "shower",
    image: 'assets/shower.jpg',
    description: "This is hand shower"
  }



  btnText: string = "Description";
  togglepreview: boolean = true;




  PreviewClick() {
    this.togglepreview = this.togglepreview ? false : true;
    this.btnText = this.btnText === "Description" ? "Preview" : "Description"
  }

}
