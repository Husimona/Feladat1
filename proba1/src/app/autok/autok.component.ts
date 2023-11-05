import { Component } from '@angular/core';

@Component({
  selector: 'app-autok',
  templateUrl: './autok.component.html',
  styleUrls: ['./autok.component.css']
})
export class AutokComponent 
{
    gy:string = "";
    tip:string = "";
    heng:number = 0;
    benz:boolean = true;

    autok:Auto[] = [];

    felvitel():void{
      var aktAuto:Auto = {
        gyarto: this.gy,
        tipus: this.tip,
        hengerurtartalom: this.heng,
        benzineE: this.benz
      };
      this.autok.push(aktAuto);

      this.gy = "";
      this.tip = "";
      this.heng = 0;
      this.benz = true;
    }
};

export interface Auto{
  gyarto:string;
  tipus:string;
  hengerurtartalom:number;
  benzineE:boolean;
};