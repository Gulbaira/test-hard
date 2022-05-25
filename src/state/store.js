 
 const store = {
    questions: [
        {
            id: '1',
            question: "Найдите гипотенузу, если катеты равны 2 и 3",
            answ1: '5.6',
            answ2: '4.6',
            answ3: '3.6',
            answ4: '2.6',
            value1: 'no',
            value2: 'no',
            value3: 'yes',
            value4: 'no',

            // path: '/1',
            // link: '/2',
            next: 'NEXT',

        },
        {
            id: '2',
            question: "Найдите периметр, если стороны равны 5 и 6",
            answ1: '32',
            answ2: '22',
            answ3: '11',
            answ4: '10',
            value1: 'no',
            value2: 'yes',
            value3: 'no',
            value4: 'no',

            // path: '/2',
            // link: '/3',
            next: 'NEXT',
        },
        {
            id: '3',
            question: "Найдите объем, если стороны равны 5 и 6 и 2",
            answ1: '60',
            answ2: '50',
            answ3: '13',
            answ4: '10',

            value1: 'yes',
            value2: 'no',
            value3: 'no',
            value4: 'no',


            // path: '/3',
            // link: '/result',
            next: 'FINISH',
        },
    ]
}
export default store