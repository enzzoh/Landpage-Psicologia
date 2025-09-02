
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


function sendmail() {
   
    var nome = document.getElementById('Nomecomp').value;
    var email = document.getElementById('emailget').value; 

   
    if (nome === '' || email === '') {
        alert('Por favor, preencha seu nome e e-mail.');
        return; 
    }

   
    var corpoDoEmail = `Olá, sou ${nome} e gostaria de marcar uma consulta.\n\nMeu e-mail para contato é: ${email}`;

  
    var linkMailto = `mailto:andreacarlapsi@outlook.com?subject=Agendar Consulta&body=${encodeURIComponent(corpoDoEmail)}`;

    
    window.open(linkMailto);
}
