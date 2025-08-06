const input = document.getElementById("number");
const ouput = document.getElementById("output");
const convertbtn = document.getElementById("convert-btn");
const shrinkbtn = document.getElementById("shrink-btn");
const modebtn = document.getElementById("mode-btn");
const maker = document.getElementById("by");
const image = document.getElementById("image");
const body = document.getElementById("body");
const title = document.getElementById("title");
const inputbox = document.getElementById("input-box")
const modefont = document.getElementById("mode-font");
const outputbox = document.getElementById("outputbox");

const numericunthree = (num, numeric) => {
  if(num % 10 <= 3){
     for(let i = 0; i < num; i++){
       numeric += "I";
     }
   }
   return numeric;
}

const numericunfive = (num, numeric) => {
   if (num === 4){
     numeric += "IV"
   return numericunthree(num, numeric);
   }
   else if (num >= 5 && num <= 8){
     numeric += "V"
     for(let i = 0; i < num - 5; i++){
       numeric += "I";
     }
       return numericunthree(num, numeric);
   }
   else{
    return numericunthree(num, numeric);
   }
}


const numericunthirty = (num, numeric) => {
   if (Math.floor(num / 10) < 4){
     for(let i = Math.floor(num / 10); i > 0; i--){
       numeric += "X";
     }
   }
   if (num % 10 === 9){
     numeric += "IX"
   }
   return numericunfive(num % 10, numeric);
}


const numericuneighty = (num,numeric) => {
   if (Math.floor(num / 10) === 4){
     numeric += "XL"
     return numericunthirty(num, numeric);
   }
   else if (Math.floor(num / 10) >= 5 && Math.floor(num / 10) <= 8){
     numeric += "L";
     for(let i = 0; i < (Math.floor(num / 10) - 5); i++){
       numeric += "X";
     }
      return numericunthirty(num, numeric);
   }
   else {
     return numericunthirty(num, numeric);
   }
}

const numericunthreehun = (num, numeric) => {
   if (Math.floor(num / 10) === 9){
     numeric += "XC"
     return numericuneighty(num % 100, numeric);
   }
   else if (Math.floor(num / 100) <= 3){
     for(let i = 0; i < (Math.floor(num / 100)); i++){
       numeric += "C";
     }
     return numericuneighty(num % 100, numeric);
   }
}


const numericuneighthun = (num,numeric) => {
   if (Math.floor(num / 100) === 4){
     numeric += "CD"
     return numericunthreehun(num % 100, numeric);
   }
   else if (Math.floor(num / 100) >= 5 && Math.floor(num / 100) <= 8){
     numeric += "D";
     for(let i = 0; i < (Math.floor(num / 100) - 5); i++){
       numeric += "C";
     }
     return numericunthreehun(num % 100, numeric);
   }
   else if (Math.floor(num / 100) === 9 ){
     numeric += "CM"
     return numericuneighthun(num % 100, numeric);
   }
     else{
     return numericunthreehun(num, numeric);
   }
}

const numericunthreetho = (num) => {
  let numeric = "";
   if (Math.floor(num / 1000) <= 3){
     for(let i = 0; i < (Math.floor(num / 1000)); i++){
       numeric += "M";
     }
   return numericuneighthun(num % 1000, numeric);
   }
}

const numvalid = (num) => {
 if ((num < 0 || String(num) == "0")){
    output.innerText = "Please enter a number greater than or equal to 1";
    return false;
  }
 else if (String(num) !== "0" && String(num) === ""){
    output.innerText = "Please enter a valid number";
    return false;
  }
  else if (num >= 4000){
    output.innerText = "Please enter a number less than or equal to 3999"
    return false;
  }
  else{
    return true;
  }
}

const numericcal = () => {
  const num = input.value
    if (numvalid(num)){
    output.innerText = numericunthreetho(num);
    }
}

const shrinks = () => {
  if (shrinkbtn.innerText === "Shrink"){
   shrinkbtn.innerText = "Revert";
   shrinkbtn.classList.add("shrink");
   convertbtn.classList.add("shrink");
   input.classList.add("shrink");
   output.classList.add("shrink");

  }
  else if (shrinkbtn.innerText === "Revert"){
   shrinkbtn.innerText = "Shrink";
   shrinkbtn.classList.remove("shrink");
   shrinkbtn.classList.remove("shrink");
   convertbtn.classList.remove("shrink");
   input.classList.remove("shrink");
   output.classList.remove("shrink");
  }
}

const mode = () => {
  if (modebtn.classList.contains("moon")){
   image.setAttribute("src", "https://i.imgur.com/GNgqFv9.png");
   modefont.setAttribute("class", "fa-regular fa-moon");
modebtn.classList.remove("moon")
modebtn.classList.add("sun")
   body.classList.add("backdarkmode")
   body.classList.remove("backlightmode")
   input.classList.add("worddarkmode")
   input.classList.remove("wordlightmode")
   output.classList.add("worddarkmode")
   output.classList.remove("wordlightmode")
   convertbtn.classList.add("worddarkmode")
   convertbtn.classList.remove("wordlightmode")
    convertbtn.classList.add("btndarkmode")
   convertbtn.classList.remove("btnlightmode")
   shrinkbtn.classList.add("worddarkmode")
   shrinkbtn.classList.remove("wordlightmode")
   shrinkbtn.classList.add("btndarkmode")
   shrinkbtn.classList.remove("btnlightmode")
    inputbox.classList.add("darkmodebox")
   inputbox.classList.remove("lightmodebox")
   input.classList.add("inborderdarkmode")
   input.classList.remove("inborderlightmode")
   outputbox.classList.add("darkborder")
   outputbox.classList.remove("lightborder")
   title.classList.add("worddarkmode")
   title.classList.remove("wordlightmode")

  }
  else if (modebtn.classList.contains("sun")){
image.setAttribute("src", "https://i.imgur.com/vOivxWZ.png");
modefont.setAttribute("class", "fa-solid fa-sun");
   modebtn.classList.add("moon")
   modebtn.classList.remove("sun")
body.classList.add("backlightmode")
body.classList.remove("backdarkmode")
input.classList.add("wordlightmode")
   input.classList.remove("worddarkmode")
   output.classList.add("wordlightmode")
   output.classList.remove("worddarkmode")
   convertbtn.classList.add("wordlightmode")
   convertbtn.classList.remove("worddarkmode")
    convertbtn.classList.add("btnlightmode")
   convertbtn.classList.remove("btndarkmode")
   shrinkbtn.classList.add("wordlightmode")
   shrinkbtn.classList.remove("worddarkmode")
   shrinkbtn.classList.add("btnlightmode")
   shrinkbtn.classList.remove("btndarkmode")
    inputbox.classList.add("lightmodebox")
   inputbox.classList.remove("darkmodebox")
   input.classList.add("inborderlightmode")
   input.classList.remove("inborderdarkmode")
   outputbox.classList.add("lightborder")
   outputbox.classList.remove("darkborder")
   title.classList.add("wordlightmode")
   title.classList.remove("worddarkmode")
  }
}

convertbtn.addEventListener('click', numericcal);
shrinkbtn.addEventListener('click', shrinks);
modebtn.addEventListener('click', mode);
