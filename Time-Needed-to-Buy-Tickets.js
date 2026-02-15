1
2/**
3 * @param {number[]} tickets
4 * @param {number} k
5 * @return {number}
6 */
7var timeRequiredToBuy = function (tickets, k) {
8  let queue = tickets.map((ticket, i) => {
9    return { demand: ticket, isTarget: k === i };
10  });
11  let time = 0;
12
13  while (queue.length) {
14    time++;
15    const person = queue.shift();
16    person.demand -= 1;
17    if (!person.demand) {
18      if (person.isTarget) return time;
19    } else {
20      queue.push(person);
21    }
22  }
23};