//8) lets say you have array of objects (students marks details {name:'',marks:''.....}) , get the student details who have scored least in the class
let students=[{"name":"madhuri","marks":70},
              {"name":"lawrence","marks":40},
              {"name":"vamsi","marks":40},
              {"name":"preety","marks":50}]
const ageNameSort = R.sortWith([
  R.ascend(R.prop('name'))
]);
var result=ageNameSort(students)[0].marks;
for(var i in students)
{
    if(students[i].marks==result){
    console.log(students[i]);
       }
}
