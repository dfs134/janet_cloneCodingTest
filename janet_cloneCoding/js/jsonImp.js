    let xhttp = new XMLHttpRequest(); // json도 데이터를 읽어오려면 XML을 사용한다.
    
    xhttp.onreadystatechange = function () {
        // 파일을 읽어들이는 것을 성공했을 때
        if(xhttp.readyState == 4 && xhttp.status == 200){
            jsonfunc(this.responseText); //this = xhttp
        //      jsonfunc(xhttp.responseText); // 둘다 가능
        }
    }
    xhttp.open("GET","json.json", true);
    xhttp.send();
    
    function jsonfunc( jsonText ) {
        let arrId = new Array();
        let arrTitle = new Array();
        let arrLicenseOrgan = new Array();
        let arrEsRegdt = new Array();
        
        let json = JSON.parse(jsonText); // json 파일로 바꾸기
        
        for(i=0; i<json.length; i++){ // 값 전체 가져오는법
            arrId[i] = json[i].arrId;
            arrTitle[i] = json[i].title;
            arrLicenseOrgan[i] = json[i].licenseOrgan;
            arrEsRegdt[i] = json[i].esRegdt;
        }

        for(i=0; i<arrId.length; i++){
            var menu = document.getElementById('hotmenu');
            var h1 = menu.querySelectorAll(".h1");
            var h2 = menu.querySelectorAll(".h2");
            var h3 = menu.querySelectorAll(".h3");

            h1[i].innerHTML= arrTitle[i];   
            h2[i].innerHTML= arrLicenseOrgan[i];   
            h3[i].innerHTML= arrEsRegdt[i].substr(0,10);   
        }           
    }