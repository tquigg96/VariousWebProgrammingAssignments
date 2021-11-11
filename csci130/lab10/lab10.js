

var filledArray; // ik global variables ew

function populateArray(number){
    let filledArray = Array.from({length: number}, () => Math.floor(Math.random() * 40));
    
    var display = document.getElementById("display");
    
    for(var i = 0; i < filledArray.length; i++){
        var tag = document.createElement("p");
        display.appendChild(tag);
        tag.innerHTML=filledArray[i];
    }

    return filledArray;
}

function packageSend(array){
    filledArray_JSON = [];
    newHttp = new XMLHttpRequest();
    newHttp.open('POST','page1.php' + array);
    newHttp.onreadystatechange = function() {
        if(this.readystate == 4 && this.status == 200){
           filledArray_JSON = JSON.stringify(filledArray);
        }; //what does this do?
    }
    newHttp.send();

}
