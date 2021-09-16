import Category from './models/Category.js';
import Item from './models/Item.js'


export const CATEGORY = [
    new Category('c1', 'Итальянская еда', require('./images/Italia.jpg'))
]

export const ITEMS = [
    new Item('i1', 'c1', 'Карбонара', require('./images/Carbonara.jpg'), 'Спагети с беконом', 500),
    new Item('i2', 'c1', 'Пицца', require('./images/Pizza.jpg'), 'Пицца с сыром и беконом',600),
    new Item('i3', 'c1', 'Тирамису', require('./images/Tiramisu.jpg'),'Десерт со вкусом кофе', 400),
]