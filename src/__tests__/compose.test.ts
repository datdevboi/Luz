import { add } from "../add";
import { compose } from "../compose";

describe("compose", () => {
  it("compose works", () => {
    const add1 = add(1);

    expect(
      compose(
        add1,
        add1,
        add1
      )(1)
    ).toEqual(4);
  });
});
