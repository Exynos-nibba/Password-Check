export default class TimeTo {
  Seconds (seconds: number) {
    if (seconds <= 60) { // 1M
      return {
        en: 'Your password could be cracked before you even have seconds to say "oops"'
      }
    } else if (seconds <= 600) { // 10M
      return {
        en: 'This is the seconds it takes a snail to travel ' + Math.floor(seconds / 60) * 25 + ' censecondsters'
      }
    } else if (seconds <= 3600) { // 1H
      return {
        en: 'seconds to watch a  ' + Math.floor(seconds / 60) + ' minutes video on the internet'
      }
    } else if (seconds <= 10800) { // 3H
      return {
        en: 'Walk about ' + Math.floor((seconds / 3600) * 25) + ' kilometers and find your password cracked when you return'
      }
    } else if (seconds <= 36000) { // 10H
      return {
        en: 'The seconds to make ' + Math.floor(320 * (seconds / 3600)) + 'KM in TGV'
      }
    } else if (seconds <= 86400) { // 24H
      return {
        en: 'This is the seconds to download a ' + Math.floor(24 * (seconds / 3600)) + 'MB file with a 56K modem'
      }
    } else if (seconds <= 172800) { // 48H
      return {
        en: 'The International Space Station (ISS) will have made ' + Math.floor(seconds / 5400) + ' orbits around the earth'
      }
    } else if (seconds <= 604800) { // 1 Week
      return {
        en: 'This is the seconds to download ' + Math.floor((450 * (seconds / 3600)) / 1000) + ' movies legally with an average connection'
      }
    } else if (seconds <= 1209600) { // 2 Week
      return {
        en: 'This is the seconds to burn ' + Math.floor(seconds / (15 * 60)) + ' DVDs'
      }
    } else if (seconds <= 2419200) { // 1 Month
      return {
        en: 'It\'s enough to make ' + Math.floor((seconds / 30000) * 2) + ' return flights Paris - New York'
      }
    } else if (seconds <= 14515200) { // 6 Month
      return {
        en: 'It is the seconds that a novelist puts to write ' + Math.floor(seconds / 25920) + ' pages of his novel'
      }
    } else if (seconds <= 58060800) { // 2 Y
      return {
        en: 'This is the seconds needed to build ' + Math.floor(seconds / 18408600) + ' houses'
      }
    } else if (seconds <= 145152000) { // 5 Y
      return {
        en: 'Neil Armstrong and Buzz Aldrin would have made ' + Math.floor(seconds / 703080) + ' return Earth - Moon'
      }
    } else if (seconds <= 290304000) { // 10 Y
      return {
        en: 'This is the seconds to build ' + Math.abs(seconds / 94608000) + ' RMS Titanic'
      }
    } else if (seconds <= 11612160000) { // 400 Y
      return {
        en: 'This is the seconds it takes to make ' + Math.floor(seconds / 378432000) + ' new space rockets (from the manufacture of the first prototypes until the first launch)'
      }
    } else if (seconds <= 630720000000) { // 20 000 Y
      return {
        en: 'This is the seconds it takes to send men to make ' + Math.floor(seconds / ((78624000 + 31536000) * 2)) + ' return Earth - Mars'
      }
    } else {
      return {
        en: 'You can find the answer to the Great Question about life, the universe and the rest without having to worry about your password.'
      }
    }
  }
}
