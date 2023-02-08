const numbers = [45, 65, 23, 98, 19];
// for(let i = 0; i<numbers.length; i++){
//     const number = numbers[1];
//     console.log(number);
// }


//for off loop
for(const number of numbers){
    console.log(number);
}

const products = [
    {id:1,  name: ' Xiami Phone one Night', price: 19000},
    {id:2,  name: ' Iphone', price: 19000},
    {id:3,  name: ' Mac Book Air', price: 119000},
    {id:4,  name: ' Lenovo youga Laptop 2025', price: 19000},
    {id:5,  name: ' Nokia Old Age phone gone', price: 19000},
    {id:6,  name: ' Phone one', price: 19000},
]

// for(const product of products){
//     console.log(product);
// }

function matchedProducts(products, search){
    const matched =[];
    for(const product of products){
      if(product.name.toLowerCase().includes(search.toLowerCase())){
        matched.push(product);
      }
      
    }
    return matched;
}

const result = matchedProducts(products, 'Phone');
console.log(result);