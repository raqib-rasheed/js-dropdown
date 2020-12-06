const buttons = document.querySelectorAll(".btn");
const answers = document.querySelectorAll(".answer");

function displayAnswer(e){
let answerOrder = this.dataset.val;
answers.forEach(answer=>{
 answer.classList.contains(answerOrder)?answer.classList.toggle("hide"):answer.classList.add("hide");
});
}
buttons.forEach(btn=>
  btn.addEventListener('click',displayAnswer));