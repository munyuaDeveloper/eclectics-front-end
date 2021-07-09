import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-outlet',
  templateUrl: './outlet.component.html',
  styleUrls: ['./outlet.component.scss']
})
export class OutletComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logoutUser() {
    localStorage.clear()
    this.router.navigate(['/'])
  }

}
