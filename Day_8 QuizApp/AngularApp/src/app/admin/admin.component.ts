import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service/service.service';
import { MatDialog } from '@angular/material/dialog';
import { QuestionDialogComponent } from '../question-dialog/question-dialog.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  quizForm: FormGroup | any;
  dataList: any=[];
  questions: any;
  constructor(
    private formBuilder: FormBuilder,
    private questionService:ServiceService,
    private dialog:MatDialog
    ) {}
  

  ngOnInit() {
    this.createForm();
    this.getAllQuestions();
  }

  createForm() {
    this.quizForm = this.formBuilder.group({
      question: ['', Validators.required],
      optiona: ['', Validators.required],
      optionb: ['', Validators.required],
      optionc: ['', Validators.required],
      optiond: ['', Validators.required],
      answer: ['', Validators.required],
      type: ['', Validators.required],
      id: [''],
    });
  }
  getQuestions(): void {
    this.questionService.getAllQuestions().subscribe(
      (questions:any) => {
        // this.questions = questions;
      },
      (error:any) => {
        console.error('Failed to retrieve questions:', error);
      }
    );
  }
  getAllQuestions(): void {
    this.questionService.getAllQuestions().subscribe(
      (questions:any) => {
        this.questions = questions;
        this.quizForm.reset();
      },
      (error:any) => {
        console.error('Failed to retrieve questions:', error);
      }
    );
  }
  saveQuestion(question:any){
    this.questionService.saveQuestion(question).subscribe((res)=>{
      if(res){
        this.getAllQuestions();
        console.log("hola got the result", res)
      }
    })
  }
  deleteQuestion(question:any){
    this.questionService.deleteQuestion(question.id).subscribe((res)=>{
      if(res){
        this.getAllQuestions();
        console.log("hola got the result", res)
      }
    },(error:any) => {
      console.error('Failed to retrieve questions:', error);
    })
  }
  updateQuestion(question:any){
    this.quizForm.patchValue({
      question: question.question,
      optiona: question.optiona,
      optionb: question.optionb,
      optionc: question.optionc,
      optiond: question.optiond,
      answer: question.answer,
      type: question.type,
      id: question.id,
    });
    // this.questionService.updateQuestion(question).subscribe((res)=>{
    //   if(res){
    //     this.getAllQuestions();
    //     console.log("hola got the result", res)
    //   }
    // })
  }
  openQuestions(q:any){
    const dialogRef = this.dialog.open(QuestionDialogComponent, {
      width: '400px',
      data: { question: q } // Pass the question data to the dialog
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // Handle any actions after the dialog is closed
    });
  }
  submitForm() {
    if (this.quizForm.valid) {
      // Perform form submission logic here
      console.log('Form submitted');
      console.log('Form values:', this.quizForm.value);
      this.saveQuestion(this.quizForm.value)
    }
  }
}
