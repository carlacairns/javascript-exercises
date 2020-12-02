const reverseString = function(string) {
    let reverseString = '';
    let array = [];
    let reverseArray = [];
    let finalString =  '';
    if (string.length == 1 || string.length == 0){
        return string;
    }
    for (let i = 0; i < string.length; i++) { 
        array[i] = string.charAt(i);  // making string into array
    } 
    
    reverseArray = array.reverse();
    reverseString = reverseArray.toString();
    
   loop: for (let i = 0; i < reverseString.length; i++){
        if (reverseString.charAt(i) == ','){
            continue loop;
        }
        else {
            finalString += reverseString.charAt(i);
        }
    }

    return finalString;

}

module.exports = reverseString
