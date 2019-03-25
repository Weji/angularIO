export enum Types {Fire, Water, Plant, Electric, Rock, Fly, Fairy, Spectre, Dark, Ground, Ice}
export enum Priorities {Normal, High, Extreme}
export enum Type_Attack {Physic, Special}

export class Move {
    constructor(
        public name : string,
        public damage : number,
        public priority : Priorities,
        public type : Types,
        public type_attack : Type_Attack
    ){}
}

interface Battling {
    guessWhoFaster(pkmn : Pokemon, pkmn1 : Pokemon) : Pokemon;
}

interface Player_Choice {
    attack(target : Pokemon) : number;
    switch(nextpkmn : Pokemon) : void;
}

export class Player implements Player_Choice{
    constructor(
        public name : string,
        public pokemons : Pokemon[],
        private actual_pokemon : Pokemon = pokemons[1]
    ){}

    attack(target : Pokemon): number {
        return 0;
    }

    switch(nextpkmn : Pokemon): void {
        this.actual_pokemon = nextpkmn;
    }
}


export class Pokemon {
    constructor(
        public name : string,
        public level : number,
        public hp : number,
        public atk : number,
        public atk_sp : number,
        public def : number,
        public def_sp : number,
        public speed : number,
        public moves : Move[],
        public type : Types[]
    ){}
}


function attack (pkmn : Pokemon, target : Pokemon): void {
    let move = pkmn.moves[0];
    let damage = Math.floor(Math.floor(Math.floor((2 * pkmn.level) / 5 + 2) * pkmn.atk_sp * move.damage / target.def_sp) / 50) + 2;
    console.log(pkmn.name + " HP : " + pkmn.hp + " " + target.name + " HP : " + target.hp);
    console.log(pkmn.name + " use " + move.name + " ! (" + damage + " dmg)" );

    target.hp -= damage;

    /*
    if(target.hp < 0){
        target.hp = 0;
        console.log(target.name + " hp : " + target.hp + "\n" );
        return true;
    } else{
        return false;
    }*/
}

export function fight(pkmn : Pokemon, pkmn1 : Pokemon): Pokemon {
    while(pkmn.hp > 0 && pkmn1.hp > 0){
        let faster = guessWhosFaster(pkmn, pkmn1);

        if(faster === pkmn){
            attack(pkmn, pkmn1);
            attack(pkmn1, pkmn);
        } else {
            attack(pkmn1, pkmn);
            attack(pkmn, pkmn1);
        }
    }

    if(pkmn.hp < 0)
        return pkmn1;
    else
        return pkmn;
}

export function guessWhosFaster(pkmn: Pokemon, pkmn1: Pokemon): Pokemon {
    if(pkmn.speed >= pkmn1.speed){
        return pkmn;
    } else {
        return pkmn1;
    }
}