import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../dashboard/user/model/user.model';

<<<<<<< HEAD
import { map } from 'rxjs/operators'
=======
<<<<<<< HEAD
=======
import { map } from 'rxjs/operators'
>>>>>>> f891e9a6694d9cbc303db54d3bd55bf702a722b5
>>>>>>> Afh21-master

@Injectable({
  providedIn: 'root'
})
export class UserService {

  api: any = 'http://localhost:3000';
  service: any = '/dashboard/users';
<<<<<<< HEAD

=======
>>>>>>> f891e9a6694d9cbc303db54d3bd55bf702a722b5

  constructor( public http: HttpClient ) { }


  getUsers() {
<<<<<<< HEAD

    const url = `${this.api}${this.service}`;
    return this.http.get(url);

=======
    const url = `${this.api}${this.service}`;
    return this.http.get(url);
>>>>>>> f891e9a6694d9cbc303db54d3bd55bf702a722b5
  }

  createUser(userData: UserModel) {
    const url = `${this.api}${this.service}`;
    return this.http.post(url, userData);

  }

  getUser(userId: String) {
<<<<<<< HEAD
<<<<<<< HEAD

    const url = `${this.api}${this.service}/${userId}`;
    return this.http.get(this.api);

=======
    const url = `${this.api}${this.service}/${userId}`;
=======
    const url = `${this.api}${this.service}/${userId}`;
<<<<<<< HEAD
    return this.http.get(this.api);
=======
>>>>>>> Afh21-master
    return this.http.get(url);
>>>>>>> f891e9a6694d9cbc303db54d3bd55bf702a722b5
  }

  updateUser(userId: String, userData: UserModel ) {
    const url = `${this.api}${this.service}/${userId}`;
    return this.http.put(url, userData );
  }

  deleteUser(userId: String) {
<<<<<<< HEAD

    const url = `${this.api}${this.service}/${userId}`;
    return this.http.delete(url);

=======
    const url = `${this.api}${this.service}/${userId}`;
    return this.http.delete(url);
<<<<<<< HEAD
>>>>>>> f891e9a6694d9cbc303db54d3bd55bf702a722b5
=======
>>>>>>> Afh21-master
  }

}
