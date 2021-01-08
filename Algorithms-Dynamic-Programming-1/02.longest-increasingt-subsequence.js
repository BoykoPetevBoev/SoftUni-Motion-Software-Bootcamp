function longestIncreasingSubsequence(numbers) {
    const lengths = [];
    const indexes = [];
    const result = [];
    const best = {
        last: 0,
        length: 1
    };

    for (let curr = 0; curr < numbers.length; curr++) {
        lengths[curr] = 1;
        indexes[curr] = -1;
        for (let prev = curr - 1; prev >= 0; prev--) {
            if (numbers[prev] < numbers[curr] && lengths[prev] + 1 >= lengths[curr]) {
                lengths[curr] = lengths[prev] + 1;
                indexes[curr] = prev;
            }
        }
        if (best.length < lengths[curr]) {
            best.length = lengths[curr];
            best.last = curr;
        }
    }

    while (best.last !== -1) {
        result.unshift(numbers[best.last]);
        best.last = indexes[best.last];
    }

    console.log(result.join(' '));
    return result;
}

longestIncreasingSubsequence([1, 2, 5, 3, 4]);
longestIncreasingSubsequence([4, 3, 2, 1]);
longestIncreasingSubsequence([4, 2, -1, 3, 5, 5]);
longestIncreasingSubsequence([3, 14, 5, 12, 15, 7, 8, 9, 11, 10, 1]);