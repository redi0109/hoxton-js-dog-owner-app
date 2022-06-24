
let dogList = document.querySelector(".dogs-list")

let dogSection = document.querySelector('.main__dog-section')

function addDogListItem(dog){
    for (let dog of data){
    
    let liEl = document.createElement('li')
    liEl.className = 'dogs-list__button'
    liEl.textContent = dog.name
    dogList.append(liEl)
    
    liEl.addEventListener('click', function() {
        displayDog(dog)
    })
   }
}

function displayDog(dog){

dogSection.textContent = ''

let titleH2 = document.createElement('h2')
titleH2.textContent = dog.name

let dogImg = document.createElement('img')
dogImg.src = dog.image
dogImg.alt = ''

let textDiv = document.createElement('div')
textDiv.className = 'main__dog-section__desc'

let textH3 = document.createElement('h3')
textH3.textContent = 'Bio'

let textP = document.createElement('p')
textP.textContent = dog.bio

let isNaughtyP = document.createElement('p')
let isNaughtyEm = document.createElement('em')
isNaughtyEm.textContent = 'Is naughty?'
if(dog.isGoodDog === false){
    isNaughtyP.append(isNaughtyEm, ' Yes!')
}else{
    isNaughtyP.append(isNaughtyEm, ' No!')
}


let dogBtn = document.createElement('button')
dogBtn.className = 'main__dog-section__btn'
if(dog.isGoodDog){
    dogBtn.textContent = 'Good dog!'
}else{
    dogBtn.textContent = 'Bad dog!'
}
    dogBtn.addEventListener("click", function () {
        switchGoodDog(dog) 
        displayDog (dog)
    }) 
textDiv.append(textH3, textP)
dogSection.append(titleH2, dogImg, textDiv, isNaughtyP, dogBtn)


}


function switchGoodDog(dog) {
    dog.isGoodDog = !dog.isGoodDog

}


addDogListItem()

displayDog(data)