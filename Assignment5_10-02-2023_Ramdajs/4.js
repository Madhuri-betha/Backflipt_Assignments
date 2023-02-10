//4) lets say you have array of objects , find object which has "userId"==="INPUT_USERID"

const result = [{"userid": "madhuri","password": "vbnm_123","mail": "madhuri@gmail.com"},
               {"userid": "lawrence","password": "dfgh_3","mail": "lawrence@gmail.com"},
               {"userid": "vamsi","password": "ghj3","mail": "vamsi@gmail.com"}];
R.find(R.propEq('userid', 'madhuri'))(result);
