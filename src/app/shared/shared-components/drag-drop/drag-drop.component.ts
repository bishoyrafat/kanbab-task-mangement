import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

interface Idata {
  id: number;
  name: string;
  items: {
    id: number;
    name: string;
  }[];
}
@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrl: './drag-drop.component.scss',
})
export class DragDropComponent {

 @Input() todo :{ id: number; name: string }[] = []

 @Input() doing :{ id: number; name: string }[] = []

 @Input() done :{ id: number; name: string }[] = []

  drop(event: CdkDragDrop<{ id: number; name: string }[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
