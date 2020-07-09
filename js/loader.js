document.addEventListener('DOMContentLoaded',()=>{
    alert('hello fuckers') 
});


$(document).ready(function(){
    $(".modal").modal();
    $(".parallax").parallax();
    $(".sidenav").sidenav();
    $(".slider").slider({full_width: true});
    $(".myreviews").carousel({
        numVisible: 7,
        shift: 60,
        padding: 60,
    });
    $('.tooltipped').tooltip();
})

function togglemodal(){
    var instance = M.Modal.getInstance($('#modal3'));
    instance.open();
}
