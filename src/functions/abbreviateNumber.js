
const round = (number,  abbr) => {
  let rounded;
  
  switch (abbr) {
    case 'T':
      rounded = number / 1e12
      break
    case 'B':
      rounded = number / 1e9
      break
    case 'M':
      rounded = number / 1e6
      break
    case 'K':
      rounded = number / 1e3
      break
    case '':
      rounded = number
      break
  }
  
  let test = new RegExp('\\.\\d{' +  1 + ',}$')
  if (test.test(('' + rounded))) {
    rounded = rounded.toFixed(2)
  }
  
  
  return rounded + abbr
}
const abbreviate = number => {
  let abbr;
  if (number >= 1e12) {
    abbr = 'T'
  }
  else if (number >= 1e9) {
    abbr = 'B'
  }
  else if (number >= 1e6) {
    abbr = 'M'
  }
  else if (number >= 1e3) {
    abbr = 'K'
  }
  else {
    abbr = ''
  }
  return round(number, abbr)
}

export default abbreviate;

