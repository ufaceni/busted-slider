    var pic1 = document.getElementById("pic-1");
    var pic2 = document.getElementById("pic-2");
    var pic3 = document.getElementById("pic-3");
    var pic4 = document.getElementById("pic-4");
    var arr = ["pic-1","pic-2","pic-3","pic-4"];
    var active = "pic-1";
function sliderLeft(){
    for (var i=0;i<arr.length;++i){
        if(active === arr[i]){
           if(active === arr[0]){
                active = arr[arr.length-1];
                console.log(active);
            }else{
                active = arr[i-1];
            }
                document.getElementById(arr[i]).className = "";
                document.getElementById(active).className = "active";
            return;
        }
    }
}

function sliderRight(){
    for (var i=0;i<arr.length;++i){
        if(active === arr[i]){
            if(active === arr[arr.length-1]){
                active = arr[0];
            }else{
                active = arr[i+1];
            }
                document.getElementById(arr[i]).className = "";
                document.getElementById(active).className = "active";
            return;
        }
    }
}