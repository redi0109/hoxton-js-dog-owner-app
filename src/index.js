
let dogList = document.querySelector(".dogs-list")

let dogSection = document.querySelector('.main__dog-section')

function addDogListItem(dog){
    let liEl = document.createElement('li')
    liEl.className = 'dogs-list__button'
    liEl.textContent = dog.name
    dogList.append(liEl)
}

function displayDog(dog){
//This is a template for the main dog card -->

// <!-- <section class="main__dog-section">
// <h2>Mr. Bonkers</h2>
// <img
//   src="https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_1.jpg"
//   alt=""
// />
// <div class="main__dog-section__desc">
//   <h3>Bio</h3>
//   <p>
//     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
//     minima voluptates libero cumque rerum consequatur optio aliquid sint
//     eum maxime illo laborum omnis quo ab rem cupiditate nulla
//     perspiciatis ipsum!
//   </p>
// </div class="main__dog-section__btn">
// <p><em>Is naughty?</em> yes!</p>
// <button>Good dog!</button>
// </section>  -->

let titleH2 = document.createElement('h2')
titleH2.textContent = dog.name

let dogImg = document.createElement('img')
dogImg.src = dog.image

let textDiv = document.createElement('div')
textDiv.className = 'main__dog-section__desc'

let textH3 = document.createElement('h3')
textH3.textContent = 'Bio'

let textP = document.createElement('p')
textP.textContent = dog.bio

let btnDiv = document.createElement('div')
btnDiv.className = 'main__dog-section__btn'

let btnP = document.createElement('p')
btnP.textContent = dog.isGoodDog

let dogBtn = document.createComment('button')






}

for (let dog of data){
    addDogListItem(dog)
}