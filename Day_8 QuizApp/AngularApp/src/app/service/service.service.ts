import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from '../modal/question.model';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  baseUrl ="http://localhost:8080"
  constructor(private http: HttpClient) { }
  getAllQuestions() {
    return this.http.get<any>(`${this.baseUrl}/get/allquestions`);
  }
  saveQuestion(question:any){
    return this.http.post<Question>(`${this.baseUrl}/save/question`,question);
  }
  deleteQuestion(id:any){
    return this.http.delete<any>(`${this.baseUrl}/delete/question`,{
      headers:{
        'Content-Type': 'application/json',
      },
      body: id,
    });
  }
  updateQuestion(question:any){
    return this.http.post<Question>(`${this.baseUrl}/update/question`,question);
  }

  getDistinctTypes(type: any) {
    return this.http.get<any>(`${this.baseUrl}/distinctTypes/${type}`);
  }

  getListOfQuizQuestions(type: any) {
    return this.http.get<any>(`${this.baseUrl}/listOfQuizQuestions/${type}`);
  }
}
