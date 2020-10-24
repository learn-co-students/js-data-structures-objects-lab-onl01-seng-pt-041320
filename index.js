// Write your solution in this file!

const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) 
{
    const driverCopy = { ...driver };
    
    driverCopy[key] = value;

    return driver, driverCopy;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value)
{
    driver[key] = value;

    return driver;
}

function deleteFromDriverByKey(driver, key)
{
    const driverCopy = { ...driver };

    delete driverCopy[key];

    return driverCopy;
}

function destructivelyDeleteFromDriverByKey(driver, key)
{
    delete driver[key];

    return driver;
}