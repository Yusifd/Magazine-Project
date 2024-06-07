let shopGoods = [
    {
        "store_name": "Moda Dünyası",
        "store_address": "Bakı şəhəri, Nizami kuçəsi 5",
        "products": [
            { "product_name": "Kişi köynəyi", "product_description": "Mavi rəngdə, 100% pamuk", "product_price": 50 },
            { "product_name": "Qadın bluzası", "product_description": "Dəri detallı, qara rəngdə", "product_price": 60 },
            { "product_name": "Kişi pantolonu", "product_description": "Qəhvəyi rəng, kənar cebi", "product_price": 75 },
            { "product_name": "Qadın eteyi", "product_description": "Qırmızı rəng, mini", "product_price": 40 },
            { "product_name": "Kişi dəsmalı", "product_description": "Nəqşdar dizayn", "product_price": 20 },
            { "product_name": "Qadın çantası", "product_description": "Əlgötürən, dəri", "product_price": 90 },
            { "product_name": "Kişi botları", "product_description": "Qış üçün, suya davamlı", "product_price": 120 },
            { "product_name": "Qadın ayaqqabıları", "product_description": "Yüksək tapan, lacivərt", "product_price": 85 },
            { "product_name": "Kişi papağı", "product_description": "Qara rəngdə, dəri", "product_price": 45 },
            { "product_name": "Qadın şalvarı", "product_description": "Göy rəngdə, kaşmir", "product_price": 70 }
        ]
    },
    {
        "store_name": "Zərif Moda",
        "store_address": "Bakı şəhəri, 28 May kuçəsi 12",
        "products": [
            { "product_name": "Kişi palto", "product_description": "Süət dəri, qara rəngdə", "product_price": 250 },
            { "product_name": "Qadın jaketi", "product_description": "Uzun, qaşqır", "product_price": 200 },
            { "product_name": "Kişi kəməri", "product_description": "Dəri, metal tokalı", "product_price": 40 },
            { "product_name": "Qadın badlonu", "product_description": "Retro stil, qızıl rəngdə", "product_price": 180 },
            { "product_name": "Kişi şortu", "product_description": "Spor stil, elastik", "product_price": 60 },
            { "product_name": "Qadın maykası", "product_description": "Boyalı nəqş, pamuklu", "product_price": 45 },
            { "product_name": "Kişi saatı", "product_description": "Qara rəngdə, analog", "product_price": 150 },
            { "product_name": "Qadın bəzək", "product_description": "Qızıl, komplekt", "product_price": 220 },
            { "product_name": "Kişi atkısı", "product_description": "Xəzəl rəng, uzun", "product_price": 35 },
            { "product_name": "Qadın bantı", "product_description": "Metal detallı, elastik", "product_price": 50 }
        ]
    },
    {
        "store_name": "Əliyev Moda Mərkəzi",
        "store_address": "Bakı şəhəri, Azadlıq prospekti 89",
        "products": [
            { "product_name": "Kişi kostyumu", "product_description": "İki parçalı, qara rəngdə", "product_price": 320 },
            { "product_name": "Qadın kombinezonu", "product_description": "Yaz üçün, açıq rəng", "product_price": 150 },
            { "product_name": "Kişi sviteri", "product_description": "Düz rəng, yüngül", "product_price": 70 },
            { "product_name": "Qadın ziyafət geyimi", "product_description": "Düzənşən, yaz üçün", "product_price": 95 },
            { "product_name": "Kişi sport formaları", "product_description": "Spandex, idman üçün", "product_price": 55 },
            { "product_name": "Qadın bikini", "product_description": "Tropik nəqş, elastik", "product_price": 45 },
            { "product_name": "Kişi çantası", "product_description": "Dizayner, əsas bölməsi", "product_price": 100 },
            { "product_name": "Qadın ətri", "product_description": "Gül ətri, uzunömürlü", "product_price": 80 },
            { "product_name": "Kişi şalı", "product_description": "Səliqəli, çoxrəngli", "product_price": 25 },
            { "product_name": "Qadın sutyeni", "product_description": "Destəklənmiş, rahat", "product_price": 65 }
        ]
    }
];
class Account {
    constructor(login) {
        this.login = login;
    }
    displayProduct(product, storeName) {
        console.log(`Название: ${product['product_name']}, описание: ${product['product_description']}, цена: ${product['product_price']}₼, магазин: ${storeName}`);
    }
    showAllGoods() {
        shopGoods.forEach(store => store['products'].forEach(product => this.displayProduct(product, store.store_name)));
    }
    searchGood(name){
        let notFound=true;
        shopGoods.forEach((item)=>{
            let findedProduct=item['products'].find((item)=>item['product_name']===name);
            if(typeof findedProduct!=='undefined'){
                this.displayProduct(findedProduct,item['store_name']);
                notFound=false;
            }
        });
        if(notFound) console.log('Такого продукта не существует');
    }
    sortBy(toolToSort, direction) {
        let allGoods = [];
        shopGoods.forEach((item) => {
            let shopName=item.store_name;
            item.products.forEach((item) => {
                allGoods.push({...item,'store_name': shopName});
            })
        });
        if (toolToSort === 'цена' || toolToSort === 'название') {
            switch (direction) {
                case 'возрастание':
                    toolToSort === 'price' ? allGoods.sort((a, b) => a[`product_${toolToSort}`] - b[`product_${toolToSort}`]) : allGoods.sort((a, b) => a[`product_${toolToSort}`].localeCompare(b[`product_${toolToSort}`]));
                    allGoods.forEach((item) => { console.log(`Название: ${item['product_name']}, описание: ${item['product_description']}, цена: ${item['product_price']}₼, магазин: ${item['store_name']}`)});
                    break;
                case 'убывание':
                    toolToSort === 'price' ? allGoods.sort((a, b) => b[`product_${toolToSort}`] - a[`product_${toolToSort}`]) : allGoods.sort((a, b) => b[`product_${toolToSort}`].localeCompare(a[`product_${toolToSort}`]));
                    allGoods.forEach((item) => { console.log(`Название: ${item['product_name']}, описание: ${item['product_description']}, цена: ${item['product_price']}₼, магазин: ${item['store_name']}`)});
                    break;
                default:
                    alert('Вы написали неправильную команду!');
            }
        } else {
            alert('Вы написали неправильное свойство!')
        }
    }
}
class User extends Account {
    constructor(login) {
        super(login);
        this.cart = [];
    }
    addToCart(productName) {
        shopGoods.forEach((item) => {
            let findedProduct = item.products.find((item) => item.product_name === productName);
            if (typeof findedProduct !== 'undefined') {
                this.cart.push({...findedProduct,'shopName': item.store_name});
            }
        });
    }
    showCart() {
        if (this.cart.length != 0) {
            let cardPrice = 0;
            this.cart.forEach((item) => {
                console.log(`Название: ${item['product_name']}, описание: ${item['product_description']},цена: ${item['product_price']}₼, магазин: ${item['shopName']}`);
                cardPrice += item.product_price;
            });
            console.log(`Общая цена ваших товаров: ${cardPrice}₼`);
        }
        else console.log('Ваша корзина пуста :( ')
    }

}
class Admin extends Account {
    removeGood(productName) {
        shopGoods.forEach(store => store.products = store.products.filter(product => product.product_name !== productName));
    }
    redactPrice(productName, newPrice) {
        shopGoods.forEach((item) => {
            item.products.forEach((item) => {
                if (item.product_name === productName)
                    item.product_price = newPrice;
            })
        });
    }
    addGood(store, productInfo) {
        const [name, description, price] = productInfo.split('/');
        const foundStore = shopGoods.findIndex(s => s.store_name === store);
        foundStore ?  shopGoods[foundStore].products.push({ 'product_name': name, 'product_description': description, 'product_price': +price }) : console.log('Такого магазина не существует :(');
    }
}
class AccountList {
    constructor() {
        this.admin = new Admin('admin');
        this.user = new User('user');
        this.logined;
    }
    loginAccount(login) {
        if (this.admin.login === login) {
            this.logined = this.admin;
        }
        else if (this.user.login === login) {
            this.logined = this.user;
        }
        else {
            return true;
        }
    }
}
class Application {
    constructor() {
        this.accountList = new AccountList();
    }
    init() {
        let notLogIn = true;
        while (notLogIn) {
            let log = prompt('Пожалуйста пишите свой логин: (Если хотите войти как покупатель пишите: "user".Если хотите войти как администратор пишите "admin")');
            if(log===null) return;
            if (this.accountList.loginAccount(log)) {
                alert('Неправильный логин!');
            }else notLogIn = false;   
        }
        while (true) {
            let operation;
            if (this.accountList.logined instanceof Admin) {
                operation = prompt(`Добро пожаловать в наш магазин,админ! Пишите операции, которые предусмотрены администратору :
                1. показать товары
                2. искать товар
                3. сортировка товаров
                4. изменить цену
                5. добавить товар
                6. убрать товар
                `);
            }
            else {
                operation = prompt(`Добро пожаловать в наш магазин,покупатель! Напишите операцию которую вы хотите выполнить :
                1. показать товары
                2. искать товар
                3. сортировка товаров
                4. добавить в корзину
                5. показать корзину
                `);
            }
            if (operation === null) {
                return;
            }
            switch (operation) {
                case 'показать товары':
                    this.accountList.logined.showAllGoods();
                    break;
                case 'искать товар':
                    let searchedProduct = prompt('Напишите имя товара, которую вы хотите найти: ');
                    this.accountList.logined.searchGood(searchedProduct);
                    break;
                case 'сортировка товаров':
                    let sort = prompt(`Напишите свойство, которое хотите сортировать и команду как хотите сортировать  :
                
                свойства: название или цена 
                команды: возрастание или убывание
                
                Например (название возрастание)`).split(' ');
                    this.accountList.logined.sortBy(sort[0].toLowerCase(), sort[1].toLowerCase());
                    break;
                case 'изменить цену':
                    let price = prompt(`Напишите имя товара и новую цену через запятую(,):
                
                Например (Kişi palto,300)`).split(',');
                    this.accountList.logined.redactPrice(price[0], +price[1]);
                    break;
                case 'добавить товар':
                    let shop = prompt(`Напишите имя магазина, куда хотите добавить товар: `);
                    let product = prompt(`Напишите описание продукта(name,description,price) пишите через '/' : 
                
                Например (Kişi palto/Süət dəri, qara rəngdə/300)`)
                    this.accountList.logined.addGood(shop, product);
                    break;
                case 'убрать товар':
                    let removedProduct = prompt('Напишите имя товара, которую вы хотите удалить ');
                    this.accountList.logined.removeGood(removedProduct);
                    break;
                case 'добавить в корзину':
                    let productCart = prompt('Напишите название товара, которую вы хотите добавить в корзину');
                    this.accountList.logined.addToCart(productCart);
                    break;
                case 'показать корзину':
                    this.accountList.logined.showCart();
                    break;
                default:
                    alert('Вы написали неправильную операцию! Пожалуйста, попробуйте еще раз!');
            }
        }
    }
}
const app = new Application();
app.init();