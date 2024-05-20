import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-vlogs',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './vlogs.component.html',
  styleUrl: './vlogs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VlogsComponent { }
