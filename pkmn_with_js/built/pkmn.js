"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Types;
(function (Types) {
    Types[Types["Fire"] = 0] = "Fire";
    Types[Types["Water"] = 1] = "Water";
    Types[Types["Plant"] = 2] = "Plant";
    Types[Types["Electric"] = 3] = "Electric";
    Types[Types["Rock"] = 4] = "Rock";
    Types[Types["Fly"] = 5] = "Fly";
    Types[Types["Fairy"] = 6] = "Fairy";
    Types[Types["Spectre"] = 7] = "Spectre";
    Types[Types["Dark"] = 8] = "Dark";
    Types[Types["Ground"] = 9] = "Ground";
    Types[Types["Ice"] = 10] = "Ice";
})(Types = exports.Types || (exports.Types = {}));
var Priorities;
(function (Priorities) {
    Priorities[Priorities["Normal"] = 0] = "Normal";
    Priorities[Priorities["High"] = 1] = "High";
    Priorities[Priorities["Extreme"] = 2] = "Extreme";
})(Priorities = exports.Priorities || (exports.Priorities = {}));
var Type_Attack;
(function (Type_Attack) {
    Type_Attack[Type_Attack["Physic"] = 0] = "Physic";
    Type_Attack[Type_Attack["Special"] = 1] = "Special";
})(Type_Attack = exports.Type_Attack || (exports.Type_Attack = {}));
var Move = /** @class */ (function () {
    function Move(name, damage, priority, type, type_attack) {
        this.name = name;
        this.damage = damage;
        this.priority = priority;
        this.type = type;
        this.type_attack = type_attack;
    }
    return Move;
}());
exports.Move = Move;
var Player = /** @class */ (function () {
    function Player(name, pokemons, actual_pokemon) {
        if (actual_pokemon === void 0) { actual_pokemon = pokemons[1]; }
        this.name = name;
        this.pokemons = pokemons;
        this.actual_pokemon = actual_pokemon;
    }
    Player.prototype.attack = function (target) {
        return 0;
    };
    Player.prototype.switch = function (nextpkmn) {
        this.actual_pokemon = nextpkmn;
    };
    return Player;
}());
exports.Player = Player;
var Pokemon = /** @class */ (function () {
    function Pokemon(name, level, hp, atk, atk_sp, def, def_sp, speed, moves, type) {
        this.name = name;
        this.level = level;
        this.hp = hp;
        this.atk = atk;
        this.atk_sp = atk_sp;
        this.def = def;
        this.def_sp = def_sp;
        this.speed = speed;
        this.moves = moves;
        this.type = type;
    }
    return Pokemon;
}());
exports.Pokemon = Pokemon;
function attack(pkmn, target) {
    var move = pkmn.moves[0];
    var damage = Math.floor(Math.floor(Math.floor((2 * pkmn.level) / 5 + 2) * pkmn.atk_sp * move.damage / target.def_sp) / 50) + 2;
    console.log(pkmn.name + " HP : " + pkmn.hp + " " + target.name + " HP : " + target.hp);
    console.log(pkmn.name + " use " + move.name + " ! (" + damage + " dmg)");
    target.hp -= damage;
    console.log(target.name + " hp : " + target.hp + "\n");
}
function fight(pkmn, pkmn1) {
    while (pkmn.hp > 0 && pkmn1.hp > 0) {
        var faster = guessWhosFaster(pkmn, pkmn1);
        if (faster === pkmn) {
            attack(pkmn, pkmn1);
            attack(pkmn1, pkmn);
        }
        else {
            attack(pkmn1, pkmn);
            attack(pkmn, pkmn1);
        }
    }
    if (pkmn.hp < 0)
        return pkmn1;
    else
        return pkmn;
}
exports.fight = fight;
function guessWhosFaster(pkmn, pkmn1) {
    if (pkmn.speed >= pkmn1.speed) {
        return pkmn;
    }
    else {
        return pkmn1;
    }
}
exports.guessWhosFaster = guessWhosFaster;
//# sourceMappingURL=pkmn.js.map