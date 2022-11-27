function fun1(){
   var radi = document.getElementsByName('r1')
   for(i=0; i<radi.length; i++){
    if(radi[i].checked){
      alert('yes' +i+ 'Element')
    }
   }
}