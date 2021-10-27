export{}
interface human{
    names:string,
    address:string
}
class basics{
    private num:number
    name:string
    constructor(x:number,person?:string)
    {
        this.num=x;
        this.name=person;
    }
    display(data:human)
    {
    //console.log("My name is "+this.name+" , and my ID is"+this.num)//
    console.log(data.names,data.address);
    }
}
var obj = new basics(12,'Rohan')

const individual=
    {
        names:'Raghav',
        address:'Delhi'
    }
obj.display(individual);
