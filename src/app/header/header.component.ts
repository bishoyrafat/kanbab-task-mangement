import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { SharedService } from '../shared/shared-components/services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  isOpend = false;
  boardName: string = '';
  constructor(private sharedService: SharedService) {}
  ngOnInit(): void {
    this.sharedService.changeBoardName$.subscribe(
      (data) => (this.boardName = data)
    );
  }

  toggleMenu() {
    this.isOpend = !this.isOpend;
  }
}
