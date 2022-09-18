
let sub = document.querySelector("#pinInput");
let click = document.querySelector("#typed-pin");
let autoGanret = document.querySelector("#correct");
let plusMins = document.querySelector("#incorrect");
let clear = document.querySelector("#clear");
let back = document.querySelector("#back");
let lets = document.querySelector(".action-left");
let spand = document.querySelector("#selet");
let dorlam = document.querySelector("#dorlam");

function generatePin(){
    let rund = Math.random() * 9000 + 1000;
    let random = Math.round(rund);
    sub.value = random;
}

//// Second Part ///
function tab(name){ 
    let ami = name.innerText;
    let tmi = click.value;
    tmi = tmi + ami;
    click.value = tmi;
}

// Tharde Part //
function matchedInput(){
    let submit = spand.innerText;

    let total = sub.value;
    let milano = click.value;
        if(total == milano && total != ""){ 
             autoGanret.classList.add("show") ;
             plusMins.classList.remove("show") ;
             spand.innerHTML = parseInt(submit) + 1;

             setTimeout(() => {
                autoGanret.classList.remove("show") ;
                }, 3000);
        }else{
            plusMins.classList.add("show") ;
            autoGanret.classList.remove("show") ;
            setTimeout(() => {
                plusMins.classList.remove("show") ;
                }, 7000);
             ////////
                let one = submit - 1;
                if(submit == 0){
                    disabl.disabled = true;
                    disabl.style.opacity = 0.5;
                    dorlam.innerText = "Reload this Pages";
                }else{
                    spand.innerText = one;
                }
        }
      }
     
      clear.addEventListener("click", function(){
        click.value = "";
      });

      back.addEventListener("click", function(){
          let backend = click.value;
          let answer = backend.length - 1;
          let ami = backend.replace( backend[answer] , "");
          click.value = ami;
          console.log(ami);

         
      })

   