const marvel_heros = ["Thor", "IronMan","SpiderMan"]
const dc_heros = ["Superman", "BatMan","Shazam"]

// const merge_heros = marvel_heros.concat(dc_heros)
// console.log(merge_heros);

const merge_herosFinal = [...marvel_heros,...dc_heros]
// console.log(merge_herosFinal);

const arrNest = [1,2,3,[12,4,10,[21,3,5,6]]]
console.log(arrNest.flat(Infinity));

console.log(Array.isArray("Abhi"));
console.log(Array.from("Abhi"));

let score = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score,score2,score3))




