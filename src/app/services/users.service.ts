import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly userList: Array<User> = [
    {
      name: "Usuario 1",
      username: "usuario.one",
      email: "usu1@email.com",
      birthDate: "01/01/2001",
      state: 13,
      password: "AW21@!ssa1@",
      musics: [
        {
          title: "Music 1", band: "Band 1", genre: 1, isFavorite: false
        },
        {
          title: "Music 2", band: "Band 1", genre: 2, isFavorite: true
        },
        {
          title: "Music 3", band: "Band 1", genre: 3, isFavorite: false
        },
      ]
    },
    {
      name: "Usuario 1",
      username: "usuario.one",
      email: "usu1@email.com",
      birthDate: "01/01/2001",
      state: 13,
      password: "AW21@!ssa1@",
      musics: [
        {
          title: "Music 1", band: "Band 1", genre: 1, isFavorite: false
        },
        {
          title: "Music 2", band: "Band 1", genre: 2, isFavorite: true
        },
        {
          title: "Music 3", band: "Band 1", genre: 3, isFavorite: false
        },
      ]
    },
    {
      name: "Usuario 1",
      username: "usuario.one",
      email: "usu1@email.com",
      birthDate: "01/01/2001",
      state: 13,
      password: "AW21@!ssa1@",
      musics: [
        {
          title: "Music 1", band: "Band 1", genre: 1, isFavorite: false
        },
        {
          title: "Music 2", band: "Band 1", genre: 2, isFavorite: true
        },
        {
          title: "Music 3", band: "Band 1", genre: 3, isFavorite: false
        },
      ]
    },
    {
      name: "Usuario 1",
      username: "usuario.one",
      email: "usu1@email.com",
      birthDate: "01/01/2001",
      state: 13,
      password: "AW21@!ssa1@",
      musics: [
        {
          title: "Music 1", band: "Band 1", genre: 1, isFavorite: false
        },
        {
          title: "Music 2", band: "Band 1", genre: 2, isFavorite: true
        },
        {
          title: "Music 3", band: "Band 1", genre: 3, isFavorite: false
        },
      ]
    }
  ]

  getUsers(): Observable<Array<User>> {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.userList)
        observer.complete()
      }, 3000)
    })
  }
}
