import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {  

  onShow:boolean=false;
  showResult:boolean=false;
  score:number=0;
  oncheck:boolean=false;

  questions: any[] = [
    {
      id: 1,
      question: 'What is Angular?',
      correctAnswer: 'A Javascript based framework',
      response: '',
      scores: '',
      options: ['A framework for building server-side applications', 'A Javascript based framework', 'A Html5 based framework']
    },

    {
      id: 2,
      question: 'What does ngModel do?',
      correctAnswer: 'Binds an input element to a property on the model',
      response: '',
      scores: '',
      options: ['It deletes the targeted element', 'Its a MVC based approach', 'Binds an input element to a property on the model']
    },

    {
      id: 3,
      question: 'What is Data Binding?',
      correctAnswer: 'It transfers data from the typescript to the html',
      response: '',
      scores: '',
      options: ['Modifies the html data', 'It transfers data from the typescript to the html', 'MVC based approach']
    },

    {
      id: 4,
      question: 'What do we need data binding ?',
      correctAnswer: 'Binds an input element to a property on the model',
      response: '',
      scores: '',
      options: ['deletes an element', 'MVC based approach', 'Binds an input element to a property on the model']
    },
  ];

  userAnswers: any = {};

  onSubmit() {
    let unanswered = this.questions.some(question => !question.response);
    if (unanswered) {
      alert('Please answer all questions before submitting.');
      return;
    }

    this.showResult = true;
    this.score = 0;
    this.questions.forEach(question => {
      if (question.response === question.correctAnswer) {
        this.score += 5;
        question.scores = '+5';
      } else {
        this.score -= 1;
        question.scores = '-1';
      }
    });
  }

  retry() {
    this.showResult = false;
    this.score = 0;
    this.questions.forEach(question => {
      question.response = '';
      question.scores = '';
    });
  }
}
