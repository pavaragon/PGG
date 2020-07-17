import { Component, OnInit } from '@angular/core';
import { GameArticle } from 'src/app/models/gameArticle';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {

  gameArticle: GameArticle =  new GameArticle();


  constructor( private data: DataService) { }

  onPost() {
    this.data.saveGameArticle(this.gameArticle); 
        
    this.gameArticle = new GameArticle();
  }

  ngOnInit(): void {

  }

}
