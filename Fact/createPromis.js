let fs=require("fs");

function myPromise(filepath)
{
return new Promise(function(resolve, reject){
    fs.readFile(filepath,function(error,data){
        if(error)
        {
            reject(error);
        }
        else
        {
            resolve(data);
        }
    });
})
}

let PendingPromise=myPromise("./f1.txt");



let thenPromise =PendingPromise.then(function(data){
    console.log(""+data);
});

PendingPromise.catch(function(error){
    console.log(error);
});