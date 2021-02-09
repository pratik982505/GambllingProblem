console.log("Wlcome to Gambling Simulator");

let Stake = 100;
const bet = 1;
const Wstake =150;
const Lstake=50;
let flag = true;
console.log("The Player has Total : "+"$"+ Stake + "stake");

class Gamblling{
  gamble = () => {
    while(flag){

      let Bet = Math.floor(Math.random()*2);
       
       switch (Bet){
            case 0 :
                Stake++;
           console.log("Player won.\tNow Player has Total: "+"$" + Stake);
            break;
            case 1 :
                Stake--;
            console.log("Player Loss.\tNow player has Total:"+"$"+ Stake);
             break;
        } 
          this.resign();
    }
}
  resign() {
      if (Stake>=Wstake || Stake<= Lstake){
          console.log("\n Resign for Day and" +" "+"$"+Stake);
    flag = false;
      }
   } 
} 
  var opt = new Gamblling();

  console.log(opt.gamble());
