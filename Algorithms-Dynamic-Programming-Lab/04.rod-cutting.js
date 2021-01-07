function rodCutting(prices, rod) {

    const bestPrice = new Array(prices.length).fill(-1);
    const bestCombo = new Array(prices.length).fill(1);

    bestPrice[0] = 0;
    generate(rod);

    function generate(n) {
        if (bestPrice[n] >= 0) return bestPrice[n];

        let currBestPrice = bestPrice[n];

        for (let i = 1; i <= n; i++) {
            currBestPrice = Math.max(currBestPrice, prices[i] + generate(n - i));

            if (bestPrice[n] < currBestPrice) {
                bestPrice[n] = currBestPrice;
                bestCombo[n] = i;
            }
        }
        return bestPrice[n];

    }

    console.log(bestPrice[rod]);
}

rodCutting([0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30], 4);

rodCutting([0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30], 8);

rodCutting([0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30], 10);

