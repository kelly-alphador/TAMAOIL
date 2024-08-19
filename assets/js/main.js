var bars = document.querySelector('.icon');
var ul = document.querySelector('ul');
var logo1=document.querySelector('#logo1');
var logo2=document.querySelector('#logo2');
var card_utilisations=document.querySelectorAll('.card-utilisation');
var card_avantages=document.querySelectorAll('.cont-apropos');
var i = 1;

bars.addEventListener('click', () => {
    if (i % 2 !== 0) {
        ul.classList.add('show');
        console.log('impaire');
    } else {
        ul.classList.remove('show');
        console.log('paire');
    }
    i = i + 1;
});
card_utilisations.forEach(card_utilisation=>{
    card_utilisation.addEventListener('mouseover',()=>{
        card_utilisation.style.transform="scale(1.1)";
        card_utilisation.style.transition='1.3s ease';  
    })
    card_utilisation.addEventListener('mouseout',()=>{
        card_utilisation.style.transform="scale(1.0)";
        card_utilisation.style.transition='1.3s ease';  
    })
})
card_avantages.forEach(card_avantage => {
    // Ajoutez une bordure transparente initiale
    card_avantage.style.border = "1px solid transparent";
    card_avantage.style.transition = 'border 2s ease';  // Transition sur la bordure

    card_avantage.addEventListener('mouseover', () => {
        card_avantage.style.border_top= "2px solid #0d6efd";  // Change la bordure à noire

    });

    card_avantage.addEventListener('mouseout', () => {
        card_avantage.style.border = "1px solid transparent";  // Revient à une bordure transparente
    });
});


