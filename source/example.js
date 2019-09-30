window.onscroll = function(){
  var t = document.documentElement.scrollTop;
    if(t>600){
    title.style.animationPlayState = "running";
    a1.style.animationPlayState = "running";
    a2.style.animationPlayState = "running";
    a3.style.animationPlayState = "running";
    a4.style.animationPlayState = "running";
    field.style.animationPlayState = "running";
    }
    if(t>4300){
    dP_headline.style.animationPlayState = "running";
    dP_headline_picture.style.animationPlayState = "running";
    }
    if(t>6800){
    dP_headline_2.style.animationPlayState = "running";
    }
    if(t>11800){
    end_headline.style.animationPlayState = "running";
    end_quote_1.style.animationPlayState = "running";
    end_quote_2.style.animationPlayState = "running";
    }
    monitor.innerHTML = t + "px";
    }
