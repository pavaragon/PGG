import { Injectable } from '@angular/core';
import { GameArticle } from '../models/gameArticle';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  allGameArticles: Observable<GameArticle[]>;
  gameArticleCollection: AngularFirestoreCollection<GameArticle>;

  constructor(private fb: AngularFirestore) { 
    this.gameArticleCollection = fb.collection<GameArticle>('Game Articles');
  }

  retrieveGameArticlesFromDB(){
    this.allGameArticles = this.gameArticleCollection.valueChanges();
  }

  public saveGameArticle(saveGameArticle) {
    var plain = Object.assign({}, saveGameArticle);
    this.gameArticleCollection.add(plain);
  }

  public getAllGameArticles() {
    this.retrieveGameArticlesFromDB();
    return this.allGameArticles;
  }

}
