function solution(priorities, location) {
  let queue = priorities.map((priority, index) => ({ priority, index }));
  let order = 0;

  while (queue.length > 0) {
    const current = queue.shift();

    if (queue.some(item => item.priority > current.priority)) {
      queue.push(current); // 뒤로 보냄
    } else {
      order++;
      if (current.index === location) {
        return order;
      }
    }
  }
}
