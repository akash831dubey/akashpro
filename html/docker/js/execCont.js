function execCont() {
    var a = document.getElementById('executeContName').value;
    var b = document.getElementById('cmd').value;
    var url = `http://65.1.254.95/cgi-bin/execContainer.py?conname=${a}&cmdname=${b}`;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url , true);
    xhr.send();
    xhr.onload = function(){
        var op = xhr.responseText;
        var output = "Response from Container : " + op;
        document.getElementById("op").innerHTML=output;
    }
  }