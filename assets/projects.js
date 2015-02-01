$(document).ready(
function(){ 
$(".projekty ul li span a").fancybox({'hideOnContentClick': true});
$(".projekty span a").fancybox({'hideOnContentClick': true});

$(".nazwaProjektu").click(function() {$(this).next("span").slideDown("normal");}, function() {$(this).next("span").slideUp("normal");});

$("#2008").click(function() {$(this).css("color","#c74600"); $(".2008").slideDown("normal");}, function() {$(this).css("color", "#10aa00"); $(".2008").slideUp("normal");});
$("#2007").click(function() {$(this).css("color","#c74600"); $(".2007").slideDown("normal");}, function() {$(this).css("color","#10aa00"); $(".2007").slideUp("normal");});
$("#2006").click(function() {$(this).css("color","#c74600"); $(".2006").slideDown("normal");}, function() {$(this).css("color","#10aa00"); $(".2006").slideUp("normal");});
$("#nodate").click(function() {$(this).css("color","#c74600"); $(".nodate").slideDown("normal");}, function() {$(this).css("color","#10aa00"); $(".nodate").slideUp("normal");});

$(".bm").hide();
$("#bm").click(function() {$(this).css("color","#c74600"); $(".bm").fadeIn("fast");}, function() {$(this).css("color","#c10aa00"); $(".bm").fadeOut("fast");});
$(".bbu").hide();
$("#bbu").click(function() {$(this).css("color","#c74600"); $(".bbu").fadeIn("fast");}, function() {$(this).css("color","#10aa00"); $(".bbu").fadeOut("fast");});
$(".ip").hide();
$("#ip").click(function() {$(this).css("color","#c74600"); $(".ip").fadeIn("fast");}, function() {$(this).css("color","#c10aa00"); $(".ip").fadeOut("fast");});
$(".isc").hide();
$("#isc").click(function() {$(this).css("color","#c74600"); $(".isc").fadeIn("fast");}, function() {$(this).css("color","#c10aa00"); $(".isc").fadeOut("fast");});




});