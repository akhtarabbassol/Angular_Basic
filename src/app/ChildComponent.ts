import { Component, model } from "@angular/core";

@Component({
    selector :'App2' ,
    template :`<h1>Count in Child : {{num()}}</h1>`
})

export class childClass{
    num = model(0)
}