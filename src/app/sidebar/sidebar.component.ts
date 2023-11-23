import { MatDialog } from '@angular/material/dialog';
import { Component, ElementRef, OnInit } from '@angular/core';
import { BoardModalComponent } from '../board-modal/board-modal.component';
import { SharedService } from '../shared/shared-components/services/shared.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit {
  lists: { name: string; isActive: number | string; task?: {} }[] = [];
  clickedIndex = 1;

  constructor(
    private matdialog: MatDialog,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.sharedService.boardName$.subscribe((boardName) => {
      this.lists.splice(this.lists.length - 1, 0, {
        name: boardName,
        isActive: this.lists.length,
      });
    });

    this.lists = [
      {
        name: 'Platform Launch',
        isActive: 1,
        task: [
          {
            name: 'todo',
            data: [1],
          },
          {
            name: 'doing',
            data: [2],
          },
          {
            name: 'done',
            data: [3],
          },
        ],
      },
      {
        name: 'board Marketing Plan',
        isActive: 2,
        task: [
          {
            name: 'todo',
            data: [4],
          },
          {
            name: 'doing',
            data: [5],
          },
          {
            name: 'done',
            data: [6],
          },
        ],
      },
      {
        name: 'board Roadmap',
        isActive: 3,
        task: [
          {
            name: 'todo',
            data: [7],
          },
          {
            name: 'doing',
            data: [8],
          },
          {
            name: 'done',
            data: [9],
          },
        ],
      },
      { name: '+ Create New Board', isActive: 'lastOne' },
    ];

    this.sharedService.changeBoardName$.next(this.lists[0].name);
    this.sharedService.sideBar$.next(this.lists[0]);
  }

  detectActive(i: any, name: string) {
    if (i == 'lastOne') {
      this.matdialog.open(BoardModalComponent, {
        width: '50rem',
        height: '40rem',
      });
    } else {
      this.clickedIndex = i;
      let filteredData = this.lists.filter((el) => el.isActive == i);
      this.sharedService.changeBoardName$.next(name);
      this.sharedService.sideBar$.next(filteredData);
    }
  }
}
