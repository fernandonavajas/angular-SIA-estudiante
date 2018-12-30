import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = ['ryan','bob','vince','fernando','joe'];
  activated: boolean = true;

  name: string = 'fernando navajas'
  age: number=25;
  address:{
    street: string;
    city: string;
  };
  hobbies:string[] = ['nadar','leer','cantar']


  constructor(){
    this.age = 28;
    this.address={
      street: 'alejandro galaz 4141',
      city: 'Santiago'
    }
  }

  sayHello(){
    alert('Hola');

  }
  agregarUsuario(newUser){
    //console.log(newUser.value); mostar por consola en chrome
    this.users.push(newUser.value);
    newUser.value='';
    newUser.focus();
    return false;
  }

  deleteUser(user){
    for(let i=0;i<this.users.length;i++){
      if(user== this.users[i]){
        this.users.splice(i,1);
      }
    }

  }
}
