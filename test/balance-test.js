const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;

const balance = require('../lib/balance')

describe('balance', function() {
  it('it returns true if the function is balanced', function() {
    let string = '(())';
    expect(balance(string)).to.eql(true)
  });
  it('it returns false if the function is balanced', function() {
    let unbalanced_string = '(';
    expect(balance(unbalanced_string)).to.eql(false)
  })
})
