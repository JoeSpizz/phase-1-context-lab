/* Your Code Here */
function createEmployeeRecord(array){
    let [firstName, familyName, title, payPerHour] = array;
    return {
        firstName,
        familyName,
        title,
        payPerHour,
        timeInEvents: [],
        timeOutEvents: [],
    }
}
function createEmployeeRecords(arrayNest){
   return arrayNest.map(e => createEmployeeRecord(e))
}

function createTimeInEvent(punch){
    let [date, hour] = punch.split(" ")
    let eventObj = {
        type: "TimeIn",
        hour: parseInt(hour,10),
        date
    }
    this.timeInEvents.push(eventObj)
   return this
    
}

function createTimeOutEvent(punch){
    let [date, hour] = punch.split(" ")
    let eventObj = {
        type: "TimeOut",
        hour: parseInt(hour,10),
        date
    }
    this.timeOutEvents.push(eventObj)
   return this
}

function hoursWorkedOnDate (date) {
   const timeIn = this.timeInEvents.find(e => e.date===date)
   const timeOut = this.timeOutEvents.find(e=>e.date===date)
  
   return (timeOut.hour-timeIn.hour)/100
}

function wagesEarnedOnDate (date){
    const hoursWorked = hoursWorkedOnDate.call(this, date)
    return this.payPerHour * hoursWorked 
   }
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function findEmployeeByFirstName(array, name){
    return array.find(emp=> emp.firstName === name)

}

function calculatePayroll(arrayOfEmps){
    let sumOfPay = arrayOfEmps.map(e=> allWagesFor.call(e)).reduce((a,b)=> a+b, 0)
        return sumOfPay
    }