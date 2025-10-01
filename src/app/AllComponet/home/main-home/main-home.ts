import { Component } from '@angular/core';
import { NavBar } from "../../nav-bar/nav-bar";
import { Header } from "../header/header";
import { Footer } from "../../footer/footer";

@Component({
  selector: 'app-main-home',
  imports: [NavBar, Header, Footer],
  templateUrl: './main-home.html',
  styleUrl: './main-home.css'
})
export class MainHome {

}
