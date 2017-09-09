function happyHolidays() {
  return "Happy holidays!"
}

function happyHolidaysTo(name) {
  var name = name
  var string1 = 'Happy holidays, ${name}'
  return string1
}

function happyHolidayTo(holiday, name) {
  var name = name
  var holiday = holiday
  var string1 = 'Happy ${holiday}, ${name}'
  return string1
}

function holidayCountdown(holiday, days) {


  return 'It\'s' ${days} 'days until' ${holiday}
}
