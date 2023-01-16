import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'teste-unitarios';
  user: any;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.user = { name: 'Jean', email: 'jean.gabriel@gmail.com', password: '091011' }
  }

  getUserMessage(event: any) {
    console.log('Mensagem do filho: ', event)
  }

  goTo() {
    this.router.navigate(['/dashboard'])
  }
}
