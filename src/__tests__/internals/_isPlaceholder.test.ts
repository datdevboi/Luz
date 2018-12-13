import { _isPlaceholder } from "../../internals/_isPlaceholder";
import { _ } from "../../_";

describe("_isPlaceholder", () => {
  it("Expect _isPlaceholder to work", () => {
    expect(_isPlaceholder(_)).toBe(true);
  });
});
