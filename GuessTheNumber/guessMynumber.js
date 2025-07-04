let secretNumber=Math.trunc(Math.random()*20)+1;
let score=20;
let highscore=0;
console.log(secretNumber);
const displayMessage=message=>{
    Number(secretNumber);
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess =Number(document.querySelector('.guess').value);
  if(!guess){
    displayMessage('No number!');
  } else if(guess===secretNumber){
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent=secretNumber;
    document.body.style.backgroundColor='#60b347';
    if(score>highscore){
      highscore=score;
      document.querySelector('.highscore').textContent=highscore;
    }
  }else{
    if(score > 1){
      displayMessage(guess>secretNumber ?'Too High!':'Too Low!');
      score--;
      document.querySelector('.score').textContent=score;
    }else{
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent=0;
    }
  }
});
document.querySelector('.again').addEventListener('click',function(){
  score=20;
  secretNumber=Math.trunc(Math.random()*20)+1;
  displayMessage('Start Guessing ...');
  document.querySelector('.score').textContent= score;
  document.querySelector('.guess').value= '';
  document.querySelector('.number').textContent = '?';
  document.body.style.backgroundColor = '#222';
});
