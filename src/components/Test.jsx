import React from 'react'
import jalaali from 'jalaali-js'

const convertToPersianDate = (gregorianDate) => {
  const dateObj = new Date(gregorianDate)
  const jDate = jalaali.toJalaali(dateObj.getFullYear(), dateObj.getMonth() + 1, dateObj.getDate())

  const weekDays = ['یک‌شنبه', 'دو‌شنبه', 'سه‌شنبه', 'چهار‌شنبه', 'پنج‌شنبه', 'جمعه', 'شنبه']
  const dayOfWeek = weekDays[dateObj.getDay()]

  return `${dayOfWeek}`
}

function Test() {
  const date = '2025-05-20'
  
  return (
    <div>
      <h2>تاریخ میلادی: {date}</h2>
      <h3>تاریخ فارسی: {convertToPersianDate(date)}</h3>
    </div>
  )
}

export default Test