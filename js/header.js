var headerContent = `
<header>
    <div class="logo">
        <img src="https://avatars.githubusercontent.com/u/53160578?v=4" alt="logo">
    </div>
    <nav class="header-nav">
        <ul class="menu-list">
            <li class="menu-item"><a href="./index.html">Home</a></li>
            <li class="menu-item"><a href="./about.html">Sobre</a></li>
            <li class="menu-item"><a href="">Habilidades</a></li>
            <li class="menu-item"><a href="">Projetos</a></li>
            <li class="menu-item"><a href="">Contatos</a></li>
        </ul>
    </nav>
</header>
`;
const header = document.querySelector(".header");
header.innerHTML = headerContent;