const paren_bal = (string) => {
  let first_paren_index = string.indexOf('(', 0)
  if (string.includes(")", first_paren_index+1)) {
    return true
} else {
    return false
}
}

const balanced = (string) => {
  // pry = require('pryjs')
  // eval(pry.it)
  if (paren_bal(string)) {
      return true
  } else {
      return false
  }
}


module.exports = paren_bal
module.exports = balanced
