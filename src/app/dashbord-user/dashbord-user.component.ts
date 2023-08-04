import { Component } from '@angular/core';
import { BooleanInput } from 'ng-zorro-antd/core/types';

@Component({
  selector: 'app-dashbord-user',
  templateUrl: './dashbord-user.component.html',
  styleUrls: ['./dashbord-user.component.scss']
})
export class DashbordUserComponent {
onItemChecked(arg0: any,$event: any) {
throw new Error('Method not implemented.');
}
checkedIds: any;
onAllChecked($event: any) {
throw new Error('Method not implemented.');
}
listOfData: readonly any[] | undefined;
onCurrentPageDataChange: any;
checked: any;
indeterminate: BooleanInput;

}
