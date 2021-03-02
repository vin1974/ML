var answer;
var score = 0;
var backgroundImages = []

function nextQuestion(){
    let n1 = Math.ceil(Math.random() * 5);
    document.getElementById('n1').innerHTML = n1;

    let n2 = Math.ceil(Math.random() * 5);
    document.getElementById('n2').innerHTML = n2;

    answer = n1 + n2;

}

function checkAnswer(){
    let prediction = predictImage();
    console.log(`answer: ${answer}, prediction: ${prediction} `);

    if (prediction == answer){
        score++;
        if (score <= 6){            
            backgroundImages.push(`url('images/background${score}.svg')`);
            document.body.style.backgroundImage = backgroundImages;
        }else{
            alert('Conglatulations~!!!');
            score = 0;
            backgroundImages = [];
            document.body.style.backgroundImage = backgroundImages;
        }       
        
        console.log('correct')
    }else{
        if (score > 0){
            score--;
        }            
        console.log('wrong...')
        alert('wrong... try again...');
        setTimeout(()=>{
            backgroundImages.pop(`url('images/background${score}.svg')`);
            document.body.style.backgroundImage = backgroundImages;
        }, 1000);

    }
}