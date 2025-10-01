import { Component } from '@angular/core';
import { NavBar } from "../../nav-bar/nav-bar";
import { Footer } from "../../footer/footer";

@Component({
  selector: 'app-courses',
  imports: [NavBar, Footer],
  templateUrl: './courses.html',
  styleUrl: './courses.css'
})
export class Courses {

}
