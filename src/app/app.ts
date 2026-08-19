import { Component, linkedSignal, signal } from "@angular/core";

@Component({
    selector:'App' ,
    templateUrl:'app.html' ,
    styleUrl:'app.css'
})

export class myApp{
    UserInfo = signal([
        {
            Id : 1 ,
            Name : "Ali" ,
            Pmethod : 'JazzCash'
        },
        {
            Id : 2 ,
            Name : "Farhat" ,
            Pmethod : 'EasyPaisa'
        },
        {
            Id : 3,
            Name : "Waqar" ,
            Pmethod : 'Bank'
        },
        {
            Id : 4 ,
            Name : "Aoun" ,
            Pmethod : 'RasatId'
        },
    ])

    ShowUser = linkedSignal(()=>this.UserInfo()[0])
    currentIndex = signal(0)
    ShowNext(){
     this.currentIndex.update(e=>{
       let nextIndex  = (e+1) % this.UserInfo().length ;
       this.ShowUser.set(this.UserInfo()[nextIndex])
       return nextIndex ; 
    })
    }


}