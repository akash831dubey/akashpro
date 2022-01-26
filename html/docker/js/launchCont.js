function launchCont() {
    var a = document.getElementById('launchContName').value;
    var b = document.getElementById('launchImgName').value;
    var url = `http://65.1.254.95/cgi-bin/launchContainer.py?conname=${a}&imgname=${b}`;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url , true);
    xhr.send();
    xhr.onload = function(){
        var op = xhr.responseText;
        var output = "Container launched : " + op;
        document.getElementById("op").innerHTML=output;
    }
  }