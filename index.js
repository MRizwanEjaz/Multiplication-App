const num1 = Math.ceil(Math.random() * 10  );
const num2 = Math.ceil(Math.random() * 10  );

const questionEL  = document.getElementById("question");
const formEL = document.getElementById("form");
const inputEL = document.getElementById("input");
const scoreEL  = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score")); 

if(!score){
    score = 0;
}
scoreEL.innerText = `score: ${score}`;

questionEL.innerText = `what is ${num1} multiply by ${num2}?`;
const correctAns = num1 * num2;
 formEL.addEventListener("submit", ()=>{
    const userans = +inputEL.value;
    if(userans === correctAns){
        score++;
        updateLocalStorage();
    }else{
        score--;
        updateLocalStorage();
    }
});
    function updateLocalStorage(){
        localStorage.setItem("score", JSON.stringify(score));
    }


