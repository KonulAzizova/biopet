let products = [
    {
        id: 1,
        image: './images/cat.png',
        title: 'Pisik evi',
        price: 42,
    },
    {
        id: 2,
        image: './images/dog.png',
        title: 'It ucun koynek',
        price: 60,
    },
    {
        id: 3,
        image: './images/pets-food-wooden-floor 1.png',
        title: 'Yemek qablari',
        price: 35,
    },
    {
        id: 4,
        image: './images/image 1 (1).png',
        title: 'Muxtelif tasmalar',
        price: 22,
    }
]




let products2 = [
    {
        id: 5,
        image: './images/konserv.png',
        title: 'Pişiklər üçün quru və nəm lasos',
        price: 45,
        dataName: 'enCoxSatilan'
    },
    {
        id: 6,
        image: './images/Natures Nuts 00029 8 Lbs Premium Safflower Seed (Pack of 4) 1.png',
        title: 'Quşlar üçün çərəz',
        price: 9.90,
        dataName: 'secilenMehsul'
    },
    {
        id: 7,
        image: './images/beer.png',
        title: 'Balıqlar üçün quru toyuq',
        price: 19,
        dataName: 'yeniMehsul'
    },
    {
        id: 8,
        image: './images/artisan.png',
        title: 'İtlər üçün sümüklər',
        price: 33,
        dataName: 'enCoxSatilan'
    },
    {
        id: 9,
        image: './images/3yem.png',
        title: 'İtlər üçün quru yemək və ət',
        price: 40,
        dataName: 'yeniMehsul'
    },
    {
        id: 10,
        image: './images/wagg.png',
        title: 'Pişiklər üçün çubuq',
        price: 13.90,
        dataName: 'secilenMehsul'
    },
    {
        id: 11,
        image: './images/Kasper Faunafood Caviakorrel - Caviavoer - 4 kg 1.png',
        title: 'Dovşanlar üçün dəri ət',
        price: 10,
        dataName: 'secilenMehsul'
    },
    {
        id: 12,
        image: './images/tetra.png',
        title: 'Balıqlar üçün quru çörək',
        price: 25,
        dataName: 'yeniMehsul'
    }
]



let basket = JSON.parse(localStorage.getItem('sebet')) || []
