function isIsogram(str){

    const arr = str.split('');
    let n = 0;
    for (let i = 0; i < arr.length; i++) {

        for (let j = i+1; j < arr.length; j++) {
            if (arr[i]===arr[j]) {
                n++;
            }   
        }
    }
    if (n>=1) {
        return false;
    }else{
        return true;
    }

}

console.log(isIsogram("majfrzhjkg"));
