// Write your solution in this file!
let driver = {}

function updateDriverWithKeyAndValue(obj, key, value) {
    return Object.assign({}, obj, { [key]: value })
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
    obj[key] = value // changes value at key
    return obj
}

// Non-destructive way of removing a key from obj.
function deleteFromDriverByKey(obj, key) { // key is "name"
    let clone = Object.assign({}, obj) // clones into an empty object from obj
    delete clone[key] // has to be in brackets cuz it looks inside Obj for an attr named "key"
    return clone
}

function destructivelyDeleteFromDriverByKey(obj, key) {
    delete obj[key]
    return obj
}