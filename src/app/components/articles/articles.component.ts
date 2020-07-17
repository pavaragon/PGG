import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { GameArticle } from 'src/app/models/gameArticle';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  displayGames: GameArticle[];

  showgame(){
    var gameTitle = document.getElementById('gameTitle').textContent;
    if ( gameTitle = gameTitle){ /// THIS IS WHERE displayGames should match??)
    console.log("game clicked is", gameTitle)
    };
  
    console.log(this.displayGames)
  };

  

  constructor(private data: DataService) {

    data.getAllGameArticles().subscribe( list => {
      this.displayGames = list;
    });

   }


  ngOnInit(): void {
  }

}
