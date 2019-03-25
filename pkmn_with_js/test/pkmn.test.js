let pkmn = require("../built/pkmn.js");


let thunder = new pkmn.Move("Thunder", 80, pkmn.Priorities.Normal, pkmn.Types.Electric, pkmn.Type_Attack.Special);
let overheat = new pkmn.Move("Overheat", 120, pkmn.Priorities.Normal, pkmn.Types.Fire, pkmn.Type_Attack.Special);

let raichu = new pkmn.Pokemon("Raichu", 22, 50,35,45, 30,40, 56, [thunder],[pkmn.Types.Electric]);
let charmander = new pkmn.Pokemon("Charmander", 10, 23,20,45, 20,13, 28,[overheat], [pkmn.Types.Fire]);


test('Raichu should attack before Charmander', () => {
    expect(pkmn.guessWhosFaster(charmander, raichu)).toBe(raichu);
});


test('Raichu should win versus Charmander', () => {
    expect(pkmn.fight(charmander, raichu)).toBe(raichu);
});
