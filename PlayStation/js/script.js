import Navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = Navbar()

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
    document.querySelector(".consolesecThree").innerHTML = console
    document.querySelector(".exp").innerHTML = ele.exp
    document.querySelector(".imageSecThree").src = ele.image
}

const mapper = (data) => {
    document.querySelector(".sectionThreeConected").innerHTML = '';
    data.map((ele)=>{
        let div = document.createElement('div');

        let image = document.createElement('img');
        image.src = ele.image;
        image.classList.add('img-fluid');
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