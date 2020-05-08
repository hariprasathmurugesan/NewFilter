import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MemModel } from '../models/filterArray';

//For HTTP Calls. Use when Backend service is available
/*const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type':'application/xxx'
  })
}*/

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  url:string;
  constructor() { }
  //Call to external service to get all the members
  //Below service call is commented and will need to be turned ON once Backend is available
  
  /*getAllMembers():Observable<>{
    return this.http.get<>(this.url);
  }*/

  getAllMembers(){
    return [
      {
        id:'1',
        name:'Hariprasath Murugesan',
        age:'25',
        salary:'80000'
      },
      {
        id:'2',
        name:'Praveen NK',
        age:'29',
        salary:'90000'
      },
      {
        id:'3',
        name:'Sumana',
        age:'40',
        salary:'70000'
      },
      {
        id:'4',
        name:'John Michaels',
        age:'45',
        salary:'90000'
      },
      {
        id:'5',
        name:'Kavit Joshi',
        age:'38',
        salary:'100000'
      },
      {
        id:'6',
        name:'Rama Tandapani',
        age:'44',
        salary:'80000'
      }
    ]
  }

  

}
