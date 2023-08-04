import { Component } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';

interface DataItem {
  title: string;
  fornisor: string;
  idea: string;
}

interface ColumnItem {
  name: string;
  sortOrder: string | null;
  sortFn: (a: DataItem, b: DataItem) => number;
  sortDirections: (string | null)[];
}

@Component({
  selector: 'app-welcom',
  templateUrl: './welcom.component.html',
  styleUrls: ['./welcom.component.scss']
})
export class WelcomComponent {
size: NzButtonSize | undefined;
year = new Date().getFullYear();
}
