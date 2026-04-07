import { Component, signal } from '@angular/core';
import { RouterOutlet, Routes } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Hotels } from './hotels/hotels';
import { BookedRooms } from './booked-rooms/booked-rooms';
import { Rooms } from './rooms/rooms';
import { Home } from './home/home';
import { Error } from './error/error';

export const routes: Routes = [
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'hotels',
    component: Hotels,
  },
  {
    path: 'booked-rooms',
    component: BookedRooms,
  },
  {
    path: 'rooms',
    component: Rooms,
  },
  {
    path:'**',
    component: Error
  }
];