///////////SOAL 1///////////
var n = 9

for (i = 0; i < n; i++){
    for (h = 0; h < n; h++){
        if (i >= 8 - h) {
            document.write((n-i) * 2 + " ")
        } else {
            document.write(" - ")
        }
    }
    document.write("<br>")
}
//////////SOAL 2///////////
var n = 9

for (i = 0; i < n; i++){
    for(h = 0; h < n; h++){
        if (i == h || h == 8 - i) {
            document.write(i * 2)
        } 
        else {
            document.write(" - ")
        }
    }
    document.write("<br>")
}
////////SOAL 3///////////
var a = 1
var b = 1
var c = 1
var d = 1

   for ( var i = 0; i < 7; i++){
    {
     document.write(d + "<br>")
     d = a + b + c;
     a = b;
     b = c;
     c = d;
       }
   }
