import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit {
  lists: { name: string; isActive: number|string }[] = [];
  clickedIndex = 1;

  ngOnInit(): void {
    this.lists = [
      { name: ' Platform Launch', isActive: 1 },
      { name: 'board Marketing Plan', isActive: 2 },
      { name: 'board Roadmap', isActive: 3 },
      { name: ' + Create New Board', isActive: 'lastOne' },
    ];


  }

  detectActive(i: any) {
    if(i=='lastOne')return
    else this.clickedIndex = i

  }
}
