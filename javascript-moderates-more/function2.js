const price_arr = [120, 250, 340, 500]


function CalculatePrice(price_list) {
    let net_price = 0
    for (let i = 0; i < price_list.length; i++) {
        net_price = net_price + price_list[i]
    }
    return net_price
}

const FinalPrice = CalculatePrice(price_arr)
console.log(`The net price is ${FinalPrice}`);