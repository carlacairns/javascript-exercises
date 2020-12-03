    const removeFromArray = function() {
        let array = Array.from(arguments)
        let remove = [];

        array = array[0]; // array separated from removal data
        for (let i = 0; i < arguments.length; i++){ //pushing all arguments into removal
            remove.push(arguments[i]);
        }
        remove.splice(0,1); // removing array portion
        remove.sort(); 
        // must be added because index may become obolete as we splice out the index in the array
        //see test 2
        
        for (let i = 0; i < array.length; i++){
            for (let j = 0; j < remove.length; j++){
                if (array[i] === remove[j]){
                    
                    array.splice(i, 1); // removes unwanted data
                }
            }
        }
        
    
        return array;
        
    }



module.exports = removeFromArray
