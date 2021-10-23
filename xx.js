function loadXMLDoc() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange=function () {
        if(xhr.readyState == 4 && xhr.status == 200) {

            //通过Ajax响应的东西异步的展示在id为hello的div中
            document.getElementById("myDiv").innerHTML=xhr.responseText;
        }
    };
    xhr.open("get","https://autumnfish.cn/api/joke",true);
    xhr.send();
}


