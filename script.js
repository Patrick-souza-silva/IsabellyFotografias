// Rola até o topo da página assim que ela for carregada
window.onload = function () {
    window.scrollTo(0, 0);
};

const chamada = document.getElementById('whatsapp');
const chamadaInsta = document.getElementById('insta');

const descriptions = document.querySelectorAll('.description');
const orcamento = document.getElementById('orcamento');
orcamento.style.display = 'none'; // Esconde a div

const orcamentoCasamento = document.getElementById('orcamento-casamento');
orcamentoCasamento.style.display = 'none'; // Esconde a div

//Como eu estou recebendo mais de uma div pois tenho varias class
//eu preciso por dentro de um array desta forma, assim vai executar para cada class
descriptions.forEach(description => {
    description.addEventListener('click', () => {
        //Cria uma constante que pega o id da div que eu estou clicando
        const clickedId = description.id;

        //Torna o menu visivel novamente
        orcamento.style.display = 'block';
        orcamentoCasamento.style.display = 'none';

        //Setando opções
        let optionOne
        let optionTwo
        let optionThree

        let valorOne
        let valorTwo
        let valorThree

        switch (clickedId) {
            case 'ensaios-pessoais':
                optionOne = '20 Fotos Digitais + Edição Completa + 2 trocas de roupa (em estúdio)'
                valorOne = 'R$ 149,90'
                optionTwo = '30 fotos Digitais + Edição completa + 3 trocas de roupa + make espres + escova (em estúdio ou ar livre)'
                valorTwo = 'R$ 269,90'
                optionThree = '35 fotos Digitais + Edição completa + 3 trocas de roupas + make completa + cabelo e penteado + 30 fotos reveladas (ar livre)'
                valorThree = 'R$ 349,90'
                break;

            case 'eventos':
                optionOne = '1 hora de cobertura fotográfica + Todas as fotos entregues em formato digital (com tratamento básico)'
                valorOne = 'R$ 199,90'
                optionTwo = '2 horas de cobertura fotográfica + Todas as fotos entregues em formato digital (com tratamento básico)'
                valorTwo = 'R$ 299,90'
                optionThree = '3 horas de cobertura fotográfica + Todas as fotos entregues em formato digital (com tratamento básico) + 1 quadro decorativo personalizado (15x20 cm)'
                valorThree = 'R$ 449,90'
                break;

            case 'familia':
                optionOne = '20 Fotos Digitais + Edição Completa até 4 membros(em estúdio)'
                valorOne = 'R$ 139,90'
                optionTwo = '25 fotos Digitais + Edição completa (ar livre)'
                valorTwo = 'R$ 169,90'
                optionThree = '30 fotos Digitais + Edição completa + álbum com 15 fotos'
                valorThree = 'R$ 229,90'
                break;

            case 'pre-wedding':
                optionOne = '20 fotos digitais com edição completa (estúdio ou ar livre)'
                valorOne = 'R$ 179,90'
                optionTwo = '25 fotos digitais com edição completa + 1 quadro decorativo personalizado (15x20 cm)'
                valorTwo = 'R$ 249,90'
                optionThree = '30 fotos digitais com edição completa + 1 quadro decorativo personalizado (15x20 cm) + 1 álbum com 20 fotos, totalmente personalizado.'
                valorThree = 'R$ 399,90'
                break;

            case 'debutantes':
                optionOne = '2 horas de cobertura fotográfica + Todas as fotos entregues em formato digital (com tratamento básico) + 10 fotos com edição completa'
                valorOne = 'R$ 399,90'
                optionTwo = '3 horas de cobertura fotográfica + Todas as fotos entregues em formato digital (com tratamento básico) + 15 fotos reveladas no tamanho 10x15 cm + 1 quadro decorativo personalizado (15x20 cm)'
                valorTwo = 'R$ 599,90'
                optionThree = '4 horas de cobertura fotográfica + Todas as fotos entregues em formato digital (com tratamento básico) + 1 álbum com 20 fotos personalizadas + 1 quadro decorativo personalizado (15x20 cm)'
                valorThree = 'R$ 749,90'
                break;

            case 'festa-infantil':
                optionOne = '2 horas de cobertura fotográfica + Todas as fotos entregues em formato digital (com tratamento básico) + 10 fotos reveladas no tamanho 10x15 cm'
                valorOne = 'R$ 349,90'
                optionTwo = '3 horas de cobertura fotográfica + Todas as fotos entregues em formato digital (com tratamento básico) + 15 fotos reveladas no tamanho 10x15 cm + 1 quadro decorativo personalizado (15x20 cm)'
                valorTwo = 'R$ 499,90'
                optionThree = '4 horas de cobertura fotográfica + Todas as fotos entregues em formato digital (com tratamento básico) + 1 álbum com 20 fotos personalizadas + 1 quadro decorativo personalizado (15x20 cm)'
                valorThree = 'R$ 699,90'
                break;

            case 'gestante':
                optionOne = 'Cobertura: 1 hora de sessão fotográfica (em estúdio ou local externo) + Entrega: 20 fotos entregues em formato digital (com tratamento básico) + Impressões: 5 fotos reveladas no tamanho 10x15 cm'
                valorOne = 'R$ 249,90'
                optionTwo = 'Cobertura: 1,5 hora de sessão fotográfica (em estúdio ou local externo) + Entrega: 30 fotos entregues em formato digital (com tratamento básico) + Impressões: 10 fotos reveladas no tamanho 10x15 cm (Álbum: Não incluso.)'
                valorTwo = 'R$ 399,90'
                optionThree = 'Cobertura: 2 horas de sessão fotográfica (em estúdio ou local externo, com troca de figurinos) + Entrega: 40 fotos entregues em formato digital (com tratamento básico) + Impressões: 15 fotos reveladas no tamanho 10x15 cm + Álbum: com 20 fotos'
                valorThree = 'R$ 699,90'
                break;

            case 'casamentos':
                orcamento.style.display = 'none'; // Esconde a div
                orcamentoCasamento.style.display = 'block';
                break;
        }

        //Bindando no html as opções
        document.getElementById('option1').innerHTML = optionOne;
        document.getElementById('option2').innerHTML = optionTwo;
        document.getElementById('option3').innerHTML = optionThree;

        document.getElementById('valor1').innerHTML = valorOne;
        document.getElementById('valor2').innerHTML = valorTwo;
        document.getElementById('valor3').innerHTML = valorThree;

        //Falando qual div que eu vou escrolar quando clicar
        const target = document.getElementById('orcamento');

        //Ao eu clicar na div que eu quero ele vai rolar para a div que eu selecionar
        target.scrollIntoView({
            behavior: 'smooth', // Rolagem suave
            block: 'start' // Faz o alvo alinhar ao topo da tela
        });

    });
});

chamada.addEventListener('click', () => {
    window.open('https://api.whatsapp.com/send?phone=46988090298&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20prestados%20pela%20empresa.');
});

chamadaInsta.addEventListener('click', () => {
    window.open('https://www.instagram.com/isa.bellyfotografia/', '_blank');
});


