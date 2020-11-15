// Write your solution in this file!
let driver = {name: 'James',
address: 'address'
}

function updateDriverWithKeyAndValue(object, key, value ) {
    return Object.assign({}, object, { [key]: value });

}

function destructivelyUpdateDriverWithKeyAndValue(object, key, value) {
    return Object.assign(object, { [key]: value })

}

function deleteFromDriverByKey(object, key) {
    let newDriver = Object.assign({}, object)
    delete newDriver[key];
    return newDriver;

}

function destructivelyDeleteFromDriverByKey(object, key) {
    delete object[key];
    return object;

}