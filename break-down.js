const products = [
    { name: 'hp laptop', price: 30000 },
    { name: 'lenevo laptop', price: 40000 },
    { name: 'asus laptop', price: 25000 },
    { name: 'ipad', price: 50000 },
    { name: 'apple  watch', price: 15000 },
    { name: 'xaomi watch', price: 3000 },
    { name: 'mobile sumsung galaxi', price: 28000 },
    { name: 'mobile oppo', price: 4000 },

];

// break
// for (const product of products) {
//     if (product.price < 5000) {
//         break;
//     }
//     console.log(product);
// }
// console.log('after the loop');

//continue

for (const product of products) {
    if (product.price < 10000) {
        continue;
    }
    console.log(product);
}