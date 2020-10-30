// Write your solution in this file!
let driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign({}, driver, { [key]: value });
  }

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign(driver, { [key]: value });
}

function deleteFromDriverByKey(driver, key) {
    let tempObject = Object.assign({}, driver)
    delete tempObject[key];
    return tempObject
}

function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key]
    return driver
}

