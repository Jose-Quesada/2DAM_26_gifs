import { Component, signal } from '@angular/core';
import { GifList } from '@gifs/components/gif-list/gif-list';
import { Gif } from '@gifs/interfaces/gif.interface';

@Component({
  imports: [GifList],
  selector: 'app-search-page',
  styleUrl: './search-page.css',
  templateUrl: './search-page.html',
})
export default class SearchPage {

  onSearch(query: string){
    console.log(query);
  }

  gifs = signal<Gif[]>([]);
}
