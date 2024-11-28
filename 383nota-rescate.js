/* let ransomNote = "aa";
let magazine = "aab";
let i = 0;

for (const valor in magazine) {
    console.log(magazine[valor]);
}

console.log(645 % 10);

 */

//const array = "Arepa";

/* const arregloI = (arr)=> {
    let resultado;
    for (let i = 0; i < array.length; i++) {
        let letra = hash(arr[i]);
        resultado = letra;
    }
    return resultado;
}

const hash = (x)=> {
    let seed = 41;
    for (let i = 0; i < x.length; i++) {
        console.log(x);
        seed = (array.indexOf(x[i]));
        console.log(seed);
    }
    return seed;
}

console.log(arregloI(array)); */

/* const cadena = "baab";
const magazine = "aa";

let arr = (magazine) => {
    let arrCadena = [];
  for (let i = 0; i < magazine.length; i++) {
    arrCadena[i] = magazine[i].charCodeAt();
  }
  return arrCadena;
};

let plantilla = arr(magazine);

for (let j = 0; j < magazine.length; j++) {

    let detener = false;
  for (let i = 0; i < plantilla.length; i++) {
    
    if (magazine[j].charCodeAt() === plantilla[i]) {
        plantilla[i] = "*";
        console.log(plantilla)
        detener = true;
        break;
    }
  }

  console.log(detener);
} */

/* String.prototype.hashCode = function() {
    var hash = 0,
      i, chr;
    if (this.length === 0) return hash;
    for (i = 0; i < this.length; i++) {
      chr = this.charCodeAt(i);
      console.log(chr);
      hash = ((hash << 5) - hash) + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  } */
/*
  const str = 'Arepa';
  const str2 = 'Arape';
  console.log(str, str.hashCode());
  console.log(str2, str2.hashCode()); */

  //mi solucion
var canConstruct = function (ransomNote, magazine) {
  let magazineArr = [];
  let detener = false;
  for (let i = 0; i < magazine.length; i++) {
    magazineArr[i] = magazine[i].charCodeAt();
  }

  for (let j = 0; j < ransomNote.length; j++) {
    for (let i = 0; i < magazineArr.length; i++) {
      if (ransomNote[j].charCodeAt() === magazineArr[i]) {
        magazineArr[i] = "*";
        console.log(magazineArr);
        detener = true;
        break;
      } else {
        detener = false;
      }
    }

    if (!detener) {
      return false;
    }
  }

  return true;
};


//Solucion mas optima
var canConstruct = function (ransomNote, magazine) {
  for (const char of magazine) {
    ransomNote = ransomNote.replace(char, "");
    console.log(ransomNote)
  }
  
  if (!ransomNote) return true;
  else return false;
};

console.log(canConstruct("fihjjjjei", "hjibagacbhadfaefdjaeaebgi"));

