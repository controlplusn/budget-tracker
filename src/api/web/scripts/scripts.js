const container = document.getElementById('container');
const sidebar = document.querySelector('.sidebar');
const expense = document.querySelector('.expense-page');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const menuBtn = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle("active");
})

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
})

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
})

function on() {
    document.getElementById("overlay-wrapper").style.display = "block";
}