import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared-components/services/shared.service';

interface Idata {
  id: number;
  name: string;
  items: {
    id: number;
    name: string;
  }[];
}

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.scss',
})
export class ToDoComponent implements OnInit {
  data: Idata[] = [];
  todo: {
    id: number;
    name: string;
  }[] = [];
  doing: {
    id: number;
    name: string;
  }[] = [];
  done: [] = [];
  constructor(private sharedService: SharedService) {}
  ngOnInit(): void {
    this.data = [
      {
        id: 1,
        name: 'To Do',
        items: [
          { id: 1, name: 'Build UI for onboarding flow' },
          { id: 2, name: 'Build UI for search' },
          { id: 3, name: 'Build settings UI ' },
        ],
      },

      {
        id: 2,
        name: 'Doing',
        items: [
          { id: 4, name: 'Design settings and search pages          ' },
          { id: 5, name: 'Add account management endpoints' },
          { id: 6, name: 'Design onboarding flow' },
        ],
      },

      {
        id: 3,
        name: 'Done',
        items: [
          { id: 7, name: 'Review results of usability tests and iterate' },
          {
            id: 8,
            name: 'Create paper prototypes and conduct 10 usability tests with potential customers',
          },
          { id: 9, name: 'Conduct 5 wireframe tests' },
        ],
      },
    ];

    this.sharedService.sideBar$.subscribe((data) => {
      console.log(data);
    });
  }

  getTodo() {
    return (this.todo = this.data.find((el) => el.name === 'To Do')?.items as {
      id: number;
      name: string;
      items: {
        id: number;
        name: string;
      }[];
    }[]);
  }
  getDoing() {
    return (this.doing = this.data.find((el) => el.name === 'Doing')?.items as {
      id: number;
      name: string;
      items: {
        id: number;
        name: string;
      }[];
    }[]);
  }
  getDone() {
    return (this.doing = this.data.find((el) => el.name === 'Done')?.items as {
      id: number;
      name: string;
      items: {
        id: number;
        name: string;
      }[];
    }[]);
  }
}
