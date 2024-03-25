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

let scrollDown = document.getElementById('scrollButton');
scrollDown.addEventListener('click', ()=>{
    let nextSection = document.querySelector("#section01:not([hidden])").nextElementSibling;
    if(nextSection){
        nextSection.scrollIntoView({behavior: "smooth"})
    }
})

let scrollTop = document.getElementById('scrollTopButton');
scrollTop.addEventListener('click', ()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})