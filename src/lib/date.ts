import {
  differenceInCalendarDays,
  eachDayOfInterval,
  endOfMonth,
  lastDayOfWeek,
  startOfMonth,
  startOfWeek,
} from 'date-fns'

export const generateCalendarMonth = (year: number, month: number) => {
  const firstDayOfMonth = startOfMonth(new Date(year, month))
  const lastDayOfMonth = endOfMonth(new Date(year, month))

  return eachDayOfInterval({
    start: startOfWeek(firstDayOfMonth, { weekStartsOn: 1 }),
    end: lastDayOfWeek(lastDayOfMonth, { weekStartsOn: 1 }),
  })
}

export interface Streak {
  start?: string
  end?: string
  length: number
}
export const areDaysConsecutive = (date1: Date, date2: Date) => {
  const diff = differenceInCalendarDays(date1, date2)

  return diff === 1 || diff === -1
}

export const calculateAllStreaks = (dates: Date[]) => {
  return dates
    .reduce((streaks: Streak[], timestamp, idx, arr) => {
      const prevTimestamp = arr[idx - 1]

      if (idx === 0 || !areDaysConsecutive(prevTimestamp, timestamp)) {
        streaks.push({
          start: timestamp.toString(),
          end: timestamp.toString(),
          length: 1,
        })
        return streaks
      }

      const lastStreak = streaks[streaks.length - 1]

      if (areDaysConsecutive(prevTimestamp, timestamp)) {
        lastStreak.length++
        lastStreak.start = timestamp.toString()
      } else {
        lastStreak.start = timestamp.toString()
        streaks.push(lastStreak)
      }

      return streaks
    }, [])
    .filter((streak) => streak.length > 1)
    .sort((a, b) => b.length - a.length)
}

export const calculateCurrentStreak = (dates: Date[]) => {
  let isStreakActive = true
  let currentStreak = 0
  let streakStart

  for (let i = 0; i < dates.length; i++) {
    if (i === 0) {
      const shouldContinue = isToday(dates[i]) || isYesterday(dates[i])

      if (shouldContinue) {
        currentStreak++
        streakStart = dates[i]
        continue
      } else {
        isStreakActive = false
        break
      }
    }

    const diffInDays = differenceInDays(dates[i - 1], dates[i])

    if (diffInDays === 1) {
      currentStreak++
      streakStart = dates[i]
    } else {
      break
    }
  }
export const getMidDay = (date: Date) => {
  const midDay = new Date(date)
  midDay.setHours(12, 0, 0, 0)

  return midDay
}
