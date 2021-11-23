class Game{
    constructor(){
        this.stats = new Statistics;
        this.question = new Questions;
        this.timer = new Timer(3);

        this.qNumber = document.querySelector('.questionNumber');
        this.qText = document.querySelector('.questionText');
        this.answer1 = document.querySelector('.answer1');
        this.answer2 = document.querySelector('.answer2');
        this.answer3 = document.querySelector('.answer3');
        this.answer4 = document.querySelector('.answer4');
        this.answer = [...document.getElementsByClassName('answer')];
        this.statsCorrects = document.querySelector('.statsCorrect');
        this.statsWrong = document.querySelector('.statsWrong');
        this.questtionsLeft = document.querySelector('.questtionsLeft');
        this.drawedQuestion = this.question.drawQuestion()
        this.render();
        this.listeners();
    }

    render(question = this.drawedQuestion, stats = this.stats.showQuizStatistics()){
        
        this.qText.textContent = question[0];
        this.answer1.textContent = question[2];
        this.answer2.textContent = question[3];
        this.answer3.textContent = question[4];
        this.answer4.textContent = question[5];
        this.statsCorrects.textContent = stats[1]
        this.statsWrong.textContent = stats[2]
        this.questtionsLeft.textContent = this.question.getQuestionsNumber();
        this.timer.countTime();
        this.showCorrect()
    }
    checkAnswer(e){
        console.log(e.target.dataset.key);
        this.showCorrect()
        
    }
    showCorrect(){
        console.log('dupa');
        this.answer.forEach(element => {
            element.classList.add('wrongRespond')
        });
        this.answer[e.target.dataset.key].classList.add = 'correctRespond'
    }
    
    
    listeners(){
        this.answer.forEach(item=>item.addEventListener('click', this.checkAnswer))
        }
    }
    
const game = new Game();