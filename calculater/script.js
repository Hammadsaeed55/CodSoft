let input = document.getElementById('input-box');
let button = document.querySelectorAll('button');

let string = "";
let arr = Array.from(button);
arr.forEach(button =>{
     button.addEventListener('click', (e)=>{
          // this condition display the result
          if(e.target.innerHTML == '='){
               string = eval(string);
               input.value = string;
          }
          // this condition reset the screen
          else if(e.target.innerHTML == 'RESET'){
               string = "";
               input.value = string;
              }
          //this condition delete the number one by one from last.
          else if(e.target.innerHTML === 'DEL'){
               string = string.substring(0, string.length-1);
               input.value = string;
          }    
          else{
               string = string+e.target.innerHTML;
          input.value = string;
          }
     })
})
