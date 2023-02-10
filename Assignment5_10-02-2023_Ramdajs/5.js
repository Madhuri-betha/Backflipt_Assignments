//5) lets say you have array of objects (user details), new array value should have user details only whose completedTask >=50
const arr=[
    {"numoftasks":100,"pending":30,"completed":80},
    {"numoftasks":150,"pending":100,"completed":50},
    {"numoftasks":80,"pending":50,"completed":30},
    {"numoftasks":100,"pending":30,"completed":70},
     {"numoftasks":100,"pending":60,"completed":40},
    {"numoftasks":150,"pending":130,"completed":20}]

var result=obj=>obj.completed>=50;
R.filter(result,arr)
