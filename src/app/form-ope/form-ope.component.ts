import { Component, OnInit } from '@angular/core';

interface Person {
  // Define properties for Person
  // name: string;
  // age: number;
  // etc.
}

@Component({
  selector: 'app-form-ope',
  templateUrl: './form-ope.component.html',
  styleUrls: ['./form-ope.component.scss']
})
export class FormOpeComponent implements OnInit {
  // Variables for NzDemoSelectMultipleComponent
  listOfOption: string[] = [];
  listOfSelectedValue = ['a10', 'c12'];

  // Other variables
  checkboxValue1: any;
  inputValue: any;
  isCheckboxChecked: any;

  // table 
  listOfData: Person[] = [];

  constructor() {}

  ngOnInit(): void {
    // Initialize listOfOption for NzDemoSelectMultipleComponent
    const children: string[] = [];
    for (let i = 10; i < 36; i++) {
      children.push(`${i.toString(36)}${i}`);
    }
    this.listOfOption = children;

    // Initialize listOfData
    // For example:
    // this.listOfData = [
    //   { name: 'John', age: 25 },
    //   { name: 'Jane', age: 30 }
    // ];
  }

  // Reset form fields
  resetForm(): void {
    this.inputValue = '';
    this.checkboxValue1 = false;
    this.isCheckboxChecked = false;
  }
}
 