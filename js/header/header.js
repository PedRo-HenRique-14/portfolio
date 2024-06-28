var headerContent = `
<div class="logo">
    <img src="https://avatars.githubusercontent.com/u/53160578?v=4" alt="logo">
</div>
<button type="button" class="button-menu"><span>Menu</span><i class="fa-solid fa-chevron-left arrow"></i></button>
<nav class="header-nav">
    <ul class="menu-list">
        <li class="menu-item home" onclick="window.location.href = './index.html'"><a href="./index.html">Home</a></li>
        <li class="menu-item sobre" onclick="window.location.href = './about.html'"><a href="./about.html">Sobre</a></li>
        <li class="menu-item habilidades"><a href="">Habilidades</a></li>
        <li class="menu-item projetos"><a href="">Projetos</a></li>
        <li class="menu-item contatos"><a href="">Contatos</a></li>
    </ul>
</nav>
`;
const header = document.querySelector(".header");
header.innerHTML = headerContent;