const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, { [key]: value })
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign(driver, { [key]: value })
}

function deleteFromDriverByKey(driver, key) {
  let deleteKey = Object.assign({}, driver)
  delete deleteKey[key]
  return deleteKey
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key]
  return driver
}