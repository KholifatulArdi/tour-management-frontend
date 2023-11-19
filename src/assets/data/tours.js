import tourImg01 from "../images/bromo.jpeg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/borobudur.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/bali.png";
import tourImg06 from "../images/lombok.jpg";
import tourImg07 from "../images/indrayanti.jpg";
import tourImg08 from "../images/danau.png";

const tours = [
  {
    id: "01",
    title: "Bromo, Malang",
    city: "Indonesia",
    distance: 300,
    price: 99,
    address: "somewhare",
    maxGroupSize: 10,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Bali, Indonesia",
    city: "Indonesia",
    distance: 400,
    price: 99,
    address: "somewhare",
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Candi Borobudur",
    city: "Indonesia",
    distance: 500,
    price: 99,
    address: "somewhare",
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Tawangmangu, Magetan",
    city: "Indonesia",
    distance: 500,
    price: 99,
    address: "somewhare",
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Nusa Pendia Bali, Indonesia",
    city: "Indonesia",
    distance: 500,
    price: 99,
    address: "somewhare",
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Lombok Mandalika",
    city: "Indonesia",
    distance: 500,
    price: 99,
    address: "somewhare",
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Indrayanti Gunung Kidul",
    city: "Indonesia",
    distance: 500,
    price: 99,
    address: "somewhare",
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Danau Toba",
    city: "Indonesia",
    distance: 500,
    price: 99,
    address: "somewhare",
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg08,
    featured: false,
  },
];

export default tours;
