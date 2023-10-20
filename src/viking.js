// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack () {
        return this.strength;
    }

    receiveDamage (damage) {
        this.health = this.health - damage;
    }
}

// const soldier1 = new Soldier(100, 100);
// soldier1.receiveDamage(25);

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super (health, strength)
        this.name = name; 
    }

    receiveDamage (damage) {
        this.health = this.health - damage;

        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry () {
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon extends Soldier {
    
    receiveDamage (damage) {
        this.health = this.health - damage;
        const alive = this.health > 0;
        // let died = damage > 100;
        
        if (alive) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {
    constructor () {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    
    addViking (vikingSoldier) {
        this.vikingArmy.push(vikingSoldier);
    }

    addSaxon (saxonSoldier) {
        this.saxonArmy.push(saxonSoldier)
    }

    vikingAttack() {
        let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        
        const randomSaxon = this.saxonArmy[randomSaxonIndex];
        const randomViking = this.vikingArmy[randomVikingIndex];

        let result = randomSaxon.receiveDamage(randomViking.strength);
        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(randomSaxonIndex)
        }
        console.log(result);
        return result;

    }

    saxonAttack() {
        let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        
        const randomSaxon = this.saxonArmy[randomSaxonIndex];
        const randomViking = this.vikingArmy[randomVikingIndex];

        let result = randomViking.receiveDamage(randomSaxon.strength);
        if (randomViking.health <= 0) {
            this.vikingArmy.splice(randomVikingIndex)
        }
        console.log(result);
        return result;
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            console.log("Vikings have won the war of the century!");
            return "Vikings have won the war of the century!";
        }
        else if (this.vikingArmy.length === 0) {
            console.log("Saxons have fought for their lives and survived another day...");
            return "Saxons have fought for their lives and survived another day...";
        }
        else if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1) {
            console.log("Vikings and Saxons are still in the thick of battle.");
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}

