// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

var singleNumber = function (nums) {
    let map = {};
    map[nums[0]] = 0
    for (let i = 1; i < nums.length; i++) {   
        let item = nums[i];
        if(item in map) {
            delete map[nums[i]];
        } else {
            map[nums[i]] = i;
        }
        console.log('map2', map)
    }
    return Object.keys(map);
};