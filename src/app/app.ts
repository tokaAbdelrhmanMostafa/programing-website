import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from "./AllComponet/nav-bar/nav-bar";
import { Footer } from "./AllComponet/footer/footer";
import { MainHome } from "./AllComponet/home/main-home/main-home";

import { Courses } from "./AllComponet/courses/courses/courses";
import { Signup } from "./AllComponet/signup/signup";
import { Login } from "./AllComponet/login/login";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainHome, Courses, Signup, Login],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');
}
