import { Component, computed, signal } from "@angular/core";

@Component({
   selector:'App' ,
   templateUrl:'app.html' ,
   styleUrl :'app.css'
})
export class myApp {
   price = signal(20)
   Quentity = signal(5)
   total = computed(()=>(this.price()*this.Quentity()))
   increase(){
      this.Quentity.update(e=>e+1)
   }
   decrease(){
      this.Quentity.update(e=>e-1)
   }
}