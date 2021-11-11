<?php 


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