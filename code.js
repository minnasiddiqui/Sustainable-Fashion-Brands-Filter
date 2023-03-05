Sustainable Fashion Brands

var fashionInput = "";
onEvent("image1", "click", function( ) {
 setScreen("screen2");
});
onEvent("button1", "click", function( ) {
 if (fashionInput == "Affordable") {
 setScreen("screen3");
 } else if (fashionInput == "Stylish Streetwear") {
 setScreen("screen4");
 } else if ((fashionInput == "Modest")) {
 setScreen("screen5");
 } else if (fashionInput == "Business Casual") {
 setScreen("screen6");
 } else if (fashionInput == "Minority Owned") {
 setScreen("screen7");
 }
});
onEvent("dropdown1", "change", function( ) {
 fashionInput = getText("dropdown1");
});
