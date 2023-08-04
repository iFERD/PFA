import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown';
import { NzFormatEmitEvent, NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { NzUploadFile } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {
  isCheckboxChecked = false;
  validateForm!: FormGroup;
  isCollapse: any;
  controlArray: any;
  inputValue: any;

  fileList1: NzUploadFile[] | undefined;
  size: any;
  radioValue: any;
  selectedValue = null;
  visible = false;
  visible2 = false;

  //tree

  expandKeys = ['0-0'];
  value?: string;
  nodes = [
    {
      title: 'M-101',
      value: '0-0',
      key: '0-0',
     
    },
    {
      title: 'M-102',
      value: '0-0',
      key: '0-0',
     
    },
    {
      title: 'M-103',
      value: '0-0',
      key: '0-0',
     
    },
    {
      title: 'M-104',
      value: '0-0',
      key: '0-0',
     
    },
    {
      title: 'M-105',
      value: '0-0',
      key: '0-0',
     
    },
    {
      title: 'M-106',
      value: '0-0',
      key: '0-0',
     
    },
    {
      title: 'M-107',
      value: '0-0',
      key: '0-0',
     
    },
    {
      title: 'M-201',
      value: '0-0',
      key: '0-0',
     
    },
  ];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  resetForm(): void {
    // You need to provide a logic to reset the form here.
    this.validateForm.reset();
  }

  toggleCollapse(): void {
    // You need to provide a logic to toggle the collapse here.
    // For instance, you may have something like this:
    this.isCollapse = !this.isCollapse;
  }



  onExpandChange1(e: NzFormatEmitEvent): void {
    const node = e.node;
    if (node && node.getChildren().length === 0 && node.isExpanded) {
      this.loadNode().then(data => {
        node.addChildren(data);
      });
    }
  }

  loadNode(): Promise<NzTreeNodeOptions[]> {
    return new Promise(resolve => {
      setTimeout(
        () =>
          resolve([
            { title: 'Child Node', key: `${new Date().getTime()}-0` },
            { title: 'Child Node', key: `${new Date().getTime()}-1` }
          ]),
        1000
      );
    });
  }
  checkboxValue1 = false;
  checkboxValue2 = false;
  checkboxValue3 = false;
}
