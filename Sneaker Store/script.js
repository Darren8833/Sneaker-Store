const wrapper = document.querySelector('.wrapper');
const menuItems = document.querySelectorAll('.menuItem');

const products = [
    {
        id : 1,
        title : "Air Force",
        price : 119,
        colors : [
            {
                code : "black",
                img : "./img/product/air.png"
            },
            {
                code : "darkblue",
                img : "./img/product/air2.png"
            },
        ],
    },
    {
        id : 2,
        title : "Air Jordan",
        price : 149,
        colors : [
            {
                code : "lightgray",
                img : "./img/product/jordan.png"
            },
            {
                code : "green",
                img : "./img/product/jordan2.png"
            },
        ],
    },
    {
        id : 3,
        title : "Blazer",
        price : 109,
        colors : [
            {
                code : "lightblue",
                img : "./img/product/blazer.png"
            },
            {
                code : "gray",
                img : "./img/product/blazer2.png"
            },
        ],
    },
    {
        id : 4,
        title : "Crater",
        price : 89,
        colors : [
            {
                code : "black",
                img : "./img/product/crater.png"
            },
            {
                code : "green",
                img : "./img/product/crater2.png"
            },
        ],
    },
    {
        id : 5,
        title : "Hippie",
        price : 99,
        colors : [
            {
                code : "gray",
                img : "./img/product/hippie.png"
            },
            {
                code : "black",
                img : "./img/product/hippie2.png"
            },
        ],
    },
    {
        id : 6,
        title : "Boots..?",
        price : 9999,
        colors : [
            {
                code : "red",
                img : "./img/product/Red Boots.png"
            },
            {
                code : "red",
                img : "./img/product/Red Boots.png"
            },
        ],
    },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        choosenProduct = products[index];

        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});

currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img;
    });
});

currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
    payment.style.display = "flex";
});

close.addEventListener("click", () => {
    payment.style.display = "none";
});