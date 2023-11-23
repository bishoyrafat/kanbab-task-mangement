import { SharedService } from './../shared/shared-components/services/shared.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-board-modal',
  templateUrl: './board-modal.component.html',
  styleUrl: './board-modal.component.scss'
})
export class BoardModalComponent {
  boardName=''

  constructor(private SharedService : SharedService) { }
  createNewBoard(){
    this.SharedService.boardName$.next(this.boardName)
  }
}
