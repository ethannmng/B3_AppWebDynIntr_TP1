let a = parseInt(1.42);
let b = parseFloat(1.42);
let c = parseInt("De toute évidence, je ne suis pas un nombre");
let d = parseFloat("De toute évidence, je ne suis pas un nombre");

// Exemple mission 2
let e = parseInt("42");
let f = parseFloat("42");

const list = [a, b, c, d, e, f];
for (let i = 0; i < list.length; i++) {
    if (isNaN(list[i])) {
        console.log(list[i] + " n'est pas un nombre valide");
    } else {
        console.log(list[i] + " est un nombre valide");
    }
}