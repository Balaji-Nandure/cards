import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      imageUrl:
        'https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60',
      username: 'nature',
      content: 'I saw this neat tree today',
    },
    {
      title: 'Snowy Mountain',
      imageUrl:
        'https://images.unsplash.com/photo-1465220183275-1faa863377e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNub3clMjBtb3VudGFpbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      username: 'mountainlover',
      content: 'Here is a picture of a snowy mount',
    },
    {
      title: 'Mountain Biking',
      imageUrl:
        'https://images.unsplash.com/photo-1629056528325-f328b5f27ae7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bW91bnRhaW4lMjBiaWtpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      username: 'biking121',
      content: 'I did some biking today',
    },
  ];
}
