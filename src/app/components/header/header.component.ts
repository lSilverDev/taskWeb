import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router){}

  newTask(){
    this.router.navigateByUrl("newTask");
  }

  // chamada da rota de area de trabalho

  //chamada da lista de tasks recentes

  //funçao de pesquisa

  // ver notificaçoes

  // ir para tela de login - logout

  // abrir tela de perfil
}
