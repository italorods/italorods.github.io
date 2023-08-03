//menu header 
 
    let menuIcon = document.querySelector('#menu');
    let navbar = document.querySelector('.navbar');
    const menuOptions = document.querySelectorAll('.navbar a');


    //toggle icon header
        menuIcon.onclick = () => {
            menuIcon.classList.toggle('bx-x');
            navbar.classList.toggle('active');
        
        }

    // Função para alterar o ícone para o ícone de menu e ocultar o menu
    function resetMenu() {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
      }
      
      // evento de click para as opções do menu
      menuOptions.forEach(option => {
        option.addEventListener('click', resetMenu);
      });
      
    //remove nav e icon quando clicar    
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');

//atribuir ano no footer da index

    // Obtém o ano atual
    const year = new Date().getFullYear();

    // Atualiza o conteúdo do elemento span com o ano atual
    document.getElementById("year").innerHTML = year;

//minha idade 

    // calculo da minha idade
    const idade = year-1998      

    //atualiza o conteúdo do elemento span com minha idade atual
    document.getElementById("idade").innerHTML = idade;