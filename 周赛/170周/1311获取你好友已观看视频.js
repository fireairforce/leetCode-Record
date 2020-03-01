const watchedVideosByFriends = (watchedVideos, friends, id, level) => {
  const visited = new Uint8Array(friends.length);
  let queue = [id];
  visited[id] = 1;
  while (level--) {
    const next = [];
    for (const id of queue) {
      for (const newId of friends[id]) {
        if (visited[newId] === 0) {
          next.push(newId);
          visited[newId] = 1;
        }
      }
    }
    queue = next;
  }

  const freq = new Map();
  for (const id of queue) {
    for (const video of watchedVideos[id]) {
      freq.set(video, freq.has(video) ? freq.get(video) + 1 : 1);
    }
  }

  return Array.from(freq.entries())
    .sort((a, b) => {
      return a[1] === b[1] ? (a[0] > b[0] ? 1 : -1) : a[1] - b[1];
    })
    .map((item) => item[0]);
};
