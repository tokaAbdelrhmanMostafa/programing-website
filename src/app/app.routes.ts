import { Routes } from '@angular/router';
import { MainHome } from './AllComponet/home/main-home/main-home';
import { Login } from './AllComponet/login/login';
import { Signup } from './AllComponet/signup/signup';
import { Courses } from './AllComponet/courses/courses/courses';
import { Headertwo } from './AllComponet/home/headertwo/headertwo';
import { Headerthree } from './AllComponet/home/headerthree/headerthree';
import { concatWith } from 'rxjs';
import { Contact } from './AllComponet/home/contact/contact';
import { Service } from './AllComponet/service/service';

export const routes: Routes = [
    {path:"" ,component:MainHome},
    {path:"login" , component:Login},
    {path:"signup" , component:Signup},
    {path:"courses" , component:Courses},
   {path:"header2" , component:Headertwo},
   {path:"header3" , component:Headerthree},
   {path:"contact" , component:Contact},
    {path:"service" , component:Service},
    
];
