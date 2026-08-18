import { Component, signal } from "@angular/core";

@Component({
   selector:'App ',
   templateUrl:'app.html',
   styleUrl :'app.css'
})

export class myApp{
     User = signal({
      Name : 'Ali' ,
      age : 12 
     })
     increaseAge(){
      this.User.update(e=>({
         ...e ,
         age : e.age+1
      }))
     }
}