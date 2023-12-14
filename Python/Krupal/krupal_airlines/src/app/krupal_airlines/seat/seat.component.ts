import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'seat-krupal',
    templateUrl: 'seat.component.html',
    styleUrls: ['seat.component.css']
})
export class SeatComponent implements OnInit {

  value!: number;
  noOfPassenger:number=1
  numOfBlock:number=0;
  bookedseats:any[]=[]

  constructor() {
    this.numOfBlock=3;
    this.numOfBlock+=1;

    let num=localStorage.getItem("noofpassenger")
    if(num!=null){
      this.noOfPassenger=Number(num);
    }
    // this.noOfPassenger=2;

    this.bookedseats=['A1','A7','B4','B6','A13']
    this.makeBlocks()
  }

  leftOptions1: any[] = [];
  leftOptions2: any[] = [];
  leftOptions3: any[] = []

  rightOptions1: any[] = [];
  rightOptions2: any[] = [];
  rightOptions3: any[] = [];

  makeBlocks(){
    for(let i=1;i<this.numOfBlock;i++ ){
      let block="";
      if (i==1)block='A'
      if (i==2)block='B'
      if (i==3)block='C'
      if (i==4)block='D'
      if (i==5)block='E'
      if (i==6)block='F'
      if (i==7)block='G'
      if (i==8)block='H'
      if (i==9)block='I'
      if (i==10)block='J'

      for(let j=1; j<=17; j++ ){
      this.leftOptions1.push({ name: block+j , value: block+j })
      this.leftOptions2.push({ name: block+(j+1) , value: block+(j+1) })
      this.leftOptions3.push({ name: block+(j+2) , value: block+(j+2) })
      this.rightOptions1.push({ name: block+(j+3) , value: block+(j+3) })
      this.rightOptions2.push({ name: block+(j+4) , value: block+(j+4) })
      this.rightOptions3.push({ name: block+(j+5) , value: block+(j+5) })
      j+=5
      }
    }

      this.bookedseats.forEach(e=>{
       if(this.leftOptions1.map(l=>l.name).includes(e)){
        this.leftOptions1.find(t=>t.name==e).name="X"
       }
      else if(this.leftOptions2.map(l=>l.name).includes(e)){
        this.leftOptions2.find(t=>t.name==e).name="X"
       }
       else if(this.leftOptions3.map(l=>l.name).includes(e)){
        this.leftOptions3.find(t=>t.name==e).name="X"
       }
       else if(this.rightOptions1.map(l=>l.name).includes(e)){
        this.rightOptions1.find(t=>t.name==e).name="X"
       }
      else if(this.rightOptions2.map(l=>l.name).includes(e)){
        this.rightOptions2.find(t=>t.name==e).name="X"
       }
       else if(this.rightOptions3.map(l=>l.name).includes(e)){
        this.rightOptions3.find(t=>t.name==e).name="X"
       }})
  }
  seatnum(event:any){
      //  console.log(event);
        if(event.length>=this.noOfPassenger){
          // console.log(event);
          event.shift()
          console.log(event);
         }
  }

    ngOnInit() {}

}
