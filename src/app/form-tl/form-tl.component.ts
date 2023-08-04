import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Person {
  // Define properties for Person
  // name: string;
  // age: number;
  // etc.
}

@Component({
  selector: 'app-form-tl',
  templateUrl: './form-tl.component.html',
  styleUrls: ['./form-tl.component.scss']
})
export class FormTLComponent {
change2($event: boolean) {
throw new Error('Method not implemented.');
}
  // Variables for NzDemoSelectMultipleComponent
  listOfOption: string[] = [];
  listOfSelectedValue = ['a10', 'c12'];

  // Other variables
  checkboxValue1: any;
  inputValue: any;
  isCheckboxChecked: any;

  // table 
  listOfData: Person[] = [];
visible1: boolean|undefined;

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

  visible: boolean = false;

  clickMe(): void {
    this.visible = false;
  }

  change(value: boolean): void {
    console.log(value);
  }
    
  @ViewChild('form', { static: false }) formDirective!: NgForm;

  cancel() {
    this.visible = false;
    this.formDirective.resetForm();
  }
}
