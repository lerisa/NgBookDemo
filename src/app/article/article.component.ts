import { Article } from './../model/article';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  // votes: number;
  // title: string;
  // link: string;

  //update the view 

  @Input()
  article: Article;



  constructor() {
    // this.title = "Angular tour";
    // this.link = "http.angular.com";
    // this.votes = 10;

    //this.article.links="http.angular.com"

    //this.article = new Article("Angular tour", "http.angular.com", 10);//instead of storing the title, link,and votes properties directly on the component, we’re storing a reference to an article
  }

  ngOnInit() {
  }
  // we don’t increment votes on the component, but rather, we need to increment the votes on the article. 
  voteUp(): boolean {
    // this.votes += 1;
    // this.article.votes += 1;
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    // this.votes -= 1;
    // this.article.votes -= 1;
    this.article.voteDown();
    return false;
  }

  //clicking on the vote up or vote down links will cause the page to reload instead of updating the article list. 
}
