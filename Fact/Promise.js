let fs=require("fs");
let PendingPromise=fs.promises.readFile("./f1.txt");
console.log(PendingPromise);

/*PendingPromise.then(scb);
PendingPromise.catch(fcb);
function scb(data)
{
    console.log(""+data);
}
function fcb(error)
{
    console.log(error);
}*/

let thenPromise =PendingPromise.then(function(data){
    console.log(""+data);
}
);
console.log(thenPromise);
PendingPromise.catch(function(error){
    console.log(error);
});