// Code your solution in this file!
function distanceFromHqInBlocks(valueBlock) {
    if (valueBlock > 42) {
        return valueBlock - 42;
    } else {
        return 42 - valueBlock;
    }
};

function distanceFromHqInFeet(valueBlock) {
    return distanceFromHqInBlocks(valueBlock) * 264;
};

function distanceTravelledInFeet(valueBlock) {
    return distanceFromHqInFeet(valueBlock) * 2112;
}