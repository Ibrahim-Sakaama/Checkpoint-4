$(document).ready(function() {
    $("#dialog").hide();
  } );

function strongg()
{
    var  bold_Items = document.getElementById("textt");
    if (bold_Items.style.fontWeight=="normal"){
        bold_Items.style.fontWeight="bold";
    }
    else {
        bold_Items.style.fontWeight="normal";
    }

}

function italicc() 
{
    var  italic_Items = document.getElementById("textt");
    if(italic_Items.style.fontStyle=="normal"){
    italic_Items.style.fontStyle="italic";
    }
    else {
        italic_Items.style.fontStyle="normal"
    }
}

function underlinedd() 
{
    var  underlined_Items = document.getElementById("textt");
    if(underlined_Items.style.textDecoration=="none"){
    underlined_Items.style.textDecoration="underline";
    }
    else{
        underlined_Items.style.textDecoration="none"
    }
}

function twenty()
{
    var selected=document.getElementById("select").value;
    document.getElementById("textt").style.fontSize=selected;
}

function thirty()
{
    var selectedd=document.getElementById("selectt").value;
    document.getElementById("textt").style.fontFamily=selectedd;
}

$(document).ready(function(){
$(".text").click(function(){
    $("#dialog").dialog();
});
});

