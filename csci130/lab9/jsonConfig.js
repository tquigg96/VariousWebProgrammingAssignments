/*<?php 

****To display contents of php since it isn't working properly*******


class stuff {
    protected int $employeeID;
    protected int $position;
    protected int $ratings;

    public function __construct(int $employeeID, int $position, int $ratings) {
        $this->$employeeID = $employeeID;
        $this->$position = $position;
        $this -> $ratings = $ratings;
    }
    
 

}

$coolStuff = new stuff(1,2,3);
$newStuff = new stuff(4,5,6);
$someGoodStuff = new stuff(7,8,9);
$someOtherStuff = new stuff(10,11,12);
$someReallyGoodStuff = new stuff(13,14,15);



$Stuffies = [$coolStuff, $newStuff, $someGoodStuff, $someOtherStuff, $someReallyGoodStuff];
 $Stuffies = json_encode($Stuffies);

 echo $Stuffies;





?>
*/


function next(data,pageCounter) {
    
      htmlString += "<p>" + data[pageCounter];
      stuffContainer.insertAdjacentElement(htmlString);

      pageCounter++;

      return pageCounter;
  

}

function prev(data,pageCounter) {
 
     htmlString += "<p>" + data[pageCounter];
     stuffContainer.insertAdjacentElement(htmlString);

     pageCounter--;

     return pageCounter;
 

}



var pageCounter = 0; // need to add a getter and setter
const stuffContainer = document.getElementById("stuff");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', "test.php" ,true);


next.addEventListener("click", function(){

     // problem lies with the document. Figuring out

    ourRequest.onreadystatechange = function() {
        if(this.readystate == 4 && this.status == 200){
            var ourData = JSON.parse(ourRequest.responseText);
            next(ourData, pageCounter);
        }
    };


    ourRequest.onerror = function() {
        console.log("Connection error");
      };

      
      ourRequest.send();

    
 });
 

 prev.addEventListener("click",function(){

      

     ourRequest.onreadystatechange = function(){
    if(this.readystate == 4 && this.status == 200){
            var myData = JSON.parse(newRequest.responseText);
            prev(ouData, pageCounter);
        }
     };

     ourRequest.oneerror = function(){
         console.log("Connection error");
     };

     ourRequest.send();

     
 })



 //from experience with both MFAP and MERN I have noticed it is easier with MFAP but it is python driven. MERN does schemas and makes data processing so much easier.

 


