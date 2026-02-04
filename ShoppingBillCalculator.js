function calcBill(prices, items) {
    // console.log(prices, items);


    // console.log(total);
    let itemCount = {};

    for (let item of items) {
        // console.log(item);
        if (itemCount.hasOwnProperty(item)) {
            itemCount[item]++;
        } else {
            itemCount[item] = 1;
        }
    }


    let total = 0;
    for (let item in itemCount) {
        let price = prices[item];
        let quenty = itemCount[item];
        let totalPriceQuenty =price*quenty;
        // //   console.log(item, " -> ", price);
        // total = total + price;
        // console.log(item, "->", quenty,"->", price);
        total =total+ totalPriceQuenty;
    }

    //  console.log(itemCount);
    return {
        total,
        itemCount: itemCount,
    };
}

let output = calcBill({ pen: 10, book: 50 }, ["pen", "pen", "book", "pen"]);
console.log(output);