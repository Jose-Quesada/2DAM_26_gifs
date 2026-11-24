import { Component, input } from '@angular/core';
import { GifListItem } from './gif-list-item/gif-list-item';
import { Gif } from '@gifs/interfaces/gif.interface';

@Component({
  imports: [GifListItem],
  selector: 'gif-list',
  styleUrl: './gif-list.css',
  templateUrl: './gif-list.html',
})
export class GifList {
  gifs = input.required<Gif[]>()
}
