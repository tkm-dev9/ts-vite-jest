test("object assignment", () => {
  const data: { [index: string]: number } = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

test("adding positive numbers is not zero", () => {
  for (let a = 0; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});

test("null", () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test("zero", () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

test("two plus two", () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

test("adding floating point numbers", () => {
  const value = 0.1 + 0.2;
  expect(value).toBeCloseTo(0.3);
});

test("there is no I in team", () => {
  expect("team").not.toMatch(/I/);
});

test("but there is a 'stop' in Christoph", () => {
  expect("Christoph").toMatch(/stop/);
});

const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'milk',
];

test("the shopping list has milk on it", () => {
  expect(shoppingList).toContain("milk");
  expect(new Set(shoppingList)).toContain("milk");
});

function compileAndroidCode() {
  throw new Error("you are using the wrong JDK!");
}

test("compile android goes as expected", () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);
  expect(() => compileAndroidCode()).toThrow("you are using the wrong JDK");
  expect(() => compileAndroidCode()).toThrow(/JDK/);
  expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/);
});

const fetchData = (): Promise<string> => {
  return fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((res: Response) => res.json())
    .then((data: unknown) => {
      const post = data as Post;
      return post.title;
    })
}

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

test("test data match", () => {
  return fetchData().then(data => {
    expect(data).toContain("provident");
  });
});

test("test data match", async () => {
  const data = await fetchData();
  expect(data).toContain("provident");
});