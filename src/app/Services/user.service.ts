import { EventEmitter } from "@angular/core"

//component interaction
export class UserService{
    users=[
        { name:"Preethi" , job : "Mother" , age :"21", photo : "https://i.pinimg.com/736x/c7/c3/ec/c7c3eca7d3697c78c6ec8e9f018429dc.jpg"},
        { name : "Sabari", job: "Web" , age :"21" , photo : " https://w7.pngwing.com/pngs/732/570/png-transparent-cartoon-boy-cartoon-character-child-people-thumbnail.png"  },
        {name : "Tommy", job: "Producer",age : "5" , photo:"https://i.pinimg.com/736x/be/b0/0e/beb00e4a420438fc0cdfa3d280e4662a.jpg" }
]

OnShowDetailsClicked= new EventEmitter<{ name: string; job: string; age: string; photo: string }>();
ShowUserDetails(user:{ name: string; job: string; age: string; photo: string } ){
    this.OnShowDetailsClicked.emit(user);

}


}
