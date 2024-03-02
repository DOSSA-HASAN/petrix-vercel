// get the hamburger-menu and add an event listener so that when clicked the links show in a column

const menuButton = document.querySelector('.ham-menu');

const header = document.querySelectorAll('header');

let linkVisibility = true;


function handleMenuClick() {
    linkVisibility = !linkVisibility;
    updateStyles();
}

function updateStyles(){

    const mainSect = document.querySelectorAll('.head-main');
    const allLinks = document.querySelectorAll('.head-main a');
    mainSect.forEach((elem)=>{
        if(linkVisibility && window.innerWidth <= 900){
            // linkVisibility = !linkVisibility;
                elem.style.paddingTop = '10px'
                elem.style.height = 'max-content'
                elem.style.flexDirection = 'column'

                allLinks.forEach((link)=>{
                    link.style.display = 'block'
                })
        } else{
                // linkVisibility = true;
                elem.style.paddingTop = ''
                elem.style.height = ''
                elem.style.flexDirection = ''

                allLinks.forEach((link)=>{
                    link.style.display = ''
                })
        }
    })

}

updateStyles();
menuButton.addEventListener('click', handleMenuClick);

// Add event listener for window resize
window.addEventListener('resize', () => {
    updateStyles();
});












// if(linkVisibility == true){
//     menuButton.addEventListener('click', ()=>{

        
//     })

// } else if(linkVisibility == false){
//     mainSect.forEach((elem)=>{
//         elem.style.paddingTop = '0'
//         elem.style.height = '0'
//         elem.style.display = 'none'
//     })

//     allLinks.forEach((link)=>{
//         link.style.display = 'none'
//     })
// }


// menuButton.addEventListener('click', ()=>{
    
//     mainSect.forEach((elem)=>{
//             if(linkVisibility){
//                 linkVisibility = !linkVisibility;
//                 elem.style.paddingTop = '10px'
//                 elem.style.height = 'max-content'
//                 elem.style.flexDirection = 'column'

//                 allLinks.forEach((link)=>{
//                     link.style.display = 'block'
//                 })
//             } else{
//                 linkVisibility = true;
//                 elem.style.paddingTop = ''
//                 elem.style.height = ''
//                 elem.style.flexDirection = ''

//                 allLinks.forEach((link)=>{
//                     link.style.display = ''
//                 })
//             }
            
//         })
    
        
//     }
// )
