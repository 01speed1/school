import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from './model/user.model';

import { UserService } from '../../services/user.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: []
})

export class UsersComponent implements OnInit {

  formUser: FormGroup;

  test: Array<any> = [ { code: 'm', name: 'Masculino'}, { code: 'f', name: 'Femenino' } ];
  rol:  Array<any> = [ { code: 'administrator', name: 'Administrador'}, { code: 'teacher', name: 'Instructor'} ];
  user: Array<any>;

  constructor(private _userService: UserService,
              private router: Router) {
            this.cargarUsuarios();
          }

  ngOnInit() {

    this.formUser = new FormGroup({
        name:     new FormControl(null, Validators.required),
        lastname: new FormControl(null, Validators.required),
        genre:    new FormControl(null, Validators.required),
        born:     new FormControl(null, Validators.required),
        email:    new FormControl(null, Validators.required),
        password: new FormControl(null, Validators.required),
        rol:      new FormControl(null, Validators.required)
      });

  }

  cargarUsuarios() {
      this._userService.getUsers()
        .subscribe( data => { this.user = data['user'] });
  }
  registerUser() {



    if (this.formUser.invalid) {
      swal('Bad Job', '¡Ups! Algo va mal, formulario inválido..!', 'error');
      return;
    }

    if (!this.formUser.value.accept) {
      swal('Bad Job', '¡Debes aceptar las condiciones!', 'error');
      return;
    }


    const usuario = new UserModel(
      this.formUser.value.name,
      this.formUser.value.lastname,
      this.formUser.value.genre,
      this.formUser.value.born,
      this.formUser.value.email,
      this.formUser.value.password,
      this.formUser.value.rol
    );

    this._userService.createUser(usuario).subscribe( data => {
      if (data['Ok']) {
        swal('Good Job', 'Usuario creado exitosamente', 'success');
      }
      this.formUser.reset();
      this.router.navigate(['/dashboard/users']);
    });
  }


  deleteUser(id: String) {
    this._userService.deleteUser(id).subscribe( data => {
      if (data['Ok']) {
        swal('Good Job', 'Usuario eliminado exitosamente', 'success');
      }
      this.cargarUsuarios();
      this.router.navigate(['/dashboard/users']);
    });
    return;
  }
}

