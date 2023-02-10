//9) lets say you have array of objects drop last 5 players whose avg run scoring is less in overall batsmen
let players=[
    {"name":"dhoni","score":150},
    {"name":"virat","score":110},
    {"name":"gaurav","score":40},
    {"name":"lolly","score":90},
      {"name":"sachin","score":180},
    {"name":"bhargav","score":80},
    {"name":"vamsi","score":60}
]
const result=R.sortWith([
  R.descend(R.prop('score'))
]);
R.dropLast (5,result(players))