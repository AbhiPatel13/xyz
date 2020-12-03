function finddevice(){
    const os= require("os");
    const x = os.freemem();
    document.getElementById("ossystem").innerHTML=x;
  }