import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Hotels } from './hotels/hotels';
import { BookedRooms } from './booked-rooms/booked-rooms';
import { Rooms } from './rooms/rooms';
import { Home } from './home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Footer,Hotels,BookedRooms,Rooms,Home],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ang6hw');
}
