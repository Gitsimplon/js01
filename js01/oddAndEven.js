
var nbr ;
var b = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];

b.forEach(element => {

    
    nbr = element % 2;

    if (nbr == 0  ) {
        
        nbr = "paire"
        console.log( nbr);
        
    }else if(nbr == 1  )
    {
        nbr = "impaire"
        console.log( nbr);
    }

});



    





