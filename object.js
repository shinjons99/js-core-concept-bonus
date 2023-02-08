const nayok = {
    name: 'shakib Khan',
    id: 1221,
    address: 'bangla cinema',
    isSingle: true,
    friends:['Apu', 'Raaz', 'Salman', 'Amir'],
    act: function(){
        console.log('Acting like Skhakib Khan');
    },
    movies:[
        {name: 'No-1',
        year: 2050},
        {name: 'king Khan', year: 2021}
    ],
    car: {
        brand:'tesla',
        price: 5000000,
        made: 2025,
        manufacturer:{
            name: 'tesla',
            CEO: 'Elon Mask'
        }
    }

}
// console.log(student.car);
console.log(nayok.act());
// nayok.act();