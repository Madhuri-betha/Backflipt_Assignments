//3) concat two array of objects and sort (asc) it based on "cost" key

const array1=[{task:'js',startDate:'2-2-23',endDate:'15-2-23',cost:2000},
              {task:'html',startDate:'9-3-22',endDate:'13-3-22',cost:5000}];
const array2=[{task:'js',startDate:'2-2-23',endDate:'15-2-23',cost:6000},
              {task:'html',startDate:'9-3-22',endDate:'13-3-22',cost:7000}];
const result=R.concat(array1,array2);
const start = R.sortWith([
R.ascend(R.prop('cost'))
]);
start(result);