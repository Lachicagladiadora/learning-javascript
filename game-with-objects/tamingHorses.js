//domar a un caballo salvaje
// if (!circleElement) console.warn('dxc')
// window.addEventListener(
//     "keydown",
//     (event)=>{
//         if(event.defaultPrevented){
//             return
//         }
//     },
//     switch (event.key) {
//         case'ArrowDown':
//         console.log('dcfvgbhn')
//     }
// )

//Declaration variables
const openBackpackElement=document.getElementById('open-backpack')
const backpackElement=document.getElementById('backpack')

//functions

// const gender=[female,male]

class TamingHorses{
    constructor({
        name,
        color,
        gender=[],
        height,

    }) {
        this.horse={
            name,
            height,
            color,
            gender,
        }
    }
}
const horse1=new TamingHorses({
    name:'Nube',
    color:'Brown',
    gender:('male'),
    height:1.34
})


//events


