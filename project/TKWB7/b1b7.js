function myFunction(){
    document.getElementById("thietkeweb").classList.toggle("show");
}
window.onclick = function(event){
    if(event.targetmatches('.text')){
        var thietkeweb = document.getElementsByClassName("thietkeweb-content");
        var i;
        for(i=0;i<thietkeweb.length;i++){
            var openthietkeweb = thietkeweb[i];
            if(openthietkeweb.classList.contains("thietkeweb")){
                openthietkeweb.classList.remove(thietkeweb);
            }
        }
    }
}