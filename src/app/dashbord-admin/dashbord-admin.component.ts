import { Component, OnInit } from '@angular/core';

interface DataItem {
  id: number;
  idea: string;
  supplier: string;
  status: string;
  disabled?: boolean;
}

@Component({
  selector: 'app-dashbord-admin',
  templateUrl: './dashbord-admin.component.html',
  styleUrls: ['./dashbord-admin.component.scss']
})

export class DashbordAdminComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public loading: boolean = false;
  checked = false;
  indeterminate = false;
  listOfData: DataItem[] = []; // populate with actual data
  setOfCheckedId = new Set<number>();
  checkedIds: {[key: number]: boolean} = {};

  formatOne = (percent: number) => `${percent} Ideas `;
  formatTwo = (percent: number) => `${percent} Ideas `;
  formatThree = (percent: number) => `${percent} Ideas `;
  formatFour = (percent: number) => `${percent} Ideas `;

  onItemChecked(id: number, checked: boolean): void {
    this.checkedIds[id] = checked;
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
    this.refreshCheckedStatus();
  }

  onAllChecked(value: boolean): void {
    this.listOfData.forEach(item => {
      this.setOfCheckedId.add(item.id);
      this.checkedIds[item.id] = value;
    });
    if (!value) {
      this.setOfCheckedId.clear();
    }
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    this.checked = this.listOfData.every(item => this.setOfCheckedId.has(item.id));
    this.indeterminate = this.listOfData.some(item => this.setOfCheckedId.has(item.id)) && !this.checked;
  }

  sendRequest(): void {
    // code to send request
    console.log('Request sent for these ids: ', Array.from(this.setOfCheckedId));
  }

  onCurrentPageDataChange($event: DataItem[]): void {
    // you can handle changes here
  }
}
