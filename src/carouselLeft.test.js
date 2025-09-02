// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

import { simulateScroll } from "./carousel-Left";

describe("Simulate scrolling to right", () => {
  it('should handle scroll right for ["A", "B", "C"]', () => {
    expect(simulateScroll(["A", "B", "C"], 0)).toEqual({ internalIndex: 1, needsJump: false });
    expect(simulateScroll(["A", "B", "C"], 3)).toEqual({ internalIndex: 4, needsJump: true, jumpToIndex: 1 });
    expect(simulateScroll(["A", "B", "C"], 4)).toEqual({ internalIndex: 2, needsJump: false });
    expect(simulateScroll(["A", "B", "C"], 5)).toEqual({ internalIndex: 3, needsJump: false });
    expect(simulateScroll(["A", "B", "C"], 6)).toEqual({ internalIndex: 4, needsJump: true, jumpToIndex: 1 });
  });

  it('should handle scroll right for ["A", "B", "C", "D"]', () => {
    expect(simulateScroll(["A", "B", "C", "D"], 0)).toEqual({ internalIndex: 1, needsJump: false });
    expect(simulateScroll(["A", "B", "C", "D"], 4)).toEqual({ internalIndex: 5, needsJump: true, jumpToIndex: 1 });
    expect(simulateScroll(["A", "B", "C", "D"], 5)).toEqual({ internalIndex: 2, needsJump: false });
    expect(simulateScroll(["A", "B", "C", "D"], 8)).toEqual({ internalIndex: 5, needsJump: true, jumpToIndex: 1 });
  });
});
