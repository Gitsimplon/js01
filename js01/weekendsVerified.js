
var day = new Array("lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche");

var jour = ["weekday", "weekend"];

var index = 0;


    day[index] = prompt();
    element  = day[index];
     //const element = day[index];

    if ( (element == day[5]) || (element == day[6])) 
{

    
    console.log(jour[1]);
    
}else if( element != day[5] || day[6]){

    console.log(jour[0]);

}




