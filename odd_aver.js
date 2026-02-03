/** @format */

function oddAvg(numbers) {

   let avg =0, cnt = 0;

    for(const num of numbers){
        if(num %2 != 0){
            avg += num;
            cnt++;

        }
    }
    let result = avg/cnt;
    return result;

}

const num = [42, 13, 58, 65, 81, 96, 7];
const res = oddAvg(num);

console.log(res);
