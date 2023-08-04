/**
 * @param {number[]} nums
 * @return {number}
 */
export function singleNumber(nums) {
    let transformed = [];

    nums.forEach(it => {

        if (nums.lastIndexOf(it) == nums.indexOf(it)) {
            transformed.push(it);
        }

    });
   
    return transformed[0]
}

singleNumber([4,1,2,1,2]);
