
$("ul:first").after("<ul id='miLista'></ul>");

for(let i= 0; i<5;i++) {
  $("ul li").eq(i).clone(i).appendTo($("#miLista"));
}

for(let i = 0; i<5; i++) {
  $("ul:first li").eq(0).remove();
}

$("#miLista li").eq(4).clone(4).insertBefore($("ul:first li"));

$("ul:first li:last").after("<li id='perejil' class='odd'><span>Isla de Perejil</span></li>")