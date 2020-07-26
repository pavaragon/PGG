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
  selectedGame: GameArticle;

  showgame(clickedGame){
    this.selectedGame = clickedGame;
  
  };

  

  constructor(private data: DataService) {

    data.getAllGameArticles().subscribe( list => {
      this.displayGames = list;
    });

   }


  ngOnInit(): void {
  }

}
