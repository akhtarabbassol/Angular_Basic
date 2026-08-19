import { Component, model } from "@angular/core";
import { childClass } from "./ChildComponent";

@Component({
    selector :'App' ,
    imports:[childClass] ,
    templateUrl :'app.html',
    styleUrl :'app.css'
})
export class myApp{
    count = model(0)
    Increase(){
        this.count.update(e=>e+1)
    }
    Decrease(){
        this.count.update(e=>e-1)
    }
}