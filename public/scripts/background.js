var counter = 0;
function changeBG(){
    var imgs = [
        "url(https://images.unsplash.com/photo-1485170392793-7c5e2b513f8c?dpr=2&fit=crop&fm=jpg&h=825&ixlib=rb-0.3.5&q=50&w=1450)",
        "url(https://images.unsplash.com/photo-1464895216333-d859b45bf394?dpr=2&fit=crop&fm=jpg&h=825&ixlib=rb-0.3.5&q=50&w=1450)",
        "url(https://images.unsplash.com/photo-1478815716600-15f0c3eb8e4b?dpr=2&fit=crop&fm=jpg&h=825&ixlib=rb-0.3.5&q=50&w=1450)",
        "url(https://images.unsplash.com/photo-1471115853179-bb1d604434e0?dpr=2&fit=crop&fm=jpg&h=825&ixlib=rb-0.3.5&q=50&w=1450)",
        "url(https://images.unsplash.com/photo-1473220464492-452fb02e6221?dpr=2&fit=crop&fm=jpg&h=825&ixlib=rb-0.3.5&q=50&w=1450)",
        "url(https://images.unsplash.com/photo-1465408522361-a6f502298219?dpr=2&fit=crop&fm=jpg&h=825&ixlib=rb-0.3.5&q=50&w=1450)",
        "url(https://images.unsplash.com/photo-1443926818681-717d074a57af?dpr=2&fit=crop&fm=jpg&h=825&ixlib=rb-0.3.5&q=50&w=1450)",
        "url(https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?dpr=2&fit=crop&fm=jpg&h=825&ixlib=rb-0.3.5&q=50&w=1450)"
      ];
    
    if(counter === imgs.length) counter = 0;
    $("body").css("background-image", imgs[counter]);

    counter++;
}
  
  setInterval(changeBG, 4000);


