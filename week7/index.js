
const button=document.querySelector('#add')
addButton.eventListener('click',(event)=>{


const div= document.querySelector('#total')

const oldValue=parseInt(div.innerText,10)
console.log(oldValue)
div.innerText=oldValue+1
})