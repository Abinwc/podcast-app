import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-podlist',
  templateUrl: './podlist.component.html',
  styleUrls: ['./podlist.component.css']
})
export class PodlistComponent implements OnInit {
    public s_no : number;
    public First : string;
    public Last : string;
    public Handle : string; 

   

  constructor() { 
    this.s_no = 1;
    this.First='Abin';
    this.Last='wc';
    this.Handle='@sae';
  }

  ngOnInit(): void {
  }

}
