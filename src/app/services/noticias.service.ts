import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaTopHeadlines } from '../pages/Interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private httpclient: HttpClient) { }


  getTopHeadLines(){
    return (this.httpclient.get<RespuestaTopHeadlines>('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3df5353e8d6245e8850e16846da581d1'));

  }
}
