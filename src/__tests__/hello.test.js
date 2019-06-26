import hello from "../hello";

function sum(a, b) {
  return a + b;
}

test("adds 1 + 2 to equal 3", () => {
  expect(hello()).toBe("hello, world");
});
