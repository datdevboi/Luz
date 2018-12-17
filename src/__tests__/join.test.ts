import { join } from "../join";

describe("join", () => {
  it("joining array should work", () => {
    var elements = ["Fire", "Wind", "Rain"];
    const joinByDash = join("-");
    const joinBySpace = join(" ");
    const regularJoin = join();

    expect(joinByDash(elements)).toEqual("Fire-Wind-Rain");
    expect(joinBySpace(elements)).toEqual("Fire Wind Rain");
    expect(regularJoin(elements)).toEqual("Fire,Wind,Rain");
  });
});
