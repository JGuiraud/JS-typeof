var a = 2;
var b = "3";

function pareil(a,b) {
 if (typeof a === typeof b) {
   console.log("les deux objets ont un type identique");
 } else {
   console.log("les deux objets ont un type différent");
   }
}

pareil(a,b);