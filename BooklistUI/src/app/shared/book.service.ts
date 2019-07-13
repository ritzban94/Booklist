import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, Subject } from 'rxjs'  //commented because it is giving error for being unused.
//uncomment Observable
import { map } from 'rxjs/operators'

import { Bookmodel } from './bookmodel.model'

@Injectable()
export class BookService {
  selectedbookmodel: Bookmodel;
  bookmodels: Bookmodel[];
  private readonly baseURL:string = "http://localhost:3000/books";
  constructor(private http: HttpClient) { }

  postbook(bookmodel: Bookmodel){
    return this.http.post(this.baseURL,bookmodel);
  }

  getbooklist(){
    return this.http.get(this.baseURL);
  }

  updatebook(bookmodel: Bookmodel){
    return this.http.put(this.baseURL + "/" + bookmodel._id, bookmodel);
  }

  bookdelete(_id: string){
    return this.http.delete(this.baseURL+"/"+_id);
  }
}
