const products = [
    { name: 'hp laptop', price: 30000 },
    { name: 'lenevo laptop', price: 40000 },
    { name: 'asus laptop', price: 25000 },
    { name: 'ipad', price: 50000 },
    { name: 'apple  watch', price: 15000 },
    { name: 'xaomi watch', price: 3000 },
    { name: 'mobile sumsung galaxi', price: 28000 },
    { name: 'mobile oppo', price: 3000 },

];
function search(products, searchItem) {
    let result = [];
    for (const product of products) {
        if (product.name.includes(searchItem)) {
            result.push(product);
        }

    }
    return result;

}
const watch = search(products, 'laptop');
console.log(watch);