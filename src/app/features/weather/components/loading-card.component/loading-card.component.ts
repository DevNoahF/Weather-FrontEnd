import { Component, input } from '@angular/core';

@Component({
  selector: 'app-loading-card',
  imports: [],
  templateUrl: './loading-card.component.html',
  styleUrl: './loading-card.component.css',
})
export class LoadingCardComponent {
  isLoading = input<boolean>(false);
}
