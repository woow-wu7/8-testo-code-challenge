### Testo-Code-Challenge

### (1) Carousel

#### 1.1 Carousel implementation

```ts
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

// Thinking
// 1.
// Special Case:
// - Description: Scroll 0 time is a special case, so we need to handle it separately.
// - Why: Because when the number of scroll times more than 1 loop, Both  "scroll%len" and "0%len" are equal to 0.
// 2.
// Jump:
// - Question: In which situation do we need to jump?
// - Answer: If original list is 'ABC', when we scroll 3 times, we reach "ABC[A]", so we need to jump to "A".
// - Reverse Thinking: When "scroll%len===0", at this time we reach the first banner in "original list", we need to jump to last banner in "augmented list".
// 3.
// Except 12: we can get internalIndex using "(scroll%len) + 1" and we don't need jump.

export function simulateScroll(banners: string[], scroll: number): ScrollResult {
  const len = banners.length;

  if (scroll === 0) return { internalIndex: 1, needsJump: false };

  if (scroll % len === 0) return { internalIndex: len + 1, needsJump: true, jumpToIndex: 1 };

  return { internalIndex: (scroll % len) + 1, needsJump: false };
}

// Test Case:
/** 1
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
/** 2
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
```

#### 1.2 Requirements:

```
Question:

Part 1: Problem-solving
Problem: Simulate Infinite Scroll Indexing.
In a banner carousel, we want to simulate infinite scrolling by cloning the first and last banners and inserting them at the beginning and end of the banner list.

For example, if the original list is:
["A", "B", "C"]
And the augmented list is:
["C", "A", "B", "C", "A"]

The carousel starts at index 1, which is the first real item ( "A" ).
When scrolling right (forward), the internal index increases.In the real front-end banner component, the scroll to the cloned banner A is animated, and followed by an instant jump to the real A, creating an illusion of infinite scrolling.
```

![effect](./public//carousel.png)

### (2) Image-Text-Section

- [repository-link](https://github.com/woow-wu7/8-testo-frontend-coding-challenge)

![1](./public/image-text-section.png)
![2](./public/image-text-section2.png)
![2](./public/image-text-section3.png)
![2](./public/image-text-section4.png)

### English

```
1
【 tackle 应付 解决 v 】
【 tack 大头钉 图钉 n / 钉上 v 】
【 pin 大头针 别针 钢钉 钢针 n / 钉住 别住 v 】
-
【 tackle the task. 解决任务 v 】
【 tackle the problem. 解决问题 v 】
-
1.1
他准备把便签纸用大头钉钉在墙上，便签纸上有我们需要解决的任务
He is preparing to 【 tack / pin 】 the 【 sticky notes 】 to the wall with 【 tacks 】, and there are tasks that we need to 【 tackle 】 on the sticky notes.
// -- 【 sticky notes. 便签 n 】
// -- 【 tack VS tackle VS pin 】
-
1.2
Please 【 discard illusions 】 and 【 tackle 】 the task immediately.
请丢弃幻想，立即着手处理这项任务


2
【 illusion 幻想 错觉 n 】
【 discard illusion. 丢弃幻想 v 】
-
2.1
Please 【 discard illusions 】 and 【 tackle 】 the task immediately.
请丢弃幻想，立即着手处理这项任务


3
carousel 旋转木马 n
roller coaster. 过山车 n
cup coaster. 杯垫 n
-
【 roller coaster. 过山车 n 】
【 cup coaster. 杯垫 n 】
【 coaster 杯垫 n 】
【 toaster 烤面包机 n 】
-
3.1
There are 【 roller coaster 】 and 【 carousel 】 models placed on the 【 cup coaster 】.
杯垫上放着过山车和旋转木马模型
// -- 【 cup coaster. 杯垫 n 】
// -- 【 roller coaster. 过山车 n 】
```
