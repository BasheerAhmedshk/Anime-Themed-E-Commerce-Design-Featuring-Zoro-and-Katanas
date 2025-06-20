// Sample data for katanas and figures
import zoroSwordsImg from '../assets/images/katanas/zoro-swords.jpg';
import zoroKatanasGuideImg from '../assets/images/katanas/zoro-katanas-guide.jpg';
import woodenKatana1Img from '../assets/images/katanas/wooden-katana-1.jpg';
import woodenKatana2Img from '../assets/images/katanas/wooden-katana-2.webp';
import lightingKatana1Img from '../assets/images/katanas/lighting-katana-1.webp';
import lightingKatana2Img from '../assets/images/katanas/lighting-katana-2.jpg';

import narutoFigure1Img from '../assets/images/figures/naruto-figure-1.jpg';
import narutoSetImg from '../assets/images/figures/naruto-set.jpeg';
import luffyFigureImg from '../assets/images/figures/luffy-figure.jpeg';
import onepieceSetImg from '../assets/images/figures/onepiece-set.jpg';
import demonslayerSetImg from '../assets/images/figures/demonslayer-set.jpeg';
import ichigoFigureImg from '../assets/images/figures/ichigo-figure.jpg';

export const katanas = [
  {
    id: 1,
    name: "Wado Ichimonji Replica",
    description: "Zoro's treasured white sword, inherited from his childhood friend Kuina",
    price: 299.99,
    image: zoroSwordsImg,
    type: "onepiece",
    category: "wado",
    isLighting: false,
    material: "High Carbon Steel",
    length: "104cm",
    weight: "1.2kg",
    origin: "Japan-inspired craftsmanship",
    inStock: true
  },
  {
    id: 2,
    name: "Sandai Kitetsu Cursed Blade",
    description: "The cursed sword that chose Zoro in Loguetown",
    price: 349.99,
    image: zoroKatanasGuideImg,
    type: "onepiece",
    category: "sandai",
    isLighting: false,
    material: "Folded Steel",
    length: "102cm",
    weight: "1.1kg",
    origin: "Legendary craftsmanship",
    inStock: true
  },
  {
    id: 3,
    name: "Shusui Black Blade",
    description: "The legendary black blade from Wano Country",
    price: 399.99,
    image: lightingKatana1Img,
    type: "onepiece",
    category: "shusui",
    isLighting: true,
    material: "Black Steel",
    length: "106cm",
    weight: "1.3kg",
    origin: "Wano Country replica",
    inStock: true
  },
  {
    id: 4,
    name: "Enma King of Hell",
    description: "Oden's legendary sword that can cut through anything",
    price: 499.99,
    image: lightingKatana2Img,
    type: "onepiece",
    category: "enma",
    isLighting: true,
    material: "Supreme Grade Steel",
    length: "108cm",
    weight: "1.4kg",
    origin: "Supreme craftsmanship",
    inStock: false
  },
  {
    id: 5,
    name: "Wooden Training Katana",
    description: "Perfect for practice and display, handcrafted wooden blade",
    price: 89.99,
    image: woodenKatana1Img,
    type: "wooden",
    category: "all",
    isLighting: false,
    material: "Premium Oak Wood",
    length: "100cm",
    weight: "0.8kg",
    origin: "Traditional woodworking",
    inStock: true
  },
  {
    id: 6,
    name: "Bokken Practice Sword",
    description: "Traditional wooden sword for martial arts training",
    price: 69.99,
    image: woodenKatana2Img,
    type: "wooden",
    category: "all",
    isLighting: false,
    material: "Japanese Oak",
    length: "102cm",
    weight: "0.7kg",
    origin: "Traditional Japanese style",
    inStock: true
  }
];

export const figures = [
  {
    id: 1,
    name: "Naruto Uzumaki Figure",
    description: "Highly detailed Naruto figure in iconic pose",
    price: 79.99,
    image: narutoFigure1Img,
    series: "Naruto",
    isLimited: false,
    inStock: true
  },
  {
    id: 2,
    name: "Naruto Character Set",
    description: "Complete set of main Naruto characters",
    price: 199.99,
    image: narutoSetImg,
    series: "Naruto",
    isLimited: true,
    inStock: true
  },
  {
    id: 3,
    name: "Monkey D. Luffy Figure",
    description: "Luffy in Gear 4 transformation pose",
    price: 89.99,
    image: luffyFigureImg,
    series: "One Piece",
    isLimited: false,
    inStock: true
  },
  {
    id: 4,
    name: "One Piece Crew Set",
    description: "Straw Hat Pirates complete collection",
    price: 249.99,
    image: onepieceSetImg,
    series: "One Piece",
    isLimited: true,
    inStock: false
  },
  {
    id: 5,
    name: "Demon Slayer Corps Set",
    description: "Main characters from Demon Slayer anime",
    price: 179.99,
    image: demonslayerSetImg,
    series: "Demon Slayer",
    isLimited: false,
    inStock: true
  },
  {
    id: 6,
    name: "Ichigo Kurosaki Figure",
    description: "Bleach protagonist in Bankai form",
    price: 94.99,
    image: ichigoFigureImg,
    series: "Bleach",
    isLimited: false,
    inStock: true
  }
];

