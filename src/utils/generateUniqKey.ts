import {v4 as uuidv4} from 'uuid';

export const generateUniqKey = () => {
    const characters = uuidv4() + 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ0123456789'
    let result = ''
    for (let i = 0; i < 20; i++) {
      let randomIndex = Math.floor(Math.random() * characters.length)
      characters.charAt(randomIndex) != '-' ? result += characters.charAt(randomIndex) : i--
      
    }
    return result
  }