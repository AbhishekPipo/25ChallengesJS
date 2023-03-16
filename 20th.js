function points(games) {
    let totalPoints = 0;
    for (let i = 0; i < games.length; i++) {
      let [x, y] = games[i].split(':').map(Number);
      if (x > y) {
        totalPoints += 3;
      } else if (x === y) {
        totalPoints += 1;
      }
    }
    return totalPoints;
  }
  