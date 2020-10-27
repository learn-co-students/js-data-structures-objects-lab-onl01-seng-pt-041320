const driver = {};


function updateDriverWithKeyAndValue(obj, key, value) {
    return Object.assign({}, obj, {[key]: value});
};

const newDriver = updateDriverWithKeyAndValue(driver, key, value);

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}

const secondDriver = destructivelyUpdateDriverWithKeyAndValue(driver, key, value);


function deleteFromDriverByKey(driver, key) {
    let deleteDriver = updateDriverWithKeyAndValue(driver, key);
    delete deleteDriver.key
    return deleteDriver
};

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key]
    return driver
};
 
