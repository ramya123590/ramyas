import { Url } from 'url';

export class Doctor {

// firstName :string;
// lastName : string;
// gender :string;
// fee : number;
// speciality:string;
// branch:string;

constructor(public firstName :string,
    public    lastName : string,
    public  gender :string,
    public photo:Url,
    public  fee : number,
    public  specialist:string,
    public  branch:string ){}



}
