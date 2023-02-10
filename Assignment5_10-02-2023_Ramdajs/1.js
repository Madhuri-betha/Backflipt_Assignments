//1) sort (desc) array of objects based startDate key ex-obj {task:'TASK_NAME',startDate:'22-3-2021',endDate:'25-4-2021'}
var array =[{task:'js',startDate:"10-2-2022",endDate:'25-4-2022'},
          {task:'css',startDate:'2-1-2021',endDate:'25-4-2021'},
          {task:'html',startDate:'30-10-2020',endDate:'25-4-2021'},
          {task:'jquery',startDate:'5-1-2023',endDate:'25-2-2023'},
          {task:'git',startDate:'10-2-2023',endDate:'25-2-2023'}]

// To conver date into YYYY-MM-DD format
const dateConvert = y => {
 var x=y.startDate
  x= x.split("-");
  if(x[0].length < 2) x[0]="0"+x[0];
  if(x[1].length <2) x[1]="0"+x[1];
  y.startDate=R.join("-",R.reverse(x))            
}

//sorting dates
R.map(dateConvert, array);
const sortvalues = R.sortWith([R.descend(R.prop('startDate'))]);
var array = sortvalues(array);

//changing dates to original form
const rev = x => {
  var y=x.startDate
  y=y.split("-")
  y[1]=parseInt(y[1])
  y[2]=parseInt(y[2])
  x.startDate=R.join("-",R.reverse(y))
  return x 
}
array=R.map(rev,array)
console.clear()
for ( var i in array ) console.log(array[i]);
array