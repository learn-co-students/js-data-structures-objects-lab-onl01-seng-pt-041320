// Write your solution in this file!
//function nondestructivelyUpdateObject(obj, key, value) {
//    const newObj = {...obj};
//
//    newObj[key] = value;
//
//    return newObj;
//
//};
//
//const var = nondestructivelyUpdateObject(object, var, var);
//
//object.attribute;
//
//difObject.attribute;
//
//
//
////OR
//
//Object.assign(initialObject, additionalObject, //additionalObject, ...);

const driver = {};


function updateDriverWithKeyAndValue(driver, key, value){
    return Object.assign({}, driver, {[key]: value});
};

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver
};

function deleteFromDriverByKey(driver, key) {
    const newObj = Object.assign({}, driver);
    delete newObj[key];
    return newObj;
};

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];

    return driver;
};