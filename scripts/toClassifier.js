/*
Exports values from a values list to this format (for classifiers).
[
    "name1",
    "name2",
    ...
]
*/

var fs = require('fs');

var name = 'towerOfDoom';

var vals = JSON.parse(fs.readFileSync('../values/'+name+'.json').toString());

var arr = [];

for (var x of vals) {
    arr.push(x.name);
}

fs.writeFileSync('./classifier/'+name+'.json', JSON.stringify(arr, null, 4));