import { Component, OnInit } from '@angular/core';
import { MemberService } from '../../services/member.service';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  members: any[] = [];
  searchone: any;
  filterCount:any[] = [];
  searchArray: any[] = [];
  varArray:any[] = [];
  condArray:any[] = [];
  public outputSer: any[] = [];
  filterCountLength:number;
  k:number;
  pos:number;
 
  filterArray:any[];
  

 

  constructor(private memberService:MemberService) { }

  ngOnInit(): void {
    
    //Call Service to get all the members
    this.members = this.memberService.getAllMembers();
    this.k = 0;
  }

  addFilter(){
    this.filterCount.push(this.k);
    this.k++;
    //console.log(this.filterCount);
  }

  onDelete(m:number){
    this.pos = this.filterCount.indexOf(m);
    this.filterCount.splice(this.pos,1);
  }

  advSearch(){
    //get the list of records which are present
    
    //get search criterias and entered variables//
    this.searchArray = [];
    this.varArray = [];
    this.condArray = [];
    this.outputSer = [];
    for (let i=0; i<this.filterCount.length; i++){
      
      var j:number = this.filterCount[i];
      
      this.varArray[i] = ((document.getElementById("var"+j) as HTMLInputElement).value);
      this.condArray[i] = ((document.getElementById("cond"+j) as HTMLInputElement).value);
      this.searchArray[i] = ((document.getElementById("srch"+j) as HTMLInputElement).value); 
    }
    //display the data obtained//
    for (let v=0; v<this.filterCount.length; v++){
      
      this.outputSer[v] = "Condtion #"+v + " :" + this.varArray[v] + " " + this.condArray[v] + " "+ this.searchArray[v];
    }
    
   
    this.members = [];
    
    switch (this.filterCount.length) {
        case 1:{
          this.members = [
            {
              id:'1',
              name:'Hariprasath Murugesan',
              age:'25',
              salary:'80000'
            }
          ]
          break;
        }
        case 2:{
          this.members = [
            {
              id:'1',
              name:'Hariprasath Murugesan',
              age:'25',
              salary:'80000'
            },
            {
              id:'2',
              name:'Lakshmi TS',
              age:'22',
              salary:'90000'
            }
          ]
          break;
        }
        case 3:{
          this.members = [
            {
              id:'1',
              name:'Hariprasath Murugesan',
              age:'25',
              salary:'80000'
            },
            {
              id:'2',
              name:'Lakshmi TS',
              age:'22',
              salary:'90000'
            },
            {
              id:'3',
              name:'Paarthiv',
              age:'6',
              salary:'100000'
            }
          ]
        }
        break;
        default: {
          this.members = [
            {
              id:'1',
              name:'Hariprasath Murugesan',
              age:'25',
              salary:'80000'
            },
            {
              id:'2',
              name:'Lakshmi TS',
              age:'22',
              salary:'90000'
            },
            {
              id:'3',
              name:'Paarthiv',
              age:'6',
              salary:'100000'
            },
            {
              id:'4',
              name:'Shravanti',
              age:'10',
              salary:'170000'
            }
          ]
        }
    }

}

 

}
