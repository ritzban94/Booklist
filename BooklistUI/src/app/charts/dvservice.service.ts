import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, Subject } from 'rxjs'  //commented because it is giving error for being unused.
//uncomment Observable
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class DvserviceService {
  constructor(/*private http: HttpClient */) { }
  private expData:any = [{"today":{"Added":5,"Updated":4,"Deleted":2}},
                            {"today":{"Added":3,"Updated":2,"Deleted":0}},
                            {"today":{"Added":1,"Updated":3,"Deleted":4}},
                            {"today":{"Added":10,"Updated":12,"Deleted":15}}];
  provideData(){
    return this.expData;
  }

}
