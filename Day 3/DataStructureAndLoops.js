//#---Task 1: Speed Run !!
//Array Sum Function : 
function sum(arr=[]) {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        res += arr[i];  
    }
    return res;
}

console.log("The sum array is : "+sum([1,3,5]));
//Count Even Function :
function countEven(arr=[]) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]%2==0) {
            count++;
        }
        
    }
    return count;
}

console.log("The count of Even number is : "+countEven([1,2,4,5,7,8]));
//Double Number Function :
function doubleNumbers(arr=[]) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr[i]=arr[i]*2;
    }

    return newArr;
  
}

let array = [2,4,5];
console.log(array);
console.log(doubleNumbers(array));

//#--Task 2 : The pair of socks

function SocksPair(arr = []) {
    //let sortArr = BubbleSort(arr);
    let pair = 0;

    for (let i = 0; i < arr.length; i++) {
        let count = 1;  // Start count at 1 for the current sock

        // Check if the sock has already been considered in a pair
        if (arr[i] !== -1) {
            // Count the number of matching socks
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] === arr[j]) {
                    count++;
                    arr[j] = -1;  // Mark the matching sock as considered
                }
            }

            // Update pairs based on the count
            pair += parseInt(count / 2);
        }
    }

    return pair;
}

console.log("The number of pair socks is : " + SocksPair([1,4,1,2,1,4,6]));

//#--Group Challeng :
//Bubble Sort :
function BubbleSort(arr=[]) {
    
    for (let j = 0; j < arr.length; j++) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i]>arr[i+1]) {
                let p=arr[i];
                arr[i]=arr[i+1];
                arr[i+1]=p;
            }
        }
        
    }
 
    return arr;
} 

console.log("Bubble Sort => { "+BubbleSort([1,55,7,1,4])+" }");

//Selection Sort :
function SelectionSort(arr=[]) {
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j]<arr[i]) {
                let temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
        
    }
    return arr;
}

console.log("Selection Sort => { "+SelectionSort([1,55,7,1,4])+" }");

//Insertion Sort :
function InsertionSort(arr=[]) {
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        let j = i-1;
        while (j>=0 && arr[j]>current) {
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]=current;
    }
    return arr;
}

console.log("Insertion Sort => { "+InsertionSort([55,1,4])+" }");

//Linear Search :
function linearSearch(arr=[],target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]===target) {
            return "We Find Him ";
        }
                
    }
    return "Not Found !!";
}

console.log(linearSearch([3,6,8,0],0));

function BinarySearch(arr = [], target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = parseInt((left + right) / 2);

        if (arr[mid] === target) {
            return "We Find Him";
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return "Not Found !!";
}

console.log(BinarySearch([1,2,3,4,5],5));

