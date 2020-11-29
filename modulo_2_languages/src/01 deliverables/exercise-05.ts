console.log("************** DELIVERABLE 05 - SLOT MACHINE *********************");

class SlothMachine {
  constructor(private coins: number = 0) {
    this.coins = coins;
  }

  private reset() {
    this.coins = 0;
  }
  
  private incrementCoins() {
    this.coins++;
  }

  private getRandomBooleanArray(length: number) {
    let arr: boolean[] = [];
    for (let i = 0; i < length; i++) {
      arr = [...arr, Math.random() < 0.5]
    }
    return arr;
  }

  play() {
    this.incrementCoins();
    const status: boolean[] = this.getRandomBooleanArray(3);
    const isWinner = status.every((state: boolean) => state);
    if (isWinner) {
      console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
      this.reset()
    } else {
      console.log("Good luck next time!!");
    }
  }
}

const machine1 = new SlothMachine();
machine1.play(); 
machine1.play(); 
machine1.play();
machine1.play(); 
machine1.play();
machine1.play();
machine1.play();
