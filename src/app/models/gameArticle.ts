export class GameArticle {
    public title: string;
    public details: string;
    public ageRating: string;
    public imageUrl: string;
    public createdOn: Date;
    public link1: string;
    public link2: string;
    public to: string;

    constructor() {
        this.to = 'General';
    }
}