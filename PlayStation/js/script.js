import Navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = Navbar()
let newRealese = [
    {
        image:"https://gmedia.playstation.com/is/image/SIEPDC/rise-of-the-ronin-listing-thumb-en-28mar23",
        title:"Rise Of The Ronil"
    },
    {
        image:"https://gmedia.playstation.com/is/image/SIEPDC/marvels-spider-man-2-thumbnail-02-en-01oct21?$1200px$",
        title:"Marvel's Spider-man 2"
    },
    {
        image:"https://gmedia.playstation.com/is/image/SIEPDC/stellar-blade-ps5-20april23en",
        title:"Steller Blade"
    },
    {
        image:"https://gmedia.playstation.com/is/image/SIEPDC/ea-sports-fc-store-art-01-en-27sept23",
        title:"EA Sports FC24"
    },
    {
        image:"https://gmedia.playstation.com/is/image/SIEPDC/elden-ring-shadow-of-the-erdtree-keyart-01-en-28feb24?$800px$",
        title:"Elder Ring Shadow Of The Elder"
    },
    {
        image:"https://gmedia.playstation.com/is/image/SIEPDC/helldivers-2-store-art-01-en-4march24",
        title:"Helldivers 2"
    },
    {
        image:"https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-ragnarok-listing-thumb-01-09sep21$en",
        title:"God Of War Ragnarok"
    },
    {
        image:"https://gmedia.playstation.com/is/image/SIEPDC/The-last-of-us-part-ii-remastered-packshot-01-26feb24$en",
        title:"The Last Us Part II remastered "
    },
    {
        image:"https://gmedia.playstation.com/is/image/SIEPDC/final-fantasy-vii-rebirth-pack-01-en-30oct23",
        title:"Final Fantasy VII Rebirth"
    },
    {
        image:"https://gmedia.playstation.com/is/image/SIEPDC/zenless-zone-zero-packshot-01-en-17may24",
        title:"Zenless Zero"
    },
    {
        image:"https://gmedia.playstation.com/is/image/SIEPDC/call-of-duty-modern-warfare-3-pack-01-en-22aug23",
        title:"Call Of Duty: Modern Warfare III"
    },
    {
        image:"https://gmedia.playstation.com/is/image/SIEPDC/lego-fortnite-pack-01-en-01dec23",
        title:"LEGO Fortnite"
    },
]

const displayData = (data) => {
    data.map((ele)=>{
        let div = document.createElement("div");
        div.className = "cardhsy"
        let img = document.createElement("img");
        img.src = ele.image;
        img.classList.add("img-flui","img-new")
        let title = document.createElement("h6");
        title.innerHTML = ele.title;
        title.classList.add("text-light")
        div.appendChild(img);
        div.appendChild(title);
        document.querySelector("#newReleases").appendChild(div);
    })
}

displayData(newRealese);

let data = [
    {
        intro:"Introducing the PS5 console and accessories",
        console:"PlayStation 5 Console",
        exp:"Experience an all-new generation of incredible PlayStation games.",
        image:"https://gmedia.playstation.com/is/image/SIEPDC/ps5-slim-disc-console-featured-hardware-image-block-02-en-15nov23?$1600px$"
    },
    {
        intro:"Introducing the PS5 console and accessories",
        console:"DualSense™ Wireless Controller",
        exp:"Immerse yourself in the gaming experience with a controller the supports responsive haptic feedback and dynamic trigger effects.",
        image:"https://gmedia.playstation.com/is/image/SIEPDC/dualsense-range-stacked-image-block-01-en-11feb22?$1600px$"
    },
    {
        intro:"Introducing the PS5 console and accessories",
        console:"PULSE Elite™ Wireless Headset",
        exp:"Enjoy lifelike gaming audio in a comfortable headset design equipped with a retractable microphone and built-in long-life battery",
        image:"https://gmedia.playstation.com/is/image/SIEPDC/PULSE-Elite-headset-thumbnail-01-en-08sep23?$1600px$"
    },
    {
        intro:"Introducing the PS5 console and accessories",
        console:"PULSE Explore™ Wireless Earbuds",
        exp:"Enjoy lifelike gaming audio wherever play takes you with a portable design equipped with hidden microphones and a companion charging case.",
        image:"https://gmedia.playstation.com/is/image/SIEPDC/PULSE-Explore-earbuds-image-block-01-en-08sep23?$1600px$"
    },
    {
        intro:"Introducing the PS5 console and accessories",
        console:"DualSense Edge™ Wireless Controller",
        exp:"Get an edge in gameplay with remappable buttons, tunable triggers and sticks, changeable stick caps, back buttons, and more.",
        image:"https://gmedia.playstation.com/is/image/SIEPDC/dualsense-edge-featured-hardware-image-block-01-en-11aug23?$1600px$"
    },
    {
        intro:"Introducing the PS5 console and accessories",
        console:"Access™ Controller",
        exp:"A highly customisable PlayStation®5 controller kit designed to make gaming more accessible.",
        image:"https://gmedia.playstation.com/is/image/SIEPDC/access-controller-featured-hardware-image-block-01-en-12oct23?$1600px$"
    },
    {
        intro:"Introducing the PS5 console and accessories",
        console:"PS5 Console Covers",
        exp:"Personalise your PlayStation 5 or PlayStation 5 Digital Edition console with a vibrant array of new colour options.",
        image:"https://gmedia.playstation.com/is/image/SIEPDC/ps5-console-cover-range-image-block-01-en-16feb22?$1600px$"
    },
    {
        intro:"Introducing the PS5 console and accessories",
        console:"Media Remote",
        exp:"Conveniently control movies, streaming services and more on your PS5 console with an intuitive layout.",
        image:"https://gmedia.playstation.com/is/image/SIEPDC/media-remote-featured-hardware-image-block-01-en-11aug23?$1600px$"
    }
]
const handlePrint = (ele) => {
    document.querySelector(".intro").innerHTML = ele.intro
    document.querySelector(".consolesecThree").innerHTML = ele.console
    document.querySelector(".exp").innerHTML = ele.exp
    document.querySelector(".imageSecThree").src = ele.image
}

const mapper = (data) => {
    document.querySelector(".sectionThreeConected").innerHTML = '';
    data.map((ele)=>{
        let div = document.createElement('div');

        let image = document.createElement('img');
        image.src = ele.image;
        image.classList.add('img-fluid',"secThreeImage");
        image.addEventListener('click', () => {
            handlePrint(ele)
        })

        let console = document.createElement('p');
        console.innerHTML = ele.console;

        div.append(image,console)

        document.querySelector(".sectionThreeConected").append(div)
    })
}
mapper(data)