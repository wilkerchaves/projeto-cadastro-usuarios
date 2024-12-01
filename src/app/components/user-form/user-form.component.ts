import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { User } from '../../models/user/user';
import { GenresListResponse } from '../../types/genres-list-response';
import { StatesListResponse } from '../../types/states-list-response';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent implements OnChanges {
  
  @Input()
  userSelected: User = {} as User
  
  @Input()
  genresList: GenresListResponse = []
  
  @Input()
  statesList: StatesListResponse = []
  
  ngOnChanges(changes: SimpleChanges): void {
    
  }
}
