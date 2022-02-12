class ourArray{     //parent object
    constructor(){          //properties (key value pairs)
        this.arr=[1,2,3,4,5];
        this.length=5;
    }
    push(ele){                     //methods
        this.arr[this.length]=ele;
        this.length+=1;
    }
    pop(){
        this.length-=1;
    }
    map(cb){
        let output=[];
     for(let i=0;i<this.length;i++){
        let condition=(cb(this.arr[i]));
        if(condition){
            output.push(cb(this.arr[i]));
        }
     }
     return output;
    }
    sortAsc(){
     for(let i=0;i<this.length;i++){
         for(let j=0;j<this.length-i-1;j++){
             if(this.arr[j]>this.arr[j+1]){
                 let temp=this.arr[j];
                 this.arr[j]=this.arr[j+1];
                 this.arr[j+1]=temp;
             }

         }
     }
     return this.arr;

    }
    sortDes(){
        for(let i=0;i<this.length;i++){
            for(let j=0;j<this.length-i-1;j++){
                if(this.arr[j]<this.arr[j+1]){
                    let temp=this.arr[j];
                    this.arr[j]=this.arr[j+1];
                    this.arr[j+1]=temp;
                }
   
            }
        }
        return this.arr;
   
       }
       reduce(ele){
         let acc=0;
           for(let i=0;i<this.length;i++){
                acc+=this.arr[i];
           }
           return acc;
       }
}

let arr1=new ourArray();
// arr1.push(0);


// console.log("sorted:"+arr1.sortAsc());
// console.log(arr1);
// console.log(arr1.map(function(ele){
//     return ele*2;
// }))
console.log(arr1);
console.log(arr1.reduce(function (ele){
    return;
}))

