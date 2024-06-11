import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit {

  @Output() modalClosed = new EventEmitter<void>()
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
      this.modalClosed.emit();
    }, 3000);
  }

  closeModal() {
    this.isVisible = false;
    this.modalClosed.emit();
  }
}
