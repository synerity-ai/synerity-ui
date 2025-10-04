import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Button, Card, InputText } from '@synerity/ui';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, Button, Card, InputText],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}
