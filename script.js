$("#bunny-hat").click(function(){
    $("#Empty").toggle();
    $("#bunny-out").toggle();
});

$("#disappear").click(function(){
    $(".magician").fadeToggle();
});

$("#curtains").click(function(){
    $(".curtains").slideToggle();
    $(".dude").slideToggle();
});
$("#Fly").click(function(){
    $(".plane").hide();
    $(".yikes").show();
});