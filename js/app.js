

class spaceShip{
    constructor(hull,firePower,accuracy,){
   this.hull=hull,
    this.firePower=firePower,
    this.accuracy=accuracy,
  


shipAccuracy=function(){

        if(Math.random() < this.accuracy) {
            let happy=`You hit the Alien by power of ${this.firePower} hull damage.`
            console.log(happy);
            document.getElementById('accuracy').innerHTML = happy;
        return 1;
     } else{
         console.log('You missed the  target');
         return 0;
     }
}
    }
    accuracyDestroy(){
        if(Math.random() < this.accuracy) { console.log(this.name + ' damage your '+this.firePower+' hull');
        return 1;
     } else{
         console.log(this.name + ' target missed');
         return 0;
     }
}
}
//               alien class

class alienShip{
    aliens=6;
    constructor(){

        this.aliens = [];
        for (let i = 0; i < this.aliens; i++) {
            let firePower= Math.round((Math.random() * (4 - 2)) + 2);
            let hull = Math.round((Math.random() * (6 - 3)) + 3);
            let accuracy = ((Math.random() * (.8 - .6)) + .6)
            let name = i + 1;
            let alien = new Alien(hull, accuracy, firePower, name);
            this.aliens.push(alien);
        }
    }

    ShipAccuracy(){
    
        if(Math.random() < this.accuracy) {
            console.log('You hit the alien!');
            
     } else{
         console.log('You missed the target');
         return 0;
     }
    }
  accuracyDestroy(){
        let happy = this.name + ' damaged your '+this.firePower+' hull'; 
        if(Math.random() < this.accuracy) { 
            console.log(happy);
            document.getElementById('accuracy').innerHTML=happy;
        return 1;
     } else{
         console.log(this.name + ' missed');
         return 0;
     }
    }
};

attack=function(){
    accuracyDestroy();
    ShipAccuracy();
}

// spacebattle 


 spaceBattleGame =function(){
      aliens;
    setUpPlayer()
       let player= new spaceShip(20, 0.7, 5);
    

}
