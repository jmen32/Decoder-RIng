// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius() encoding", () => {
  it("should encode the input by swapping letters with number pairs", () => {
    const input = "thinkful";
    const expected = "4432423352125413";
    const actual = polybius(input);
    expect(actual).to.be.equal(expected);
  });

  it("should encode the input while maintaining input spaces", () => {
    const input = "welcome to thinkful";
    const expected = "25511331432351 4443 4432423352125413";
    const actual = polybius(input);
    expect(actual).to.be.equal(expected);
  });

  it("should encode the input ignoring uppercase letters", () => {
    const input = "ThInKFuL";
    const expected = "4432423352125413";
    const actual = polybius(input);
    expect(actual).to.be.equal(expected);
  });
});

describe("polybius() decoding", () => {
  it("should decode input from number pairs for letters if encode === false", () => {
    const input = "3251131343";
    const expected = "hello";
    const actual = polybius(input, false);
    expect(actual).to.be.equal(expected);
  });

  it("should decode '42' into '(i/j)'", () => {
    const input = "4432423352125413";
    const expected = "th(i/j)nkful";
    const actual = polybius(input, false);
    expect(actual).to.be.equal(expected);
  });

  it("should return false if input length is odd", () => {
    const input = "123";
    const actual = polybius(input, false);
    expect(actual).to.be.false;
  });
});
