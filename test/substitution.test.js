// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution() encoding", () => {
  it("should return encrypted message with alphabet provided", () => {
    const input = "thinkful";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const expected = "jrufscpw";
    const actual = substitution(input, alphabet);
    expect(actual).to.be.equal(expected);
  });

  it("should maintain spaces from input and return lowercase() message", () => {
    const input = "hello World";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const expected = "rmwwl ilhwq";
    const actual = substitution(input, alphabet);
    expect(actual).to.be.equal(expected);
  });

  it("should return special characters if appropriate", () => {
    const input = "hello";
    const alphabet = "xoyqmcg#uks$aflnthdjpzibev";
    const expected = "#m$$l";
    const actual = substitution(input, alphabet);
    expect(actual).to.be.equal(expected);
  });
});

describe("substitution() decoding", () => {
  it("should return decoded message if encode === false", () => {
    const input = "rmwwl";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const encode = false;
    const expected = "hello";
    const actual = substitution(input, alphabet, encode);
    expect(actual).to.be.equal(expected);
  });

  it("should maintain spaces from input and return lowercase() message", () => {
    const input = "RmWwL";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const encode = false;
    const expected = "hello";
    const actual = substitution(input, alphabet, encode);
    expect(actual).to.be.equal(expected);
  });

  it("should accept special characters in input if appropriate", () => {
    const input = "rm$$l";
    const alphabet = "xoyqmcgruks$aflnthdjpzibev";
    const encode = false;
    const expected = "hello";
    const actual = substitution(input, alphabet, encode);
    expect(actual).to.be.equal(expected);
  });
});

describe("substitution() errors", () => {
  it("should return false if alphabet length < 26", () => {
    const input = "abc";
    const alphabet = "abcdef";
    const actual = substitution(input, alphabet);
    expect(actual).to.be.false;
  });

  it("should return false if alphabet length > 26", () => {
    const input = "hello";
    const alphabet = "xoyqmcgruks$aflnthdjpzibev$";
    const actual = substitution(input, alphabet);
    expect(actual).to.be.false;
  });

  it("should return false if alphabet contains repeating characters", () => {
    const input = "hello";
    const alphabet = "ababababababababababababab";
    const actual = substitution(input, alphabet);
    expect(actual).to.be.false;
  });
});
