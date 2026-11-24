import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'gif-list-item',
  styleUrl: './gif-list-item.css',
  templateUrl: './gif-list-item.html',
})
export class GifListItem {
  imageUrl = input.required<string>()
}
