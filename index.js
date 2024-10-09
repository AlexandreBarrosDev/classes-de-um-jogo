class Hero {
    constructor(heroName, heroAge, heroType) {
        this.heroName = heroName;
        this.heroAge = heroAge;
        this.heroType = heroType;
    }

    attack() {
        let heroAttack;

        if(this.heroType === "Mago") {
            heroAttack = "magia";
        }
        else if (this.heroType === "Guerreiro") {
            heroAttack = "espada"
        }
        else if (this.heroType === "Monge") {
            heroAttack = "artes marciais"
        }
        else if (this.heroType === "Ninja") {
            heroAttack = "shuriken"
        }
        console.log(`O ${this.heroType} atacou usando ${heroAttack}`);
    }
}

const mago = new Hero("Lucian", 27, "Mago");
const guerreiro = new Hero("Arthur", 30, "Guerreiro");
const monge = new Hero("Ab", 45, "Monge");
const ninja = new Hero("Hanzo", 33, "Ninja")

mago.attack();
guerreiro.attack();
monge.attack();
ninja.attack();