function openTab(tabName) {
    // Esconda todos os conteúdos das abas
    var tabContents = document.getElementsByClassName('tab-content');
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove('active');
    }

    // Mostrar o conteúdo da aba selecionada
    var selectedTab = document.getElementById(tabName);
    selectedTab.classList.add('active');
}

function openTab(tabName) {
    // Esconda todos os conteúdos das abas
    var tabContents = document.getElementsByClassName('tab-content');
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove('active');
    }

    // Mostrar o conteúdo da aba selecionada
    var selectedTab = document.getElementById(tabName);
    selectedTab.classList.add('active');

    // Ocultar o conteúdo após 5 segundos
    setTimeout(function () {
        selectedTab.classList.remove('active');
    }, 30000);
}