import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GameArticle } from '../models/gameArticle';

@Injectable({
  providedIn: 'root'
})

export class GameArticleService {

  allArticle: Observable<GameArticle[]>;


  constructor() { }
}
