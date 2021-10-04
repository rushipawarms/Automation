let fs=require("fs");
console.log("statrs");
let f1kaPP=fs.promises.readFile("./f1.txt");
let f2kaPP=fs.promises.readFile("./f2.txt");
let f3kaPP=fs.promises.readFile("./f3.txt");
console.log("Files read successfully");
f1kaPP.then(function(data){
    console.log(""+data);

});
f1kaPP.catch(function(error)
{
    console.log(error);
});

f2kaPP.then(function(data){
    console.log(""+data);

});
f2kaPP.catch(function(error)
{
    console.log(error);
});

f3kaPP.then(function(data){
    console.log(""+data);

});
f3kaPP.catch(function(error)
{
    console.log(error);
});