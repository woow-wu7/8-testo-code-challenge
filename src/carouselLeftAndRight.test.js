// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

import { simulateScroll2 } from "./carousel-LeftAndRight";

describe("simulateScroll2 - left direction", () => {
  it('should handle ["A", "B", "C"]', () => {
    expect(simulateScroll2(["A", "B", "C"], 0, "left")).toEqual({ internalIndex: 1, needsJump: false });
    expect(simulateScroll2(["A", "B", "C"], 1, "left")).toEqual({ internalIndex: 0, needsJump: true, jumpToIndex: 3 });
    expect(simulateScroll2(["A", "B", "C"], 2, "left")).toEqual({ internalIndex: 2, needsJump: false });
    expect(simulateScroll2(["A", "B", "C"], 3, "left")).toEqual({ internalIndex: 1, needsJump: false });
    expect(simulateScroll2(["A", "B", "C"], 4, "left")).toEqual({ internalIndex: 0, needsJump: true, jumpToIndex: 3 });
    expect(simulateScroll2(["A", "B", "C"], 5, "left")).toEqual({ internalIndex: 2, needsJump: false });
    expect(simulateScroll2(["A", "B", "C"], 6, "left")).toEqual({ internalIndex: 1, needsJump: false });
    expect(simulateScroll2(["A", "B", "C"], 7, "left")).toEqual({ internalIndex: 0, needsJump: true, jumpToIndex: 3 });
  });

  it('should handle ["A", "B", "C", "D"]', () => {
    expect(simulateScroll2(["A", "B", "C", "D"], 0, "left")).toEqual({ internalIndex: 1, needsJump: false });
    expect(simulateScroll2(["A", "B", "C", "D"], 1, "left")).toEqual({
      internalIndex: 0,
      needsJump: true,
      jumpToIndex: 4,
    });
    expect(simulateScroll2(["A", "B", "C", "D"], 2, "left")).toEqual({ internalIndex: 3, needsJump: false });
    expect(simulateScroll2(["A", "B", "C", "D"], 3, "left")).toEqual({ internalIndex: 2, needsJump: false });
    expect(simulateScroll2(["A", "B", "C", "D"], 4, "left")).toEqual({ internalIndex: 1, needsJump: false });
    expect(simulateScroll2(["A", "B", "C", "D"], 5, "left")).toEqual({
      internalIndex: 0,
      needsJump: true,
      jumpToIndex: 4,
    });
    expect(simulateScroll2(["A", "B", "C", "D"], 6, "left")).toEqual({ internalIndex: 3, needsJump: false });
    expect(simulateScroll2(["A", "B", "C", "D"], 7, "left")).toEqual({ internalIndex: 2, needsJump: false });
  });
});

describe("simulateScroll2 - right direction", () => {
  it('should handle ["A", "B", "C"]', () => {
    expect(simulateScroll2(["A", "B", "C"], 0, "right")).toEqual({ internalIndex: 1, needsJump: false });
    expect(simulateScroll2(["A", "B", "C"], 3, "right")).toEqual({ internalIndex: 4, needsJump: true, jumpToIndex: 1 });
    expect(simulateScroll2(["A", "B", "C"], 4, "right")).toEqual({ internalIndex: 2, needsJump: false });
    expect(simulateScroll2(["A", "B", "C"], 5, "right")).toEqual({ internalIndex: 3, needsJump: false });
    expect(simulateScroll2(["A", "B", "C"], 6, "right")).toEqual({ internalIndex: 4, needsJump: true, jumpToIndex: 1 });
  });

  it('should handle ["A", "B", "C", "D"]', () => {
    expect(simulateScroll2(["A", "B", "C", "D"], 0, "right")).toEqual({ internalIndex: 1, needsJump: false });
    expect(simulateScroll2(["A", "B", "C", "D"], 4, "right")).toEqual({
      internalIndex: 5,
      needsJump: true,
      jumpToIndex: 1,
    });
    expect(simulateScroll2(["A", "B", "C", "D"], 5, "right")).toEqual({ internalIndex: 2, needsJump: false });
    expect(simulateScroll2(["A", "B", "C", "D"], 8, "right")).toEqual({
      internalIndex: 5,
      needsJump: true,
      jumpToIndex: 1,
    });
  });
});
