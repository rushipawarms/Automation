//Automation code.
//puppeteer ke function gives pending promise.


const puppeteer = require('puppeteer');

//build Browser/ Open Browser.
let tab;
let idx;
let gcode;

let BrOpenPromise = puppeteer.launch({ headless: false, defaultViewport: null, args: ["--start-maximized"] });
BrOpenPromise.then(function (browser) {
    let pagesPP = browser.pages();
    return pagesPP;
}).then(function (pages) {
    //here pages are in array;
    let page = pages[0];
    tab = page;
    let pageOpenPP = page.goto("https://www.hackerrank.com/auth/login");
    return pageOpenPP;
}).then(function () {
    let idTyape = tab.type("#input-1", "wafib72734@drlatvia.com");
    return idTyape;
}).then(function () {
    let passType = tab.type("#input-2", "12345678");
    return passType;
}).then(function () {
    let buttonclickPP = tab.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
    return buttonclickPP;
}).then(function () {
    let waitandclickpp = waitandclick(".ui-btn.ui-btn-normal.ui-btn-large.ui-btn-primary.ui-btn-link.ui-btn-styled");
    return waitandclickpp;
}).then(function () {
    let waitpp = waitandclick("#base-card-15-link");
    return waitpp;
}).then(function () {

    let waitsolvedPP = tab.waitForSelector(".js-track-click.challenge-list-item");
    return waitsolvedPP;
}).then(function () {
    let allquePP = tab.$$(".js-track-click.challenge-list-item");
    return allquePP;
}).then(function (alla) {
    Alllinkpp = [];
    for (let i = 0; i < alla.length; i++) {

        let linkPP = tab.evaluate(function (ele) { return ele.getAttribute("href"); }, alla[i]);
        Alllinkpp.push(linkPP);
    }
    let allqpp = Promise.all(Alllinkpp);
    return allqpp;
}).then(function (allLink) {
    let completelinks = [];
    for (let i = 0; i < allLink.length; i++) {
        let completelink = "https://www.hackerrank.com" + allLink[i];
        completelinks.push(completelink);

    }
    console.log(completelinks);
    let onesolvelinkpp = Solvedlink(completelinks[0]);
   
    for(let i=1;i<completelinks.length;i++)
    {
        onesolvelinkpp=onesolvelinkpp.then(function(){
            let nextsolvelinkpp=Solvedlink(completelinks[i]);
            return nextsolvelinkpp;
        })

    }
    return onesolvelinkpp;
    
}).then(function () {
    console.log("All question Solved");
}).catch(function (error) {
    console.log(error);
})
function getcode() {
    return new Promise(function (resolve, reject) {
        let waitpp = tab.waitForSelector(".hackdown-content h3");
        waitpp.then(function () {
            let allApp = tab.$$(".hackdown-content h3");
            return allApp;
        }).then(function (Aall) {
            let allcodesPP = [];
            
            for (let i = 0; i < Aall.length; i++) {
                let namepp = tab.evaluate(function (elem) {
                    return elem.textContent;
                }, Aall[i])
                allcodesPP.push(namepp);
            }
            let codenamecheckPP = Promise.all(allcodesPP);
            return codenamecheckPP;
        }).then(function (allAname) {

            for (let i = 0; i < allAname.length; i++) {
                if (allAname[i] == "C++") {
                    idx = i;
                    break;
                }
            }
          
            let alldivpp = tab.$$(".hackdown-content .highlight");
            return alldivpp;
        }).then(function (alldiv) {
         
            let codediv = alldiv[idx];
           
            let codepp = tab.evaluate(function (elem) {
                return elem.textContent;
            }, codediv)
           
            return codepp;
        }).then(function (divcode) {
            
            gcode= divcode;
            resolve();
        }).catch(function(error){
            reject(error);
        })
    });

}
/*function handlelock(selector)
{
    return new Promise(function(resolve,reject){

        

        let waitforlockPP = tab.waitForSelector(selector, { visible: true })
        waitforlockPP.then(function () {
            let lockclickPP = tab.evaluate(function(ele) {

            ele.click(), selector});
            return lockclickPP;

            
        }).then(function(){
            resolve();
        });
        clickonlockp.catch(function(error){
            resolve();

        });
    });
}*/

function Solvedlink(link) {
    return new Promise(function (resolve, reject) {
        
        let linkpp = tab.goto(link);
        linkpp.then(function(){
            return  tab.waitForTimeout(3000);
        }).then(function () {
            let tutopp = waitandclick("[data-attr2='Editorial']");
            return tutopp; 
        }).then(function () {
            let getcodepp = getcode();
            return getcodepp;
        }).then(function () {
           let clicksump=tab.click("#tab-1-item-0");
           return clicksump;
        }).then(function(){
            let codepastep=pastehere();
            return codepastep;
        }).then(function(){
            resolve();
        }).catch(function(error){
            reject(error);
        })
    });
}
function pastehere()
{
return new Promise(function(resolve,reject){
        let waitcp=waitandclick(".checkbox-input");
        waitcp.then(function(){
           let pastincheckp= tab.type(".input.text-area.custominput.auto-width",gcode);
           return pastincheckp;
        }).then(function(){
            let ctrp=tab.keyboard.down("Control");
            return ctrp;
        }).then(function(){
            let apresp=tab.keyboard.press("A");
            return apresp;
        }).then(function(){
            let xpresp=tab.keyboard.press("x");
            return xpresp;
        }).then(function(){
            let clickp=tab.click(".hr-monaco-editor");
            return clickp;
        }).then(function(){
            let apresp=tab.keyboard.press("A");
            return apresp;
        }).then(function(){
            let vpresp=tab.keyboard.press("v");
            return vpresp;
        }).then(function(){
            let sumbitp=tab.click(".ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled");
            return sumbitp;
        }).then(function(){
            resolve();
        }).catch(function(error){
            reject(error);
        })
    });
}

function waitandclick(selector) {
    return new Promise(function (resolve, reject) {
        let waitforIntprekitPP = tab.waitForSelector(selector, { visible: true })
        waitforIntprekitPP.then(function () {
            let IntprekitPP = tab.click(selector);
            return IntprekitPP;
        }).then(function () {
            resolve();
        }).catch(function (error) {
            reject(error);
        })
    });
}



