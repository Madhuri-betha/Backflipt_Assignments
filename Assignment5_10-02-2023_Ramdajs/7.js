//7) lets say you have arr1=[1,2,3,4,5,6] and arr2=[3,7,2,9,10,53] , all even element should be on left and old on right (into single array)
const arr1=[1,2,3,4,5,6];
const arr2=[3,7,2,9,10,53];
const isEven = n =>n%2==0;
const isOdd = n=> n%2!=0
const result=R.concat(arr1,arr2);
const even=R.filter(isEven,result);
const odd=R.filter(isOdd,result);
R.concat(even,odd)