import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
@Component({
   selector :'App' ,
   imports :[FormsModule] ,
   templateUrl :'app.html' ,
   styleUrl :'app.css'
})
export class myApp{
     email:string = '' 
     password:string = ''
}