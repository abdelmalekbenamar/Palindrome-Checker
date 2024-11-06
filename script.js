const button = document.getElementById("check-btn");
const world = document.getElementById("text-input");
button.addEventListener("click", () => {
  if(world.value === ""){
    alert("Please input a value");
  }else{
    let table = world.value;
    table = table.replaceAll(" ", "");
    table = table.replaceAll("_", "");
    table = table.replaceAll("-", "");
    table = table.replaceAll(",", "");
    table = table.replaceAll(".", "");
    table = table.replaceAll("/", "");
    table = table.replaceAll("\\", "");
    table = table.toLowerCase();
    table = table.split("");

    if(table.length % 2 == 0){
       let counter = table.length;
      let capteur = 0;
      for(let i = 0; i < Math.floor(table.length /2); i++){

        

        if((table[i] == "(" && table[counter - 1] == ")") || (table[i] == ")" && table[counter - 1] == "(")){
          capteur++;
        }else if(table[i] == table[counter - 1]){
          capteur++;
        }
        counter--;

      }

      if(capteur == (table.length / 2)){
        let result = document.getElementById("result");
        result.innerHTML = `${world.value} is a palindrome`;
        world.value = "";
      }else{

        result.innerHTML = `${world.value} is not a palindrome`;
        world.value = "";

      }
    }else{


      let counter = table.length - 1;
      let capteur = 0;
      for(let i = 0; i < Math.floor(table.length/2); i++){

        /*
        if(table[i] == table[counter]){
          capteur++;
          counter--;
        }
        */

        if((table[i] == "(" && table[counter] == ")") || (table[i] == ")" && table[counter] == "(")){
          capteur++;
        }else if(table[i] == table[counter]){
          capteur++;
        }
      counter--;
      }

      if(capteur == ((table.length - 1) / 2)){
        let result = document.getElementById("result");
        result.innerHTML = `${world.value} is a palindrome`;
        world.value = "";
      }else{
        result.innerHTML = `${world.value} is not a palindrome`;
        world.value = "";
      }

     }
  }
} )


let tbl = "0_0 (: /-\ :) 0-0";
tbl = tbl.replaceAll(" ", "");
tbl = tbl.replaceAll("-", "")
tbl = tbl.replaceAll("_", "")
tbl = tbl.replaceAll("/", "")



console.log(tbl)