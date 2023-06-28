
var word="loki akita";
var word1=""
word=word.toUpperCase();
window.onload= start;

var misses=0;

var yes= new Audio("sounds/yes.wav");
var no= new Audio("sounds/no.wav");

var letters=new Array(35);

letters[0] = "A";
letters[1] = "Ą";
letters[2] = "B";
letters[3] = "C";
letters[4] = "Ć";
letters[5] = "D";
letters[6] = "E";
letters[7] = "Ę";
letters[8] = "F";
letters[9] = "G";
letters[10] = "H";
letters[11] = "I";
letters[12] = "J";
letters[13] = "K";
letters[14] = "L";
letters[15] = "Ł";
letters[16] = "M";
letters[17] = "N";
letters[18] = "Ń";
letters[19] = "O";
letters[20] = "Ó";
letters[21] = "P";
letters[22] = "Q";
letters[23] = "R";
letters[24] = "S";
letters[25] = "Ś";
letters[26] = "T";
letters[27] = "U";
letters[28] = "V";
letters[29] = "W";
letters[30] = "X";
letters[31] = "Y";
letters[32] = "Z";
letters[33] = "Ż";
letters[34] = "Ź";



for(i=0;i<word.length;i++)
{
    if(word.charAt(i)!=" ") word1=word1+"-";
    else word1=word1+" ";
}

function writeWord()
{
    document.getElementById("board").innerHTML= word1;
}



function start()
{
    var content="";
    for(i=0;i<35;i++)
    {
        var el="letter"+i;
        content=content+'<div class="letter" onclick="check('+i+')" id="'+el+'">'+letters[i]+'</div>';
        if((i+1)%7==0) content=content+'<div style="clear:both";></div>';
    }
    document.getElementById("alphabet").innerHTML=content;
    writeWord();
}

String.prototype.setChar=function(place,char)
{
    if(place> this.length-1) return this.toString();
   else return this.substr(0,place)+char+this.substr(place+1) ;
}

function check(number){

    var correct= false;

    for(i=0;i<word.length;i++)
    {
        if(word.charAt(i)==letters[number]) 
        {
            word1=word1.setChar(i,letters[number]);
            correct=true
        }

    }

        if(correct==true)
        {
            yes.play();
            var el="letter"+number;
            document.getElementById(el).style.background="#003300";
            document.getElementById(el).style.color="#00c000"
            document.getElementById(el).style.border="3px solid #00c000";
            document.getElementById(el).style.cursor="default";
            writeWord();
        }
        else
        {
            no.play();
            var el="letter"+number;
            document.getElementById(el).style.background="#330000";
            document.getElementById(el).style.color="#c00000"
            document.getElementById(el).style.border="3px solid #c00000";
            document.getElementById(el).style.cursor="default";
            document.getElementById(el).setAttribute("onclick",";");

            misses++;
            var image="img/s"+misses+".jpg";
            document.getElementById("hangman").innerHTML='<img src="'+image+'" alt="" />';
        }

        if(word==word1)
        {
            document.getElementById("alphabet").innerHTML="Odgadnięto prawidłowe hasło: "+word+
            '<br/><br/><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
        }

        if(misses>=9)
        {
            document.getElementById("alphabet").innerHTML="Przegrana"+
            '</br></br><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
        }
}

