import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersPlaceholdList } from '../types/users-placeholder-list';

@Injectable({
  providedIn: 'root'
})
export class UsersPlaceholdService {

  constructor(private readonly _httpClient: HttpClient) { }


  getUsersPlaceholder(): Observable<UsersPlaceholdList> {
    return this._httpClient.get<UsersPlaceholdList>('https://jsonplaceholder.typicode.com/users')
  }
}
