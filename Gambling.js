console.log("Wlcome to Gambling Simulator");

let Stake = 100;
const bet = 1;
let totalAmount = 300;
let totalStake =0;
const Wstake =150;
const Lstake=50;
let flag = true;
const DAYS = 3;
let StakeArray = [];
console.log("The Player has Total : "+"$"+ Stake + "stake");

class Gamblling{
  gamble = () => {
    for (let day=1; day<=DAYS; day++){
      Stake=100;
      flag=true;

    while(flag){

      let Bet = Math.floor(Math.random()*2);
       if (Bet ==bet){
                Stake++;
       }
        else{
         Stake --;
        }
          this.resign(day);
    }
}
if  (totalAmount > totalStake){
      console.log("Total Ammount loss"+"$"+(totalAmount-totalStake));
       }
        else{
                console.log("Total Ammount profit" + "$" + (totalStake-totalAmount));
        }
    }
    resign(day) {
      if (Stake>=Wstake || Stake<= Lstake){
console.log("\n On day " + " " + day +" "+ "Player Resign for the day with" +"$" + Stake);
StakeArray[day-1] = Stake;
totalStake += Stake;
flag = false;
      }
    }
  }

  var opt = new Gamblling();

  console.log(opt.gamble());
