
// ======header==========================================================================================================
const header = ScrollReveal ({
    origin:'top',
      distance:'60px',
      duration: 2000,
      delay:300,
})
header.reveal('.nav__items',{origin : 'bottom'})
// ====hero========================================================================================================================

const hero = ScrollReveal ({
    origin:'top',
      distance:'60px',
      duration: 2000,
      delay:300,
})

hero.reveal('.hero__shape',{origin : 'bottom'})
hero.reveal('.hero__coffee',{delay : 1000,distance: "200px",duration:1500})
hero.reveal('.hero__right-1',{delay : 1600,scale:0,duration:1500 ,rotate:{z:90},origin : 'left'})
hero.reveal('.hero__right-2',{delay : 2200,scale:0,duration:1500, rotate:{z:180}})
hero.reveal('.hero__left',{delay : 2600,scale:0,duration:1500, rotate:{z:180}})
hero.reveal('.hero__items',{delay : 2800,scale:0,duration:1500, rotate:{z:90}})
hero.reveal('.hero__title',{delay : 2500})
hero.reveal('.hero__text',{delay : 3000})



// =============Counter=================================================================


const allMenuItems = document.querySelectorAll(".menu__items");

allMenuItems.forEach(item => {
    // Har bir item ichidan kerakli tugma va raqam elementlarini topamiz
    const qoshishBtn = item.querySelector(".qoshish");
    const ayirBtn = item.querySelector(".ayir");
    const numberEl = item.querySelector(".number");

    // Boshlang'ich qiymatni number elementidan olamiz (yoki 0 dan boshlaymiz)
    let count = parseInt(numberEl.textContent);

    // QO'SHISH funksiyasi
    qoshishBtn.addEventListener("click", () => {
        count++;
        numberEl.textContent = count;
    });

    // AYIRISH funksiyasi
    ayirBtn.addEventListener("click", () => {
        if (count > 0) {
            count--;
            numberEl.textContent = count;
        }
    });
});



// ====================== MOCK DATA ======================
// Har bir item uchun rasm, sifat, nom, hikoya va narx
const mockMenu = [
    {
        img: "./images/Image (5).svg",
        quality: ["Tradicional"],
        name: "Café Mocha",
        story: "Café com chocolate e leite vaporizado",
        price: 12.90
    },
    {
        img: "./images/Image (6).svg",
        quality: ["Especial", "Gelado"],
        name: "Iced Latte",
        story: "Leite gelado com café espresso e gelo",
        price: 15.50
    },
    {
        img: "./images/Image (7).svg",
        quality: ["Tradicional"],
        name: "Cappuccino",
        story: "Café espresso com leite vaporizado e espuma",
        price: 10.00
    },
    {
        img: "./images/Image (9).svg",
        quality: ["Especial"],
        name: "Flat White",
        story: "Café espresso suave com leite cremoso",
        price: 14.00
    },
    {
        img: "./images/Image (10).svg",
        quality: ["Tradicional"],
        name: "Café Mocha",
        story: "Café com chocolate e leite vaporizado",
        price: 12.90
    },
    {
        img: "./images/Image (11).svg",
        quality: ["Especial", "Gelado"],
        name: "Iced Latte",
        story: "Leite gelado com café espresso e gelo",
        price: 15.50
    },
    {
        img: "./images/Image (12).svg",
        quality: ["Tradicional"],
        name: "Cappuccino",
        story: "Café espresso com leite vaporizado e espuma",
        price: 10.00
    },
    {
        img: "./images/Image (13).svg",
        quality: ["Especial"],
        name: "Flat White",
        story: "Café espresso suave com leite cremoso",
        price: 14.00
    },
    {
        img: "./images/Image (14).svg",
        quality: ["Tradicional"],
        name: "Café Mocha",
        story: "Café com chocolate e leite vaporizado",
        price: 12.90
    },
    {
        img: "./images/Image (15).svg",
        quality: ["Especial", "Gelado"],
        name: "Iced Latte",
        story: "Leite gelado com café espresso e gelo",
        price: 15.50
    },
];

// ====================== SELECT HTML ELEMENTS ======================
const menuItems = document.querySelectorAll(".menu__items");

// ====================== FUNCTION TO UPDATE ITEMS ======================
function updateMenuItems() {
    menuItems.forEach((item, index) => {
        // Tasodifiy item tanlaymiz
        const randomItem = mockMenu[Math.floor(Math.random() * mockMenu.length)];

        // Rasmini yangilaymiz
        const imgEl = item.querySelector(".menu__cofee");
        if(imgEl) imgEl.src = randomItem.img;

        // Sifatlarni yangilaymiz
        const spanEl = item.querySelector(".menu__span") || item.querySelector("span");
        if(spanEl){
            spanEl.innerHTML = "";
            randomItem.quality.forEach(q => {
                const p = document.createElement("p");
                p.classList.add("coffee__quality");
                p.textContent = q;
                spanEl.appendChild(p);
            });
        }

        // Nomni yangilaymiz
        const nameEl = item.querySelector(".coffee__name");
        if(nameEl) nameEl.textContent = randomItem.name;

        // Hikoya (story)ni yangilaymiz
        const storyEl = item.querySelector(".coffee__story");
        if(storyEl) storyEl.textContent = randomItem.story;

        // Narxni yangilaymiz
        const priceEl = item.querySelector(".amout");
        if(priceEl) priceEl.innerHTML = `<span>R$</span>${randomItem.price.toFixed(2)}`;
    });
}

// ====================== DEMO: har 3 sekund yangilash ======================
setInterval(updateMenuItems, 3000);

// ====================== Eslatma ======================
// Bu demo uchun 3 sekund berilgan. Loyihada siz bu vaqtni 4-5 kunga moslab o‘zgartirishingiz mumkin.










// Barcha buy buttonlarni tanlaymiz
const buyButtons = document.querySelectorAll(".buy");

// Har bir button uchun event qo‘shamiz
buyButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Sahifani yangi "korzinka.html" ga yo‘naltirish
        window.location.href = "korzinka.html";
    });
});

// Barcha buy buttonlarni tanlaymiz
const buy = document.getElementById("buy");

// Har bir button uchun event qo‘shamiz
buy.forEach(a => {
    a.addEventListener("click", () => {
        // Sahifani yangi "korzinka.html" ga yo‘naltirish
        window.location.href = "korzinka.html";
    });
});

