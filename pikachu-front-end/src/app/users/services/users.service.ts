import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';
import { USERS } from '../mock-data/mock-users';
import { MessagesService } from '../../messages/services/messages.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private messagesService: MessagesService) { }

  getUsers(): Observable<User[]> {
    this.messagesService.add('fetched users');
    return of(USERS);
  }

  getUser(id: number): Observable<User> {
    this.messagesService.add(`HeroService: fetched hero id=${id}`);
    return of(USERS.find(user => user.id === id));
  }

}
