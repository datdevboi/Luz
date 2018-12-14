import { add } from "../add";
import { _ } from "..";

describe("add", () => {
  it("expect add to work with or without placeholders", () => {
    const result = add();
    expect(add(1, 2)).toBe(3);
    expect(add(1)(2)).toBe(3);
    expect(add(1, 2)).toBe(3);
    expect(add(1, _)(2)).toBe(3);
    expect(add(_, 1)(2)).toBe(3);
  });
});
