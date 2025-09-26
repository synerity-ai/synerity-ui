import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import Avatar component from Synerity UI
import { Avatar } from '@synerity/ui';

@Component({
  selector: 'app-rapid-avatar',
  standalone: true,
  imports: [
    CommonModule,
    Avatar
  ],
  templateUrl: './rapid-avatar.html',
  styleUrl: './rapid-avatar.scss'
})
export class RapidAvatarComponent {
  title = 'Synerity UI Avatar Demo';
}
