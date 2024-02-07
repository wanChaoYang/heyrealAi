function cLass (p){
    return document.getElementsByClassName(p);
};
function iD (p){
    return document.getElementById(p);
};
function tAg (p){
    return document.getElementsByTagName(p);
};
function seLect (p){
    return document.querySelector(p);
};
var flagList ={
    'rencent_lists':false
}
iD ('text_zoon').onfocus=function(){
    iD ('search_btn').setAttribute('class','active');
};
iD ('text_zoon').onblur=function(){
    iD ('search_btn').setAttribute('class','');
};
iD ('rencent_top').onclick=function(){
    flagList['rencent_lists']=!flagList['rencent_lists'];
    if(flagList['rencent_lists']){iD ('rencent_lists').classList.add('active');}
    else{iD ('rencent_lists').classList.remove('active');}
};
for(var i=0;i<cLass ('character_like').length;i++){
    cLass ('character_like')[i].onclick=function(){
        if(this.getAttribute('class').indexOf('active')>-1){
            this.classList.remove('active')
        }else{
            console.log(2)
            this.classList.add('active')
        }
    }
};
(function () {
   $.ajax({
    url:"https://test.aigirlapp.com/user/virtualRole/recommend",
    type:"POST",
    contentType:"application/json",
    headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
        // "Yy-Basic-Params:":JSON.stringify({
        //     "accesskey":"JxBru3hfVc",
        //     "buildVersion":"1",
        //     "deviceId":"Mozilla50WindowsNT100Win64x64AppleWebKit53736KHTMLlikeGeckoChrome121000Safari53736",
        //     "lang":"zh-CN",
        //     "deviceName":"Netscape",
        //     "os":"Windows",
        //     "osVersion":"",
        //     "platform":"web"})
    },
    data:{
        "pageNum": "1",
        "pageSize": "100" 
    },
    success:function (result) {
        console.log('res',result);
    },
    error:function (error) {
        console.log(error);
    }
   })
    
})()