import { reverse } from "../reverse";

describe("reverse", () => {
  it("Work with strings", () => {
    const langauge = "JavaScript";
    expect(reverse(langauge)).toEqual("tpircSavaJ");
  });
});
