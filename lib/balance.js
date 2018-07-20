const paren_bal = (string) => {
  let first_paren_index = string.indexOf('(', 0)
  if (string.includes(")", first_paren_index+1)) {
    return true
} else {
    return false
}
}

const bracket_bal = (string) => {
  if (string.includes("[", 0)) {
    let first_bracket_index = string.indexOf('[', 0)
    if (string.includes("]", first_bracket_index+1)) {
      return true
    } else {
      return false
    }
  } else {
    return true
  }
}

const curly_bal = (string) => {
  if (string.includes("{", 0)) {
    let first_curly_index = string.indexOf('{', 0)
    if (string.includes("}", first_curly_index+1)) {
      return true
    } else {
      return false
    }
  } else {
    return true
  }
}

const balanced = (strin) => {
  if (paren_bal(strin) && curly_bal(strin) && bracket_bal(strin)) {
      return true
  } else {
      return false
  }
}

module.exports = balanced
