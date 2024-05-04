export class User{
        id: string;
        title: string;
        singer: string;
        rating: number;
        record: Date;
    constructor (id: string ='', title: string = '', singer:string ='',rating:number=0, record:Date = new Date(),)
        {   this.id = id;
            this.title = title;
            this.singer = singer;
            this.record = record;
            this.rating = rating;
        }
}
export interface iUser{
    id: string;
    title: string;
    singer: string;
    rating: number;
    record: Date;
}