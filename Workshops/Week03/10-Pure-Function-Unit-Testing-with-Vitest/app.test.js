// app.test.js
// import { describe } from "node:test"; <----- I have no idea how this got here it caused me no end of head scratching!

import { test, expect, describe } from "vitest";
import { findMaxValue, factorial, areArraysEqual, toTitleCase } from "./app";

describe("find max value", function () {
  test("[3, 7, 2, 8, 5]", function () {
    const result = findMaxValue([3, 7, 2, 8, 5]); // 8
    const expected = 8;
    expect(result).toBe(expected);
  });

  test("[]]", function () {
    const result = findMaxValue([]); // null
    const expected = null;
    expect(result).toBe(expected);
  });

  test("[-10,-5,-1]", function () {
    const result = findMaxValue([-10, -5, -1]); // -1
    const expected = -1;
    expect(result).toBe(expected);
  });

  test("not an array", function () {
    const result = findMaxValue("not an array"); // -1
    const expected = null;
    expect(result).toBe(expected);
  });
});

describe("factorial", function () {
  test("5", function () {
    const result = factorial(5);
    const expected = 120;
    expect(result).toBe(expected);
  });

  test("0", function () {
    const result = factorial(0);
    const expected = 1;
    expect(result).toBe(expected);
  });
  test("-3", function () {
    const result = factorial(-3);
    const expected = null;
    expect(result).toBe(expected);
  });
  test("5", function () {
    const result = factorial("5");
    const expected = null;
    expect(result).toBe(expected);
  });
});

describe("areArraysEqual", function () {
  test("[1, 2, 3], [1, 2, 3]", function () {
    const result = areArraysEqual([1, 2, 3], [1, 2, 3]);
    const expected = true;
    expect(result).toBe(expected);
  });

  test("[1, 2, 3], [3, 2, 1]", function () {
    const result = areArraysEqual([1, 2, 3], [3, 2, 1]);
    const expected = false;
    expect(result).toBe(expected);
  });

  test("[], []", function () {
    const result = areArraysEqual([], []);
    const expected = true;
    expect(result).toBe(expected);
  });

  test("[1, 2], [1, 2, 3]", function () {
    const result = areArraysEqual([1, 2], [1, 2, 3]);
    const expected = false;
    expect(result).toBe(expected);
  });
});

describe("toTitleCase", function () {
  test("hello world", function () {
    const result = toTitleCase("hello world");
    const expected = "Hello World";
    expect(result).toBe(expected);
  });

  test("", function () {
    const result = toTitleCase("JAVASCRIPT IS FUN");
    const expected = "Javascript Is Fun";
    expect(result).toBe(expected);
  });

  test("", function () {
    const result = toTitleCase("123 testing titles");
    const expected = "123 Testing Titles";
    expect(result).toBe(expected);
  });

  test("", function () {
    const result = toTitleCase(12345);
    const expected = "";
    expect(result).toBe(expected);
  });
});

/* a copypaste template for each test (defaults to fail so I don't miss filling it in)

test("", function () {
        const result = true;
        const expected = false;
        expect(result).toBe(expected);
    });

*/
