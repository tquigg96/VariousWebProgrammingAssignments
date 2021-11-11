


alert("It is my first example with javascript");






function dimensions(){
    var choice1 = prompt ("Radius of a circle: R , Height and Width of a Rectangle: HW, size of square: S", 1)
    var radius = 0;
    var Height = 0;
    var Width = 0;
    var size = 0;
    var pi = 3.14;

    switch(choice1){
    case 'R': 
    radius = prompt("Enter Radius:", 1); 
    alert(pi*radius**2); 
    break;

    case 'HW': 
    Height = prompt("Enter Height:", 1); 
    Width = prompt("Enter Width:", 1); 
    alert(Height*Width);
    break;

    case 'S': 
    size = prompt("Enter size of square:", 1) ; 
    alert(size**2); 
    break;

    }




}



function math2(){

    var choice = prompt("choose number by order of documented mathmatical expressions", 1);
   
    
    switch(choice){
        case '1': alert("" + 1 + 0); break; 
        case '2': alert(""-1 + 0); break;
        case '3': alert(true + false); break;
        case '4': alert(6 / "3"); break;
        case '5': alert("2" * "3"); break;
        case '6': alert(4 + 5 + "px"); break;
        case '7':alert("$"+4+5); break;
        case '8': alert("4" - 2); break;
        case '9': alert("4px" - 2); break;
        case '10': alert(7 / 0); break;
        case '11': alert("-9\n" + 5); break;
        case '12': alert(null + 1); break;
        case '13': alert(undefined + 1); break;


    }

}

function student(){
    
    let login = prompt("Who are you? typers accepted: student, faculty", 1);



    login == 'student' ? alert('Hi'):((login == 'faculty') ? alert('greetings'):((login == '') ? alert('no login') : alert('error')));

    
     
  
}

function avg(x){
    var avg1 = 0;
    
    
    
   
    for(let n of x){

        avg1 = avg1 + n;
        avg1 = parseFloat(avg1 / x.length);
        
    }

    return avg1;
}



function std(x, avg1){
    var std1 = 0;
    
    
   

    for (let n of x){
        std1 = (n - avg1)**2;
        std1 = std1/(x.length-1);
        std1 = Math.sqrt(std1);
       
    }

    

    return std1;
}

function Display(){

    var x = [1,4,3,5,2,6,7];
    var avg2 = 0;
    var std2 = 0;

    


    avg2 = avg(x);

    std2 = std(x, avg2);

    alert("The average is: " + avg2)
    alert("The standard Deviation is: "+ std2)
 
}




   




