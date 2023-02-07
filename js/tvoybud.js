const STORE_NAME = 'ТВОЙ БАД';

const storeAdresses = [
    '411055 РФ, г. Уфа, ул. Революционная 19Б',
    '450000 РФ, г. Казань, ул. Ленина 101 (Торговый центр Меркурий)',
    '450014, РФ, г. Екатеринбург, ул. Подводника Ляхова 1'
];

const store = {
    staff: {
        CEO: 'Kirill Orlov',
        sellers: ['John Marston', 'Bilbo Baggins']
    },
    priceList: {
        vitamins: {
            D3: ['NOW', 'Life Exception', 'GLS'],
            BCAA: ['Fitness Formula', 'Life is good'],
        },
        supplements: {
            protein: ['GG8', 'EXantra', 'Мой белок']
        }
    },
    contacts: {
        'Телефон': '+7 (937) 120 00-00',
        'E-Mail': {
            'Корпоративная почта': 'tvoybudcompany@gmail.com',
            'По вопросам клиентов': 'tvoybud@gmail.com',
        },
        'Страница ВКонтакте': 'https://vk.com/tvoybud',
        'Страница Инстаграм': 'https://instagram.com/tvoybudru'
    },
    open: true
};

console.log(`Наш генеральный директор: ${store['staff']['CEO']}!`);
console.log(`У нас есть Витамин Д следующих производетелей: ${store['priceList']['vitamins']['D3']}.`);
console.log(`Наш магазин ${STORE_NAME} на данный момент: ${store['open']}`)
