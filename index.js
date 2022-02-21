// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
const input = "bobby";
function findMatching(array, string) {
    const lcNames = string.toLowerCase();
    //console.log (lcNames);
    const matDrivers = array.filter(function(names){
        const drName = names.toLowerCase();
        return drName === lcNames;
    });
    return matDrivers;
}

console.log(findMatching(drivers,input));

function fuzzyMatch(arr,str) {
    const lcLet = str.toLowerCase();

    const matDrv = arr.filter(function(name){
        const drNames = name.toLowerCase();
        return drNames.slice(0,str.length) === lcLet;
    });

    return matDrv;

}

function matchName(obj, strg) {
    const lcName = strg.toLowerCase();

    const matNames = obj.filter(function(nam){
        const drNam = Object.assign({},nam);
        //console.log(drNam);
        return drNam["name"].toLowerCase() === lcName;
    })

    return matNames;
}
