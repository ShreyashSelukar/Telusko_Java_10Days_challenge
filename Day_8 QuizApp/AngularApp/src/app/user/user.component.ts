import { Component } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  quizQuestionList: any[] = [];
  typeOfQuestions: any[] = [];
  type='';
  score: any=0;
  finished = false;
  constructor(
    private questionService: ServiceService,
    private router: Router
  ) {
    this.listOfQuestionType();
  }

  listOfQuestionType(): void {
    this.questionService.getDistinctTypes('type').subscribe(
      (res:any) => {
        if(res.length >5 ){
          this.typeOfQuestions = res.slice(0,5);
        }else{
          this.typeOfQuestions = res;
        }
      },
      (error:any) => {
        console.error('Failed to retrieve list:', error);
      }
    );
  }
  onOptionSelected(){
    this.getListOfQuizQuestions(this.type);
  }

  getListOfQuizQuestions(type: string): void {
    this.questionService.getListOfQuizQuestions(type).subscribe(
      (questions:any) => {
        this.quizQuestionList = questions;
      },
      (error:any) => {
        console.error('Failed to retrieve questions:', error);
      }
    );
  }
  submitQuiz(){
    this.score= 0;
    this.finished =true;
    console.log(this.quizQuestionList)
    this.quizQuestionList.forEach((q:any)=>{
      if(q.selectedAnswers == q.answer){
        this.score++;
      }
    })
  }
  togohome(){
    this.router.navigateByUrl('/home');
  }
}
