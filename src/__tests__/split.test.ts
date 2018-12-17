import { split } from "../split";

describe("split", () => {
  it("split", () => {
    var str = "The quick brown fox jumped over the lazy dog.";

    var words = split(" ")(str);
    expect(words[3]).toBe("fox");

    var chars = split("")(str);
    expect(chars[8]).toBe("k");

    var strCopy = split(null)(str);
    expect(strCopy).toEqual(["The quick brown fox jumped over the lazy dog."]);
  });
});
