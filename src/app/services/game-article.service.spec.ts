import { TestBed } from '@angular/core/testing';

import { GameArticleService } from './game-article.service';

describe('GameArticleService', () => {
  let service: GameArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameArticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
