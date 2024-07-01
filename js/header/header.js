var headerContent = `
<div class="logo">
    <a href='./about.html'><img src="https://media.licdn.com/dms/image/D4D03AQEl78DG7TQjKg/profile-displayphoto-shrink_800_800/0/1719276281021?e=1724889600&v=beta&t=6IkU5QmHIe-OZ62qixhzU3I2_lyM0UgZ14XLTcRQSJk" alt="logo"></a>
</div>
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