var headerContent = `
<button type="button" class="button-menu"><span>Menu</span><i class="fa-solid fa-chevron-left arrow"></i></button>
<nav class="header-nav">
    <ul class="menu-list">
        <li class="menu-item home" onclick="window.location.href = './index.html'"><a href="./index.html">Home</a></li>
        <li class="menu-item sobre" onclick="window.location.href = './about.html'"><a href="./about.html">Sobre</a></li>
        <li class="menu-item habilidades" onclick="window.location.href = './skills.html'"><a href="./skills.html">Habilidades</a></li>
        <li class="menu-item projetos"><a href="">Projetos</a></li>
        <li class="menu-item contatos"><a href="">Contatos</a></li>
    </ul>
</nav>
`;
const header = document.querySelector(".header");
header.innerHTML = headerContent;