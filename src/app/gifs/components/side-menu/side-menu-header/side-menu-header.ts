import { Component } from '@angular/core';
import { environment } from '@environments/environment';

@Component({
  imports: [],
  selector: 'gifs-side-menu-header',
  styleUrl: './side-menu-header.css',
  templateUrl: './side-menu-header.html',
})
export class SideMenuHeader {
  envs = environment;
}
