//2) lets say you have objects with keys {name:"",address:"",phone:"" .........} remove these three fileds from the given object

const arr=[{name:"madhuri",age:"21",address:"vizianagaram",phone:"4567890598"},
           {name:"lakshmi",age:"35",address:"vizianagaram",phone:"4567890598"},
           {name:"vamsi",age:"22",address:"vizianagaram",phone:"4567890598"},
           {name:"hairtha",age:"27",address:"vizianagaram",phone:"4567890598"},
           {name:"tammu",age:"18",address:"vizianagaram",phone:"4567890598"}]
var b=[]
for(var i in arr){
arr[i]=R.dissoc('name',arr[i]);    
arr[i]=R.dissoc('address',arr[i]);
arr[i]=R.dissoc('phone',arr[i]);
b.push(arr[i])
}
console.log(b);
            