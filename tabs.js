/*const content = [{
    id: 1,
    img: "lion.png",
    category: "History",
    title: "History",
    description: `The Technical University of 
            Kenya is pleased to announce 
            the 11th Graduation Ceremony that 
            will be held on Wednesday, 21st December 2022
            at the University grounds starting 9am.`
},
{
    id: 2,
    img: "lion.png",
    category: "Vision",
    title: "Vision",
    description: `The Technical University of 
            Kenya is pleased to announce 
            the 11th Graduation Ceremony that 
            will be held on Wednesday, 21st December 2022
            at the University grounds starting 9am.`
},
{
    id: 3,
    img: "lion.png",
    category: "Goals",
    title: "Goals",
    description: `The Technical University of 
            Kenya is pleased to announce 
            the 11th Graduation Ceremony that 
            will be held on Wednesday, 21st December 2022
            at the University grounds starting 9am.`
}]

const containerDiv = document.querySelector('.container')

window.addEventListener('DOMContentLoaded', function(){
    contentLoad(content)
    loadContent()
})

function contentLoad(contentItems){
    let displayContent = contentItems.map(function(item){
        return `<div class="container">
                    <div class="image">
                        <img src="${item.img}">
                    </div>
                    <div class="content">
                        <div class="buttons">
                            <button id="history">History</button>
                            <button id="vision">Vision</button>
                            <button id="goals">Goals</button>
                        </div>
                        <div class="description">
                            <h4>${item.title}</h4>
                            <p>${item.description}</p>
                        </div>
                    </div
                </div>`
    }).join('')
    containerDiv.innerHTML = displayContent
    
}
function loadContent(){
const btn = document.querySelectorAll('.buttons')

btn.forEach(function(button){
    button.addEventListener('click', function(e){
        const category = e.currentTarget.dataset.id
        const contentCategory = content.filter(function(contentItem){
            if(contentItem.category === category){
                return contentItem
            }
        })
        contentLoad(contentCategory)
    })
})
}*/

const contentEl = document.querySelector('.content')

const btn = document.querySelectorAll('.tab-btn')

const descript = document.querySelectorAll('.description')

contentEl.addEventListener('click', function(e){
    const id = e.target.dataset.id
    if(id){
        //remove active from buttons
        btn.forEach(function(btns){
            btns.classList.remove('active')
            e.target.classList.add('active')
        })
        //hide all classes and display matching id
        descript.forEach(function(descripts){
            descripts.classList.remove('active')
        })
        const element = document.getElementById(id)
        element.classList.add('active')
    }
})