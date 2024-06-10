import { Component, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit {

  message: string = '';
  isVisible: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showModal(message: string) {
    this.message = message;
    this.isVisible = true;
    setTimeout(() => {
      this.isVisible = false;
    }, 10000);
  }
}
