const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 500)
        }
        else {
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            }, 500)
        }
    }
})

const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');

contactMeBtn.onclick = () => {
    pages.forEach((page, index) => {
        setTimeout(() => {
            page.classList.add('turn');

            setTimeout(() => {
                page.style.zIndex = 20 + index;
            }, 500)
        }, (index + 1) * 200 + 100)
    })
}


let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex() {
    pageNumber--;
    if (pageNumber < 0) {
        pageNumber = totalPages - 1;
    }
}

const backProfileBtn = document.querySelector('.back-profile');

backProfileBtn.onclick = () => {
    pages.forEach((_, index) => {
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].classList.remove('turn');

            setTimeout(() => {
                reverseIndex();
                pages[pageNumber].style.zIndex = 10 + index;
            }, 500)

        }, (index + 1) * 200 + 100)
    })
}

const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');

setTimeout(() => {
    coverRight.classList.add('turn');
}, 2100)

setTimeout(() => {
    coverRight.style.zIndex = -1;
}, 2800)

setTimeout(() => {
    pageLeft.style.zIndex = 20;
}, 3200)

pages.forEach((_, index) => {
    setTimeout(() => {
        reverseIndex();
        pages[pageNumber].classList.remove('turn');

        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].style.zIndex = 10 + index;
        }, 500)

    }, (index + 1) * 200 + 2100)
})

const themeBtn = document.querySelector('.theme-switch');
const themeIcon = document.getElementById('theme-icon');

themeBtn.onclick = () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        themeIcon.classList.replace('bx-sun', 'bx-moon');
    } else {
        themeIcon.classList.replace('bx-moon', 'bx-sun');
    }
};

const serviceModal = document.querySelector('.service-modal-overlay');
const readMoreBtns = document.querySelectorAll('.services-content .btn');
const closeModalBtn = document.querySelector('.modal-close-btn');
const modalTitle = document.querySelector('.service-modal-box h3');
const modalText = document.querySelector('.service-modal-box .modal-text');
const modalImg = document.querySelector('.service-modal-box .modal-img img');

const serviceInfo = [
    {
        title: "Mundo Invertido - Stranger Things",
        image: "assets/img/invertido.JPG",
        text: "<p>Este projeto web recria a experiência de Stranger Things usando HTML, CSS e JavaScript. A funcionalidade principal é um botão que alterna entre dois temas.</p><br><p>Quando ativado, o JavaScript modifica as classes CSS da página, mudando drasticamente as cores e fontes para simular o 'Mundo Invertido', e também substitui o conteúdo textual da página dinamicamente.</p>"
    },
    {
        title: "Jokenpô - Yu-Gi-Oh!",
        image: "assets/img/yugioh.JPG",
        text: "<p>Desenvolvi um mini-game interativo que adapta a clássica mecânica de Pedra, Papel e Tesoura (Jokenpô) para o universo do anime Yu-Gi-Oh!. O jogador escolhe estrategicamente uma carta para enfrentar a máquina.</p><br><p>O sistema processa o duelo comparando a escolha do usuário com uma jogada aleatória da CPU, definindo o vencedor instantaneamente.</p>"
    },
];

readMoreBtns.forEach((btn, index) => {
    btn.onclick = (e) => {
        e.preventDefault();

        if (serviceInfo[index]) {
            // Troca o Título
            modalTitle.innerText = serviceInfo[index].title;

            // Troca a Imagem
            modalImg.src = serviceInfo[index].image;

            // Troca o Texto (innerHTML permite usar tags <p> e <br>)
            modalText.innerHTML = serviceInfo[index].text;

            // Abre o Modal
            serviceModal.classList.add('active');
        } else {
            console.log("Conteúdo não definido para o botão " + index);
        }
    }
});

// Fechar Modal no X
closeModalBtn.onclick = () => {
    serviceModal.classList.remove('active');
}

// Fechar Modal clicando fora
window.onclick = (e) => {
    if (e.target == serviceModal) {
        serviceModal.classList.remove('active');
    }
}