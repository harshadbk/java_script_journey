const player ={
    name:"buttler",
    team:"rr",
    runs:3000,
    printruns:function(){
        console.log(this.runs);
    },
};

// console.log();
// player.printruns();
// player.printruns

const emp ={
   calTax(){
        console.log("The tax of any product is 10%");
   },
};

emp.calTax();

const karanarjun = {
    salary:30000,
    calTax(){
        console.log("The tax of any product is 20%");
   },
};

// prototype defining 

console.log(karanarjun.salary);

karanarjun.__proto__ = emp;

karanarjun.calTax();

// classes and interfaces 

// class ipl{

//     constructor(player){
//         console.log("I love Cricket");
//         this.player=player;
//     }

//      start(){
//         console.log("IPL 2024 start at 22 march");
//      }
//      end(){
//         console.log("IPL 2024 will end in may ending ");
//      }
//      TeamName(){
//         console.log("The name of ipl player of rr 2024 is "+player);
//      }
// };

// let rr = new ipl("samson");
// rr.start();
// rr.end();
// rr.TeamName();


class team {
    member(){
        console.log("We have total 11 player in a team");
    }
};

class rr extends team{
    captain(){
        console.log("RR team captain is sanju baba");
    }
};

let play = new rr();

console.log(play.member());
console.log(play.captain());

// super keyword 

class person{
     name;
     constructor(name){
        this.name = name;
        console.log(name);
     }

     printname(){
        console.log("The name of person is :"+this.name);
     }

}

class iplplayer extends person{
    role;
    constructor(role,name){
        super(name);
        this.role=role;
    }
    iplplayerrole(){
        super.printname();
        console.log("The role of ipl player is "+this.role);
    }
}

let iplobj = new iplplayer("Batsman","Buttler");

iplobj.iplplayerrole();


// problem 1 

class collagedata{
    name;
    email;
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewdata(){
        console.log("The name of student is "+this.name);
        console.log("Email id of student is "+this.email);
    }
}

let somedata = new collagedata("Harshad","hk@gmail.com");

somedata.viewdata();


