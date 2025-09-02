type ScrollResult = {
  internalIndex: number;
  needsJump: boolean;
  jumpToIndex?: number;
};

/**
 * @param banners - an array of strings representing the real banners (length ≥ 2)
 * @param scroll - an integer representing how many times the user has scrolled right (0 <= scroll <= 100)
 * @returns the internal index in the augmented list, and jump behavior if on a cloned item
 */

// (1)
// Thinking
// 1.
// Special Case:
// - Description: Scroll 0 time is a 【 special case 】, so we need to handle it 【 separately 】.
// - Why: Because when the number of scroll times more than 1 loop, Both  "scroll%len" and "0%len" are equal to 0.
// 2.
// Jump:
// Question: In which situation do we need to trigger jump?
// Answer:
// - Scrolling Right: If original list is 'ABC', when we scroll right 3 times, we reach cloned "ABC[A]", so we need to trigger a jump to real "A".
// - Scrolling Left: If original list is 'ABC', when we scroll left 1 time, we reach cloned "[C]ABC", so we need to trigger a jump to read "C".
// - Reverse Thinking: When "scroll%len===0", at this time we reach the first banner in "original list", we need to jump to last banner in "augmented list".
// 3.
// Except 12: We can get internalIndex using "(scroll%len) + 1" and we don't need jump.
// 4.
// boundary
// internalIndex: 1 ~ original list length + 1
// 5.
// Concept
// - cloned item.
// - real item.
// - internalIndex.

// (2)
// Question
// - Question: Why will the "If the index is `0` → jump to `n`" situation not happen when we are only scrolling right ?
// - Answer: Because when the carousel needs to jump, the index will jump to 1, so it never reaches the index 0 when we only scroll right..

// -------
// 1
// Only scrolling right.
export function simulateScroll(banners: string[], scroll: number): ScrollResult {
  const len = banners.length;

  if (scroll === 0) return { internalIndex: 1, needsJump: false };

  if (scroll % len === 0) return { internalIndex: len + 1, needsJump: true, jumpToIndex: 1 };

  return { internalIndex: (scroll % len) + 1, needsJump: false };
}
const result0 = simulateScroll(["A", "B", "C"], 0);
const result3 = simulateScroll(["A", "B", "C"], 3);
const result4 = simulateScroll(["A", "B", "C"], 4);
const result5 = simulateScroll(["A", "B", "C"], 5);
const result6 = simulateScroll(["A", "B", "C"], 6);
console.log("result0", result0);
console.log("result3", result3);
console.log("result4", result4);
console.log("result5", result5);
console.log("result6", result6);

// -------
// 2
// Scrolling left and right.
// -
// C ABC A
// simulateScroll(["A", "B", "C"], 0, 'left');
// 0 scrolling. { internalIndex: 1, needsJump: false }
// 1 scrolling. { internalIndex: 0, needsJump: true, jumpToIndex: 3 }
// 2 scrolling. { internalIndex: 2, needsJump: false }
// 3 scrolling. { internalIndex: 1, needsJump: false }
// 4 scrolling. { internalIndex: 0, needsJump: true, jumpToIndex: 3 }
// 5 scrolling. { internalIndex: 2, needsJump: false }
// 6 scrolling. { internalIndex: 1, needsJump: false }
// 7 scrolling. { internalIndex: 0, needsJump: true, jumpToIndex: 3 }
// -
// D ABCD A
// simulateScroll(["A", "B", "C", "D"], 0, left);
// 0 scrolling. { internalIndex: 1, needsJump: false }
// 1 scrolling. { internalIndex: 0, needsJump: true, jumpToIndex: 4 }
// 2 scrolling. { internalIndex: 3, needsJump: false }
// 3 scrolling. { internalIndex: 2, needsJump: false }
// 4 scrolling. { internalIndex: 1, needsJump: false }
// 5 scrolling. { internalIndex: 0, needsJump: true, jumpToIndex: 4 }
// 6 scrolling. { internalIndex: 3, needsJump: false }
// 7 scrolling. { internalIndex: 2, needsJump: false }
export function simulateScroll2(banners: string[], scroll: number, direction: "left" | "right"): ScrollResult {
  const len = banners.length;

  if (direction === "right") {
    if (scroll === 0) return { internalIndex: 1, needsJump: false };
    if (scroll % len === 0) return { internalIndex: len + 1, needsJump: true, jumpToIndex: 1 };
    return { internalIndex: (scroll % len) + 1, needsJump: false };
  }

  if (direction === "left") {
    if (scroll === 0) return { internalIndex: 1, needsJump: false };
    const mod = scroll % len;
    if (mod === 1) return { internalIndex: 0, needsJump: true, jumpToIndex: len };
    if (mod === 0) return { internalIndex: 1, needsJump: false };
    return { internalIndex: len - mod + 1, needsJump: false };
  }

  return { internalIndex: 1, needsJump: false };
}
const res_0 = simulateScroll2(["A", "B", "C", "D"], 0, "left");
const res_1 = simulateScroll2(["A", "B", "C", "D"], 1, "left");
const res_2 = simulateScroll2(["A", "B", "C", "D"], 2, "left");
const res_3 = simulateScroll2(["A", "B", "C", "D"], 3, "left");
const res_4 = simulateScroll2(["A", "B", "C", "D"], 4, "left");
const res_5 = simulateScroll2(["A", "B", "C", "D"], 5, "left");
const res_6 = simulateScroll2(["A", "B", "C", "D"], 6, "left");
const res_7 = simulateScroll2(["A", "B", "C", "D"], 7, "left");
console.log("res_0: ", res_0);
console.log("res_1: ", res_1);
console.log("res_2: ", res_2);
console.log("res_3: ", res_3);
console.log("res_4: ", res_4);
console.log("res_5: ", res_5);
console.log("res_6: ", res_6);
console.log("res_7: ", res_7);

// 1
// Test Case:
// For only scrolling right.
/**
//  const result0 = simulateScroll(["A", "B", "C"], 0);  
//  const result3 = simulateScroll(["A", "B", "C"], 3);   
//  const result4 = simulateScroll(["A", "B", "C"], 4);   
//  const result5 = simulateScroll(["A", "B", "C"], 5);  
//  const result6 = simulateScroll(["A", "B", "C"], 6);  
// App.js:11 0 {internalIndex: 1, needsJump: false}
// App.js:12 3 {internalIndex: 4, needsJump: true, jumpToIndex: 1}
// App.js:13 4 {internalIndex: 2, needsJump: false}
// App.js:14 5 {internalIndex: 3, needsJump: false}
// App.js:15 6 {internalIndex: 4, needsJump: true, jumpToIndex: 1}
*/
/** 
//  const resultD0 = simulateScroll(["A", "B", "C", "D"], 0);
//  const resultD1 = simulateScroll(["A", "B", "C", "D"], 1);
//  const resultD2 = simulateScroll(["A", "B", "C", "D"], 2);
//  const resultD3 = simulateScroll(["A", "B", "C", "D"], 3);
//  const resultD4 = simulateScroll(["A", "B", "C", "D"], 4);
//  const resultD5 = simulateScroll(["A", "B", "C", "D"], 5);
//  const resultD6 = simulateScroll(["A", "B", "C", "D"], 6);
//  const resultD7 = simulateScroll(["A", "B", "C", "D"], 7);
//  const resultD8 = simulateScroll(["A", "B", "C", "D"], 8);
// App.js:26 D0 {internalIndex: 1, needsJump: false}
// App.js:27 D1 {internalIndex: 2, needsJump: false}
// App.js:28 D2 {internalIndex: 3, needsJump: false}
// App.js:29 D3 {internalIndex: 4, needsJump: false}
// App.js:30 D4 {internalIndex: 5, needsJump: true, jumpToIndex: 1}
// App.js:31 D5 {internalIndex: 2, needsJump: false}
// App.js:32 D6 {internalIndex: 3, needsJump: false}
// App.js:33 D7 {internalIndex: 4, needsJump: false}
// App.js:34 D8 {internalIndex: 5, needsJump: true, jumpToIndex: 1}
*/
