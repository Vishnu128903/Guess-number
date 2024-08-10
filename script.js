let gen_num=Math.floor(Math.random()*20+1)
console.log(gen_num)
let score=20
let highscore=0
document.querySelector('.check').addEventListener("click",function(){
    const gus_num=document.querySelector('.guess').value
    console.log(gus_num)
    if(gus_num==gen_num){
        document.querySelector('.message').textContent='correct guess you won !!!' 
        document.querySelector('body').style.backgroundColor="#60b347"
        document.querySelector('.number').textContent=` ${gen_num}`
        document.querySelector('.highscore').textContent=score
    }
    else if(gus_num<gen_num){
        document.querySelector('.message').textContent='too low'
        score-=1
        document.querySelector('.score').textContent=score
    }
    else{
        document.querySelector('.message').textContent='too high' 
        score-=1
        document.querySelector('.score').textContent=score
    }
});

if(score>highscore){
    highscore=score;
}

document.querySelector('.again').addEventListener('click', function () {
    score=20
    document.querySelector('.score').textContent=score
    document.querySelector('.message').textContent='start guessing...' 
    document.querySelector('body').style.backgroundColor="#222"
    document.querySelector('.number').textContent="?"
    document.querySelector('.guess').value=""
    gen_num=Math.floor(Math.random()*20+1)
    console.log(gen_num)
})
