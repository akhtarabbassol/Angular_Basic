import { Component, signal } from "@angular/core";

@Component({
   selector :'App-Doc',
   templateUrl :'app.html'
})

export class myApp{
  Name  = signal("Ali")
  fname = signal("Ali")
  Num = signal(0)
  fullName(){
    this.Name.set(`${this.fname()} khan buck`)
  }
  Increase(){
    this.Num.update(e=>e+1)
  }
  Decrease(){
    this.Num.update(e=>e-1)
  }
  Reset(){
    this.Num.set(0)
  }
}