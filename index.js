// Write your solution in this file!

let driver = new Object();

function updateDriverWithKeyAndValue(obj, key, value){
    return Object.assign({},obj, {[key]:value});
}



function destructivelyUpdateDriverWithKeyAndValue(obj,key,value){
    obj[key] = value;
    return obj;
}

// deleteFromDriverByKey() - this function should take in a driver Object
// and a key. It should delete the key/value pair for the key that was passed
// in from the driver Object. This should all not actually mutate the driver
// passed in.

function deleteFromDriverByKey(obj, key){
    let newDriver = Object.assign({}, obj);
    delete newDriver[key];
    return newDriver;
}

function destructivelyDeleteFromDriverByKey(obj, key){
    delete obj[key];
    return obj;
}
