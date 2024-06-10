import { Component, ViewChild, OnInit } from '@angular/core';
import { QuizService } from '../../services/quizz.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-quizz',
  standalone: true,
  imports: [],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css'
})
export class QuizzComponent implements OnInit {
  @ViewChild(ModalComponent) modalComponent!: ModalComponent;
  questions: any[] = [];
  currentQuestionIndex = 0;
  currentQuestion: any = {};

  constructor(private quizService: QuizService) { };

  ngOnInit(): void {
    this.getQuestions();
  };

  getQuestions() {
    this.quizService.getQuestions().subscribe(data => {
      this.questions = data.questions;
      this.currentQuestion = this.questions[this.currentQuestionIndex];
    });
  };

  answer(isCorrect: boolean) {
    if (this.currentQuestion.isCorrect === isCorrect) {
      this.modalComponent.showModal('¡Correcto!');
    } else {
      this.modalComponent.showModal('Incorrecto');
    }
  };
}
