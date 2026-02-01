


function isLeapYear(year){
    if(year%4 === 0){
        return true;
    }
    else{
        return false;
    }

}

const leap = isLeapYear(2026);

console.log(leap);