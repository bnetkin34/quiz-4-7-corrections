function carPool(){
let z = Number(prompt("How many friends would you like to invite to the movies?"));
let SUVs = Number(prompt("Please enter the number of your friends' parents who drive SUVs (capacity of 7 seats)."))
let SUVneeded = Math.ceil(z/7);
let x = (SUVneeded) - (SUVneeded - SUVs)
let y = Math.ceil((z-(x*7))/4);
console.log(x, "parents who drive SUVs and ", y, "parent(s) who drive sedans are required to transport the ", z, "friends to the movies.");
}
