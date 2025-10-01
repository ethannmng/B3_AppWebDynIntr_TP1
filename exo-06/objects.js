console.log("*** OBJETS ***");

const obj = {
  initialProp: "My initial property",
  emptyProp: null
};
console.log("Objet initial : ", obj);


// 1. Ajout d'une propriété writtenProp
obj.writtenProp = "written";    
console.log("Ajout d'une propriété : ");
console.log(obj);

// 2. Ajout d'une propriété imbriquée nestedProp
obj.nestedProp = { key: "value" };
console.log("Ajout d'une propriété imbriquée : ");
console.log(obj);

// 3. Lecture de la propriété imbriquée
console.log("Lecture d'une propriété imbriquée : ");
console.log(obj.nestedProp.key);

// 4. Lecture des valeurs de l'objet avec une boucle for in
console.log("Lecture d'un objet via for..in");
for (let key in obj) {
    console.log(`obj[${key}] :`, obj[key]);
}

// 5. Filtrage de l'objet pour retirer les valeurs nulles
console.log("Objet sans props nulles : ");
const filteredObj = Object.fromEntries(
    Object.entries(obj).filter(
        ([key, value]) => value !== null
    )
);
console.log(filteredObj);