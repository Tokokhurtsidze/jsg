const body = document.body;

const section = document.createElement('section');
section.classList.add('section2');

const container = document.createElement('div');
container.classList.add('container');

const data = [
    {
        imgSrc: './images/Rectangle 5.svg',
        title: 'Space tourism takes giant leap forward',
        description: 'Commercial space travel inches closer to reality as industry leaders announce successful test flights and expedited timelines for space tourism ventures.',
        disappearingText: 'This card will disappear in 15 seconds'
    },
    {
        imgSrc: './images/Rectangle 5.svg',
        title: 'Exploring the Moon: A new frontier',
        description: 'Innovative missions to the Moon bring new opportunities for science, exploration, and commerce.',
        disappearingText: 'This card will disappear in 24 seconds'
    },
    {
        imgSrc: './images/Rectangle 5.svg',
        title: 'Mars missions accelerate progress',
        description: 'Ambitious plans for Mars colonization take shape with key advancements in spacecraft and life support systems.',
        disappearingText: 'This card will disappear in 27 seconds'
    }
];

data.forEach((item,index) => {
    const back = document.createElement('div');
    back.classList.add('back');

    const image = document.createElement('div');
    image.classList.add('image');

    const img = document.createElement('img');
    img.src = item.imgSrc;
    
    const h3 = document.createElement('h3');
    h3.textContent = item.title;

    const p = document.createElement('p');
    p.textContent = item.description;

    const disappearingP = document.createElement('p');
    disappearingP.classList.add('p');
    disappearingP.textContent = item.disappearingText;

    const a = document.createElement('a');
    a.classList.add('a');
    a.href = '#';
    a.textContent = 'See more';

    const aImg = document.createElement('img');
    aImg.src = './images/Vector (1).svg';
    aImg.alt = 'Arrow';
    a.appendChild(aImg);

    image.append(img, h3, p, disappearingP, a);
    back.append(image);
    container.append(back);



    
       if (index === 0) {
        setTimeout(() => {
            back.style.display = 'none';
        }, 10000); 
    } else if (index === 1) {
        setTimeout(() => {
            back.style.display = 'none';
        }, 12000); 
    } else if (index === 2) {
        setTimeout(() => {
            back.style.display = 'none';
        }, 20000); 
    }
});

section.append(container);
body.append(section);


