import { Component, OnInit } from '@angular/core';
import User from '../models/user.model';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  user:User = new User();
  users:User[] = [];
  labelButao = "Cadastrar";

  constructor(private service: HomeService) {}

  ngOnInit() {
    this.buscarTodos();
  }

  buscarTodos() {
    this.service.buscar().subscribe(users => this.users = users);
  }

  post(){
    if(this.user.id){
      this.service.editar(this.user).subscribe();
    } else {
      this.user.id = this.users.length + 1;
      this.user.avatar = `https://ui-avatars.com/api/?name=${this.user.nome}`;
      this.service.cadastrar(this.user).subscribe();
    }
    this.buscarTodos();
    this.user = new User();
    this.labelButao = "Cadastrar";
  }

  deletar(id: number){
    this.service.deletar(id).subscribe();
    this.buscarTodos();
  }

  editar(user: User){
    this.user = user;
    this.labelButao = "Editar";
  }
}
