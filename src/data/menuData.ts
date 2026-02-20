import food1 from '@/assets/food-1.jpg';
import food2 from '@/assets/food-2.jpg';
import food3 from '@/assets/food-3.jpg';
import food4 from '@/assets/food-4.jpg';
import food5 from '@/assets/food-5.jpg';
import food6 from '@/assets/food-6.jpg';
import type { FoodItem } from '@/stores/cartStore';

export const menuItems: FoodItem[] = [
  {
    id: '1',
    name: 'Butter Chicken',
    description: 'Creamy tomato-based curry with tender chicken pieces, finished with butter and cream',
    price: 249,
    image: food1,
    category: 'Main Course',
    isVeg: false,
    available: true,
  },
  {
    id: '2',
    name: 'Hyderabadi Biryani',
    description: 'Fragrant basmati rice layered with spiced meat, saffron, and caramelized onions',
    price: 199,
    image: food2,
    category: 'Main Course',
    isVeg: false,
    available: true,
  },
  {
    id: '3',
    name: 'Samosa (4 pcs)',
    description: 'Crispy golden pastry filled with spiced potatoes and peas, served with mint chutney',
    price: 79,
    image: food3,
    category: 'Snacks',
    isVeg: true,
    available: true,
  },
  {
    id: '4',
    name: 'Paneer Tikka',
    description: 'Marinated cottage cheese cubes grilled with bell peppers and onions on skewers',
    price: 179,
    image: food4,
    category: 'Starters',
    isVeg: true,
    available: true,
  },
  {
    id: '5',
    name: 'Masala Dosa',
    description: 'Crispy rice crepe filled with spiced potato masala, served with sambar and chutney',
    price: 99,
    image: food5,
    category: 'South Indian',
    isVeg: true,
    available: true,
  },
  {
    id: '6',
    name: 'Chole Bhature',
    description: 'Spicy chickpea curry with fluffy deep-fried bread, a North Indian classic',
    price: 149,
    image: food6,
    category: 'Main Course',
    isVeg: true,
    available: true,
  },
];

export const categories = ['All', 'Main Course', 'Starters', 'Snacks', 'South Indian'];
