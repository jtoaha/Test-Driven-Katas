const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });

  it('Returns original string if no column number is provided', () => {
    expect(wrap("Hello World!")).to.equal("Hello World!");
  });

  it('Returns original string if column number is greater than original string length', () => {

    expect(wrap("tenth", 6)).to.equal("tenth");

  });

  it('Returns wrapped string', () => {

    expect(wrap("the cat is brown", 4)).to.equal("the\ncat\nis\nbrown");

  });




});
