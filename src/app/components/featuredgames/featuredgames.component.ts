import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featuredgames',
  templateUrl: './featuredgames.component.html',
  styleUrls: ['./featuredgames.component.scss']
})
export class FeaturedgamesComponent implements OnInit {

  myDate = Date.now();

  constructor() { }

  ngOnInit(): void {
  }

}
