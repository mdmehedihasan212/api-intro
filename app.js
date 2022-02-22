const user = { name: 'mehedi', age: 26, color: 'black' }
const stringfiyed = JSON.stringify(user);

// console.log(user);
// console.log(stringfiyed);


const shop = {
    name: 'bismilah store',
    location: 'pod road',
    product: [
        'peaij',
        'alu',
        'oil',
        'mosla',
        'chal',
        'dal'
    ],
    decoration: {
        light: 'superStar',
        self: 'rfl',
        tala: 'docs'

    },
}
const newStringify = JSON.stringify(shop);
// console.log(shop);
console.log(newStringify);
const convert = JSON.parse(newStringify);
console.log(convert);
