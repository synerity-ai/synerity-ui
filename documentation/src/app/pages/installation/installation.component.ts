import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-installation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './installation.component.html',
  styleUrl: './installation.component.scss'
})
export class InstallationComponent {
  copyCode(code: string): void {
    navigator.clipboard.writeText(code).then(() => {
      console.log('Code copied to clipboard');
    });
  }

  getAngularJsonConfig(): string {
    return JSON.stringify({
      "styles": [
        "node_modules/@synerity/ui/styles.css",
        "src/styles.scss"
      ]
    }, null, 2);
  }
}
