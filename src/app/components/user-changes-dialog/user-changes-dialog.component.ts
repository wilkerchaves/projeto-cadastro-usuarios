import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../../models/user/user';

@Component({
  selector: 'app-user-changes-dialog',
  templateUrl: './user-changes-dialog.component.html',
  styleUrl: './user-changes-dialog.component.scss'
})
export class UserChangesDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { originalUser: User, userSelected: User }) {

  }

}
