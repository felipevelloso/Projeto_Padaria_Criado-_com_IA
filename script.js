/* =====================================================
   BELLA PAULISTA
   JAVASCRIPT
   ===================================================== */


/* ================= MENU MOBILE ================= */

const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

menuButton.addEventListener("click", () => {

    nav.classList.toggle("show");

});


/* Fecha o menu quando clicar em um link */

document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("show");

    });

});


/* ================= MENU MODAL ================= */

const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const menuModal = document.getElementById("menuModal");


openMenu.addEventListener("click", () => {

    menuModal.classList.add("show");

    document.body.style.overflow = "hidden";

});


closeMenu.addEventListener("click", () => {

    menuModal.classList.remove("show");

    document.body.style.overflow = "auto";

});


/* Fecha clicando fora do modal */

menuModal.addEventListener("click", (event) => {

    if (event.target === menuModal) {

        menuModal.classList.remove("show");

        document.body.style.overflow = "auto";

    }

});


/* Fecha com ESC */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        menuModal.classList.remove("show");

        document.body.style.overflow = "auto";

    }

});


/* ================= CARDÁPIO ================= */


/*
    Banco de dados simples do cardápio.
    Depois você pode substituir pelos produtos reais.
*/

const menuData = {

    cafes: [

        {
            nome: "Café Espresso",
            descricao: "Café espresso tradicional.",
            preco: "R$ 6,90"
        },

        {
            nome: "Café com Leite",
            descricao: "Espresso cremoso com leite.",
            preco: "R$ 8,90"
        },

        {
            nome: "Cappuccino",
            descricao: "Café, leite vaporizado e espuma.",
            preco: "R$ 11,90"
        },

        {
            nome: "Café da Casa",
            descricao: "Nossa combinação especial.",
            preco: "R$ 13,90"
        }

    ],


    paes: [

        {
            nome: "Pão Francês",
            descricao: "Crocante por fora e macio por dentro.",
            preco: "R$ 1,50"
        },

        {
            nome: "Pão de Queijo",
            descricao: "Quentinho e preparado diariamente.",
            preco: "R$ 5,90"
        },

        {
            nome: "Croissant",
            descricao: "Massa folhada artesanal.",
            preco: "R$ 9,90"
        },

        {
            nome: "Bolo da Casa",
            descricao: "Bolo fresquinho do dia.",
            preco: "R$ 8,90"
        }

    ],


    salgados: [

        {
            nome: "Coxinha",
            descricao: "Massa cremosa com frango.",
            preco: "R$ 8,90"
        },

        {
            nome: "Esfiha",
            descricao: "Esfiha artesanal de carne.",
            preco: "R$ 7,90"
        },

        {
            nome: "Empada",
            descricao: "Massa crocante e recheio cremoso.",
            preco: "R$ 8,90"
        },

        {
            nome: "Quiche",
            descricao: "Receita especial da casa.",
            preco: "R$ 12,90"
        }

    ],


    lanches: [

        {
            nome: "Misto Quente",
            descricao: "Presunto, queijo e pão na chapa.",
            preco: "R$ 14,90"
        },

        {
            nome: "Lanche Bella Paulista",
            descricao: "Nossa receita especial.",
            preco: "R$ 24,90"
        },

        {
            nome: "Sanduíche Natural",
            descricao: "Opção leve e saborosa.",
            preco: "R$ 16,90"
        },

        {
            nome: "Bauru",
            descricao: "Clássico preparado na hora.",
            preco: "R$ 19,90"
        }

    ],


    bebidas: [

        {
            nome: "Suco Natural",
            descricao: "Frutas selecionadas.",
            preco: "R$ 9,90"
        },

        {
            nome: "Suco de Laranja",
            descricao: "Suco natural feito na hora.",
            preco: "R$ 10,90"
        },

        {
            nome: "Chocolate Quente",
            descricao: "Cremoso e preparado na casa.",
            preco: "R$ 12,90"
        },

        {
            nome: "Água Mineral",
            descricao: "Água mineral sem gás.",
            preco: "R$ 4,50"
        }

    ]

};


/* ================= RENDER CARDÁPIO ================= */

const menuItems = document.getElementById("menuItems");

function renderMenu(category) {

    menuItems.innerHTML = "";

    const products = menuData[category];

    products.forEach(product => {

        const item = document.createElement("div");

        item.classList.add("menu-item");

        item.innerHTML = `

            <div>

                <h3>${product.nome}</h3>

                <p>
                    ${product.descricao}
                </p>

            </div>

            <span class="menu-price">
                ${product.preco}
            </span>

        `;

        menuItems.appendChild(item);

    });

}


/* Carrega cafés inicialmente */

renderMenu("cafes");


/* ================= TABS ================= */

const tabs = document.querySelectorAll(".tab");

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        tabs.forEach(item => {

            item.classList.remove("active");

        });

        tab.classList.add("active");

        const category = tab.dataset.category;

        renderMenu(category);

    });

});


/* ================= HEADER AO ROLAR ================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 5px 25px rgba(0,0,0,.25)";

    } else {

        header.style.boxShadow = "none";

    }

});


/* ================= ANIMAÇÃO AO APARECER ================= */

const observerOptions = {

    threshold: 0.12

};


const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    },

    observerOptions

);


document
    .querySelectorAll(
        ".category-card, .special-card, .info-box"
    )
    .forEach(element => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(20px)";

        element.style.transition =
            "opacity .6s ease, transform .6s ease";

        observer.observe(element);

    });


/* ================= LINK ATIVO DO MENU ================= */

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");

        }

    });


    document.querySelectorAll(".nav a").forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === `#${current}`
        ) {

            link.classList.add("active");

        }

    });

});