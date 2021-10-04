let fs=require("fs");
let f1kaPP=fs.promises.readFile("./f1.txt");
f1kaPP.then(function(data){
    console.log(""+data);
    let f2kaPP=fs.promises.readFile("./f2.txt");
    f2kaPP.then(function(data){
        console.log(""+data); 
    let f3kaPP=fs.promises.readFile("./f3.txt");
        f3kaPP.then(function(data){
            console.log(""+data);
        });
    });
});





