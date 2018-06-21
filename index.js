const request = require('request');
const convert = require('xml-to-json-promise');
const fs = require('fs');
exports.getmembers = function(group, callback){
    if(typeof group == "string"){

        request({
            uri: '/groups/'+group+'/memberslistxml',
            baseUrl: 'https://steamcommunity.com/',
            qs: 'xml=1'
        },function(err, res, body){
            //Parsing it to json format instead of XML
            convert.xmlDataToJSON(body).then(json => {
                var members = json.memberList.members[0].steamID64;
                callback(null, members);
            });
        });
    }else {
        callback("You need to set the group as a string value.");
    }
}