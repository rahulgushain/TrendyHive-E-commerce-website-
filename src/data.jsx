import girl1 from './Components/photos/girl-1.jpg'
import girl2 from './Components/photos/girl-2.jpg'
import girl3 from './Components/photos/girl-3.jpg'

import boy1 from './Components/photos/boy-1.jpg'
import boy2 from './Components/photos/boy-2.jpg'
import boy3 from './Components/photos/boy-3.jpg'

import kid1 from './Components/photos/kid-1.jpg'
import kid2 from './Components/photos/kid-2.jpg'
import kid3 from './Components/photos/kid-3.jpg'

import watch2 from './Components/photos/watch-2.jpg'

import womenjeans from './Components/photos/women-jean-1.jpg'

import boyjeans from './Components/photos/boy-jean-1.jpg'
import shoes from './Components/photos/shoe-1.jpg'

import bag from './Components/photos/bag-1.png'

import Schoolbag from './Components/photos/school-bag-1.jpg'

import { IoMdGlobe } from "react-icons/io";
import { GiAmpleDress } from "react-icons/gi";
import { GiPriceTag } from "react-icons/gi";
import { PiLockKeyFill } from "react-icons/pi";

import team1 from "./Components/photos/teamimg-1.png"
import team2 from "./Components/photos/teamimg-2.png"
import team3 from "./Components/photos/teamimg-3.png"
import team4 from "./Components/photos/teamimg-4.png"
import team5 from "./Components/photos/teamimg-5.png"
import team6 from "./Components/photos/teamimg-6.png"
import Contact from './Components/Contact'

import img1 from "./Components/photos/img1.jpg"
import img2 from "./Components/photos/img2.jpg"
import img3 from "./Components/photos/img3.jpg"
import img4 from "./Components/photos/img4.jpg"
import img5 from "./Components/photos/img5.jpg"
import img6 from "./Components/photos/img6.jpg"







const data = {

    FirstSlider:[img1,img2,img3,img4,img5,img6],

    sections: [
      {
        id: 1,
        heading: "Girls Section",
        detail: "Chic and playful outfits for your little fashionista!",
        image: [girl1, girl2, girl3],
      },
      {
        id: 2,
        heading: "Boys Section",
        detail: "Trendy and comfortable styles for every young champ!",
        image: [boy1, boy2, boy3],
      },
      {
        id: 3,
        heading: "Kids Section",
        detail: "Colorful, comfy, and fun fashion for all little ones!",
        image: [kid1, kid2, kid3],
      },
    ],
    slider: [
      {
        id: 1,
        title: "Watch",
        image: watch2,
      },
      {
        id: 2,
        title: "Women Jeans",
        image: womenjeans,
      },
      {
        id: 3,
        title: "Boy Jeans",
        image: boyjeans,
      },
      {
        id: 4,
        title: "Shoes",
        image: shoes,
      },
      {
        id: 5,
        title: "Bag",
        image: bag,
      },
      {
        id: 4,
        title: "School Bag",
        image: Schoolbag,
        
      },
    ],
    icons:[
      {
        id:1,
        icon:<IoMdGlobe />,
        title:"Worldwide Shipping",
        details:"Fast and reliable worldwide shipping to your doorstep!"
      },
      {
        id:2,
        icon:<GiAmpleDress/>,
        title:"Best Quality",
        details:"Premium quality products crafted to exceed expectations!"
      },
      {
        id:3,
        icon:<GiPriceTag  />,
        title:"Best Offers",
        details:"Unbeatable offers you won't want to miss!"
      },
      {
        id:4,
        icon:<PiLockKeyFill />,
        title:"Secure Payments",
        details:"Enjoy 100% secure and hassle-free payments!"
      },
    ],
    footer:[
      {
        id:1,
        title:"For Her",
        list:[
          "women Jeans","tops and shirts", "Women Jackets","Heels and Flats", "women Accessories"
        ]
      },
      {
        id:2,
        title:"For him",
        list:[
          "Men Jeans","Men shirts", "Men Jackets","Men Shoes", "Men Accessories"
        ]
      },
      {
        id:3,
        title:"About Us",
        list:[
          "Privacy","Security", "Terms"
        ]
      },
      {
        id:4,
        title:"Group Companies",
        list:[
          "Myntra","Flipkart", "Cleartrip","Shopsy"
        ]
      },{
        id:5,
        title:"Help",
        list:[
          "Payments","Shipping", "cancellation & return","FAQ"
        ]
      },
      
    ],
    team:[

      {
        id:1,
        name:"Rahul Gushain",
        role:"Founder- CEO",
        image:team1,
      },
      {
        id:3,
        name:"Rahul Gushain",
        role:"Founder- CEO",
        image:team2,
      },
      {
        id:3,
        name:"Rahul Gushain",
        role:"Founder- CEO",
        image:team3,
      },
      {
        id:4,
        name:"Rahul Gushain",
        role:"Founder- CEO",
        image:team4,
      },{
        id:5,
        name:"Rahul Gushain",
        role:"Founder- CEO",
        image:team5,
      },{
        id:6,
        name:"Rahul Gushain",
        role:"Founder- CEO",
        image:team6,
      },
    ],
    contacts:[
      {
        id:1,
        title:"Sales",
        des:"Discover a wide range of trendy products at unbeatable prices. Shop now and enjoy seamless browsing and fast delivery!",
        contact:223234223
        
      },
      {
        id:2,
        title:"Complains",
        des:"Your satisfaction matters to us. Have an issue? Reach out to our dedicated support team, and we’ll resolve it swiftly.",
        contact:298239
        
      },
      {
        id:3,
        title:"Returns",
        des:"Easy returns, hassle-free process! If you’re not fully satisfied, we’ve got you covered with our customer-friendly return policy.",
        contact:"hive@gmail.com"
        
      },
      {
        id:4,
        title:"Marketing",
        des:"Stay updated with the latest trends and exclusive deals. Sign up for our newsletters and follow us on social media for the best offers!",
        contact:93223332423
        
      }
    ]

  };
  
  export default data;
  