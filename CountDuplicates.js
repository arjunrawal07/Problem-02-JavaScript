class CountDuplicates {
  countDups(input) {
    let count = 0;
    let duplicates = {};
    for (let integer of input) {
      if (!duplicates[integer]) {
        duplicates[integer] = 1;
      } else {
        duplicates[integer] += 1;
      }
    }

    for (let key in duplicates) {
      if (duplicates[key] >= 2) {
        count += 1;
      }
    }
    return count;
  }
}

module.exports = CountDuplicates;
