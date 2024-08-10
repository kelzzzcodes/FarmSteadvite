import Diary from '../assets/Dairy.png'
import VegetablesFruits from '../assets/Fruits and vegetables.png'
import Condiments from '../assets/Condiments.png'
import Honey from '../assets/Baby food.png'
import Flour from '../assets/Grain and pasta.png'

export const navbarLinks = [
  {
    route: '/shop',
    label: 'Shop',
  },
  {
    route: '/category',
    label: 'Categories',
  },
  {
    route: '/faq',
    label: 'FAQ',
  },

  {
    route: '/about',
    label: 'About',
  },
  {
    route: '/contact',
    label: 'Contact',
  },
]

export const HomeCardData = [
  {
    image: `${Diary}`,
    title: 'Dairy Products',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    image: `${VegetablesFruits}`,
    title: 'Vegetables & Fruits',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    image: `${Condiments}`,
    title: 'Spices & Seasonings',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    image: `${Honey}`,
    title: 'Honey',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    image: `${Flour}`,
    title: 'Flour',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
]
