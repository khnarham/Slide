import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const getMonths = (month: number) =>{
  const months: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

if (month < 1 || month > 12) {
  return 'Invalid month number. Please enter a number between 1 and 12.'
}

return months[month - 1];
}



export const duplicateValidation = (arr: string[], el: string) =>{
    if(!arr.find((state) => state ===el)){
        arr.push(el)
        return arr
    }else {
      arr = arr.filter((t) => t !== el)
      return arr
    }
}