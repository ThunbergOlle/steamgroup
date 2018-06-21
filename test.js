const steamgroup = require('./index.js');

steamgroup.getmembers("unturnedgametrade", function(err, members){
    console.log(members);
});