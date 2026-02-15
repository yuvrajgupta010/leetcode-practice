class Solution {
    reverseFirstK(q, k) {
        // code here
         if (k <= 0 || k > q.length) return q;

  const stack = [];

  // Step 1: Remove first k elements and push into stack
  for (let i = 0; i < k; i++) {
    stack.push(q.shift());
  }

  // Step 2: Add them back in reversed order
  while (stack.length) {
    q.push(stack.pop());
  }

  // Step 3: Move remaining elements to back
  const remaining = q.length - k;
  for (let i = 0; i < remaining; i++) {
    q.push(q.shift());
  }

  return q;
    }
}