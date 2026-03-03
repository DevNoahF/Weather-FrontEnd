import { Component, input } from '@angular/core';

@Component({
  selector: 'app-loading-card',
  imports: [],
  templateUrl: './loading-card.components.html',
  styleUrl: './loading-card.components.css',
})
export class LoadingCardComponent {
  isLoading = input<boolean>(false);
}
