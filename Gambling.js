console.log("Wlcome to Gambling Simulator");

let Stake = 100;
const bet = 1;
console.log("The Player has Total : "+"$"+ Stake +  " " +"stake");
    gamble = () => {
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
    }
    
   console.log(gamble());
