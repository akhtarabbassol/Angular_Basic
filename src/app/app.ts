import { Component, linkedSignal, signal } from "@angular/core";

interface UserInfo{
    id:number ,
    Name : string ,
    Desination:string
}

@Component({
    selector :'App',
    templateUrl:'app.html',
    styleUrl:'app.css'
})

export class myApp{
    Users1 = signal<UserInfo[]>([
        {
            id : 1 ,
            Name : "Ali" ,
            Desination : 'Student'
        },
        {
            id : 1 ,
            Name : "Wafdar" ,
            Desination : 'Developer'
        },
        {
            id : 1 ,
            Name : "Ghayur" ,
            Desination : 'Developer'
        },
    ])
    Users2 = signal<UserInfo[]>([
                {
            id : 1 ,
            Name : "Farhat" ,
            Desination : 'Developer'
        },
        {
            id : 2,
            Name : "Zarak" ,
            Desination : 'SEC Expert'
        },
        {
            id : 3 ,
            Name : "Tasawar" ,
            Desination : 'Developer'
        },
    ])
   SelectSec = signal(1)

   SelectUser = linkedSignal({
    source:()=>this.SelectSec() ,
    computation:(sec)=>{
        if(sec===1){
            return this.Users1()[0]
        }
        else{
            return this.Users2()[2]
        }
    }
   })
   ChangeSec(){
    this.SelectSec.update(e=>e===1?2:1)
   }

}