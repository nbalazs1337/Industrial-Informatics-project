import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router ) { }

  ngOnInit(): void {
   
  }

  register(){
    this.router.navigateByUrl('/register');
  }

  login(){
    this.router.navigateByUrl('/login');
  }

  home(){
    this.router.navigateByUrl('');
  }

  about(){
    this.router.navigateByUrl('/about');
  }

}
