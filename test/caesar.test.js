//Write your tests here!
const { caesar } = require("../src/caesar");
const expect = require("chai").expect;

describe("if caesar() input is one word, it", () => {
  it("should return encoded message if shift is positive", () => {
    const input = "thinkful";
    const shift = 3;
    const expected = "wklqnixo";
    const actual = caesar(input, shift);
    expect(actual).to.be.equal(expected);
  });

  it("should return encoded message if shift is negative", () => {
    const input = "thinkful";
    const shift = -3;
    const expected = "qefkhcri";
    const actual = caesar(input, shift);
    expect(actual).to.be.equal(expected);
  });

  it("should decode message if encode = false", () => {
    const input = "wklqnixo";
    const shift = 3;
    const encode = false;
    const expected = "thinkful";
    const actual = caesar(input, shift, encode); // it passes
    expect(actual).to.be.equal(expected);
  });
});

describe("if caesar() input constains more than one word", () => {
  it("should return encoded message maintaining spacing", () => {
    const input = "this is a secret message";
    const shift = 8;
    const expected = "bpqa qa i amkzmb umaaiom";
    const actual = caesar(input, shift);
    expect(actual).to.be.equal(expected);
  });

  it("should return encoded message maintaining special characters", () => {
    const input = "This is a secret message!";
    const shift = 8;
    const expected = "bpqa qa i amkzmb umaaiom!";
    const actual = caesar(input, shift);
    expect(actual).to.be.equal(expected);
  });

  it("should decode message if encode = false", () => {
    const input = "BPQA qa I amkzmb umaaiom!";
    const shift = 8;
    const encode = false;
    const expected = "this is a secret message!";
    const actual = caesar(input, shift, encode);
    expect(actual).to.be.equal(expected);
  });
});

describe("caesar() checks for parameter errors", () => {
  it("should return 'false' if shift is equal to 0 or undefined", () => {
    const input = "thinkful";
    const shift = undefined || 0;
    const actual = caesar(input, shift);
    expect(actual).to.be.false;
  });

  it("should return 'false' if shift < -25", () => {
    const input = "thinkful";
    const shift = -26;
    const actual = caesar(input, shift);
    expect(actual).to.be.false;
  });

  it("should return 'false' if shift > 25", () => {
    const input = "thinkful";
    const shift = 26;
    const actual = caesar(input, shift);
    expect(actual).to.be.false;
  });
});
