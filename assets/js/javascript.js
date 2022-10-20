var tooltipTriggerList =
[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
return new bootstrap.Tooltip(tooltipTriggerEl)
})




    $("#enviarCorreo").click(function() {
    alert("El Correo Fue enviado correctamente")
            
        ;
    });


    /* $(".cambio-color-rojo").dblclick(function(){
        $(this).css({
        "color": "red",
        "font-size": "2em"
        });
        });
 */
    $(".cambio-color-rojo").on("dblclick",function() {
        $(this).css({
            "color": "red",
            
            });
    })
        

$(".titulo").click(function() {


    $(".cartas").toggle("slow") 
    
    
});    