console.log('Tableaux :');

// 1. Initialisation du tableau
const arr = ["Initial"];

console.log('Initialisation avec valeur initiale :');
console.log(arr);

// 2. Ecriture en index
arr[1] = 1;
console.log('Ajout via écriture d\'index :');
console.log(arr);

// 3. Ajout à la fin du tableau
arr.push(2)
console.log('Ajout à la fin :');
console.log(arr);

// 4. Ajout au début du tableau
arr.unshift(-1);
console.log("Ajout au début :"); 
console.log(arr);

// 5. Modification de toutes les valeurs du tableau
console.log("Modification de chaque valeur du tableau :");
// [CODE]

// 6. Filtrage pour ne garder que les valeurs numériques
console.log("Ne garde que les valeurs numériques :");
// [CODE]