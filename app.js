let pokemons = ['Eau:17', 'Feu:41', 'Feu:24', 'Feu:46', 'Feu:19', 'Glace:63', 'Insecte:53', 'Air:78', 'Psychique:99', 'Feu:15', 'Psychique:68', 'Eau:15', 'Poison:51', 'Herbe:24', 'Glace:91', 'Psychique:58', 'Herbe:18', 'Herbe:19', 'Herbe:10'];

function feu(list) {
    let PFeu = [];
    let max = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i].includes('Feu:')) {
            PFeu.push(parseInt(list[i].replace('Feu:', '')));
        }
    }
    for (let i = 0; i < PFeu.length; i++) {
        if (PFeu[i] > max) {
            max = PFeu[i];
        }
    }
    // console.log(PFeu)
    // console.log(max)
    return (max);
} feu(pokemons);

function Eau(list) {
    let PEau = [];
    let max = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i].includes('Eau:')) {
            PEau.push(parseInt(list[i].replace('Eau:', '')));
        }
    }
    for (let i = 0; i < PEau.length; i++) {
        if (PEau[i] > max) {
            max = PEau[i];
        }
    }
    // console.log(PEau)
    // console.log(max)
    return (max);
} Eau(pokemons)

function Herbe(list) {
    let PHerbe = [];
    let max = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i].includes('Herbe:')) {
            PHerbe.push(parseInt(list[i].replace('Herbe:', '')));
        }
    }
    for (let i = 0; i < PHerbe.length; i++) {
        if (PHerbe[i] > max) {
            max = PHerbe[i];
        }
    }
    // console.log(PHerbe)
    // console.log(max)
    return (max);
} Herbe(pokemons)

function special(list) {
    let special = [];
    let max = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i].includes('Air:')) {
            special.push(parseInt(list[i].replace('Air:', '')));
        } else
            if (list[i].includes('Poison:')) {
                special.push(parseInt(list[i].replace('Poison:', '')));
            } else
                if (list[i].includes('Glace:')) {
                    special.push(parseInt(list[i].replace('Glace:', '')));
                } else
                    if (list[i].includes('Psychique:')) {
                        special.push(parseInt(list[i].replace('Psychique:', '')));
                    } else
                        if (list[i].includes('Insecte:')) {
                            special.push(parseInt(list[i].replace('Insecte:', '')));
                        }
    }
    for (let i = 0; i < special.length; i++) {
        if (special[i] > max) {
            max = special[i];
        }
    }

    // console.log(special)
    // console.log(max)
    return (max)
} special(pokemons);

let max_team_puissance = special(pokemons) + Herbe(pokemons) + Eau(pokemons) + feu(pokemons);
console.log(max_team_puissance)