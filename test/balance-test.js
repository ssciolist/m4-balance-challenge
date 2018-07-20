const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;

const balance = require('../lib/balance')

describe('balance', function() {
  it('it returns true if ()', function() {
    let string = '()';
    expect(balance(string)).to.eql(true)
  });
  it('it returns true if (())', function() {
    let string = '(())';
    expect(balance(string)).to.eql(true)
  });
  it('it returns true if [](){}', function() {
    let string = '[](){}';
    expect(balance(string)).to.eql(true)
  });
  it('it returns true if var greeting = { sayHello: hello() }', function() {
    let string = 'var greeting = { sayHello: hello() }';
    expect(balance(string)).to.eql(true)
  });
  it('it returns false if (', function() {
    let unbalanced_string = '(';
    expect(balance(unbalanced_string)).to.eql(false)
  })
  it('it returns false if )(', function() {
    let unbalanced_string = ')(';
    expect(balance(unbalanced_string)).to.eql(false)
  })
  it('it returns false if [(]{)}', function() {
    let unbalanced_string = '[(]{)}';
    expect(balance(unbalanced_string)).to.eql(false)
  })
  it('it returns false if ][)(}{', function() {
    let unbalanced_string = '][)(}{';
    expect(balance(unbalanced_string)).to.eql(false)
  })
  it('it returns false if var sayGoodbye = function() { goodbye();', function() {
    let unbalanced_string = 'var sayGoodbye = function() { goodbye();';
    expect(balance(unbalanced_string)).to.eql(false)
  })
})
