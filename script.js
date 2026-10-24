// Mobile menu
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav');
if (toggle && nav) {
    toggle.addEventListener('click', () => {
        const open = nav.classList.toggle('open');
        toggle.setAttribute('aria-expanded', open);
    });
}

// Simple cart counter (kept in memory for now)
let count = 0;
const counter = document.getElementById('cart-count');
document.querySelectorAll('.add-to-cart').forEach((btn) => {
    btn.addEventListener('click', () => {
        count += 1;
        if (counter) counter.textContent = count;
        const old = btn.textContent;
        btn.textContent = 'Added';
        setTimeout(() => (btn.textContent = old), 1200);
    });
});
