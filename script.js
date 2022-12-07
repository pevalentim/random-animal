// array com todas as opções de imagens

let animals = [
    'images/anta.png',
    'images/lobo-guara.jpg',
    'images/onca-pintada.jpg'
];

// função ativada ao carregar a página
addEventListener('load', randomAnimal)

function randomAnimal(){
    let animal = document.querySelector('#image');
    animal.src = animals[Math.floor(Math.random() * animals.length)]
    console.log(animal.src)
    let animalText = document.querySelector('#animal-text');
    switch (animal.src){
        case 'images/anta.png':
            animalText.innerHTML = "uma anta"
        break

        case 'images/lobo-guara.jpg':
            animalText.innerHTML = "uma anta"

        default:
            animalText.innerHTML = "error"
    }
}