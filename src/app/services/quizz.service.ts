import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Question {
  question: string;
  isCorrect: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private questionsUrl = 'assets/questions.json'; 

  constructor(private http: HttpClient) { }

  getQuestions(): Observable<{ questions: Question[] }> {
    return this.http.get<{ questions: Question[] }>(this.questionsUrl);
  }
}
