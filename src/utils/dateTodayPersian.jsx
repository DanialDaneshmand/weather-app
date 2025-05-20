import React from 'react'
import jalaali from 'jalaali-js'

export const convertToPersianDate = (gregorianDate) => {
  const dateObj = new Date(gregorianDate)
  const jDate = jalaali.toJalaali(dateObj.getFullYear(), dateObj.getMonth() + 1, dateObj.getDate())

  const weekDays = ['یک‌شنبه', 'دو‌شنبه', 'سه‌شنبه', 'چهار‌شنبه', 'پنج‌شنبه', 'جمعه', 'شنبه']
  const dayOfWeek = weekDays[dateObj.getDay()]

  return `${dayOfWeek}`
}