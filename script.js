
    document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Opcional: Fechar o menu ao clicar em um link
    document.querySelectorAll('.nav-menu li a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

   
});


 function sendmail(){

         var email = document.getElementById('emailget');
         console.log(email)
         var name = document.getElementById('nomecomp');
         console.log(name)
         window.open('mailto:andreacarlapsi@outlook.com?subject=Agendar Consulta&body=Gostaria de agendar uma consulta(teste)');

    }
