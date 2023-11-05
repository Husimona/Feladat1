import { Component } from '@angular/core';

@Component({
  selector: 'app-termekek',
  templateUrl: './termekek.component.html',
  styleUrls: ['./termekek.component.css']
})

 

  /*Termekek:Termek[] = [
    {cikkszam: "asd123", gyarto: "Lenovo", nettoAr: 123321, afa: 27 },
    {cikkszam: "valami12", gyarto: "Dell", nettoAr: 127676, afa: 27 },
    {cikkszam: "Akarmi", gyarto: "Asus", nettoAr: 1233900, afa: 27 },
    {cikkszam: "Barmi", gyarto: "Razer", nettoAr: 120099, afa: 27 },
    {cikkszam: "asd123", gyarto: "Lenovo", nettoAr: 123321, afa: 27 },
  ];*/

  /*Termekek: Termek[] = [
    {cikkszam: "asdt123", gyarto: "Lenovo", nettoAr:123321, afa:27},
    {cikkszam: "valami12", gyarto: "Dell", nettoAr:123321, afa:27},
    {cikkszam: "Akarmi", gyarto: "Asus", nettoAr:123321, afa:27},
    {cikkszam: "Barmi", gyarto: "Razer", nettoAr:123321, afa:27},
    {cikkszam: "asdt123", gyarto: "Lenovo", nettoAr:123321, afa:27},
  ];*/

  /*Termekek: Termek[] = [
    {cikkszam: "asdt123", gyarto: "Lenovo", nettoAr:123321, afa:27},
    {cikkszam: "valami12", gyarto: "Dell", nettoAr:123321, afa:27},
    {cikkszam: "Akarmi", gyarto: "Asus", nettoAr:123321, afa:27},
    {cikkszam: "Barmi", gyarto: "Razer", nettoAr:123321, afa:27},
    {cikkszam: "asdt123", gyarto: "Audio Technika", nettoAr:123321, afa:27},
  ];*/

  export class TermekekComponent {
    t1:Termek = {cikkszam: "L1", gyarto: "Lenovo", nettoAr: 120000, afa: 27};
    t2:Termek = {cikkszam: "C1", gyarto: "Canon", nettoAr: 120000, afa: 27};
    t3:Termek = {cikkszam: "A1", gyarto: "ASUS", nettoAr: 120000, afa: 27};
    t4:Termek = {cikkszam: "X1", gyarto: "XBOX", nettoAr: 120000, afa: 27};
    t5:Termek = {cikkszam: "N1", gyarto: "Nintendo", nettoAr: 120000, afa: 27};
  
    termekek:Termek[] = [this.t1, this.t2, this.t3, this.t4, this.t5];



    atlagbrt:number = 0;

    asd:number = 0;

    brtSzamolas():void{
      for(var i:number = 0; i < this.termekek.length; i++){
        this.asd += this.termekek[i].nettoAr + (this.termekek[i].nettoAr * (this.termekek[i].afa / 100));
        this.atlagbrt = this.asd /this.termekek.length;

      }
  
 
    }
 

};
  



 /* export interface Termek{
  cikkszam:string;
  gyarto:string;
  nettoAr:number;
  afa:number;

}*/

/*export interface Termek{
  cikkszam:string;
  gyarto:string;
  nettoAr:number;
  afa:number;
};*/

/*export interface Termek{
  cikkszam:string;
  gyarto:string;
  nettoAr:number;
  afa:number;
};*/

export interface Termek{
  cikkszam: string;
  gyarto:string;
  nettoAr:number;
  afa:number;
}