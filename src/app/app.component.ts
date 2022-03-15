import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = '';
  constructor(private titleService: Title, @Inject(PLATFORM_ID) platformId: string) {
    if (isPlatformServer(platformId)) {
      axios.get('http://localhost:1337/testCall').then((res) => {
        console.log('here');
        const data = res.data;
        this.titleService.setTitle(data.title);
        this.title = data.title;
      });
    } else {
      console.log('nonnoo', this.title)
    }
  }
}
