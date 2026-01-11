// ======== 1st  Step ==========
const plus = document.getElementById('plus');
const reset = document.getElementById('reset');
const minus = document.getElementById('minus');
const counterElement = document.getElementById('counter');

// =========== 2nd Step ==========
let count = 0;


//  ========= 3rd Step ==========

plus.addEventListener('click', () => {
    count = count + 1;
    counterElement.textContent =count;
});

minus.addEventListener('click', () => {
    count = count - 1;
    counterElement.textContent =count;
});

reset.addEventListener('click' , () =>{

    let resetNum = 0;
    counterElement.textContent = resetNum;
}
);

























// const updateCounter = (value) => {


//     count = count + value
//     createElement.textContenr = count



// }

// plus.addEventListener('click', () => {
//     updateCounter(1);
// });

// minus.addEventListener('click' , () =>{
//     updateCounter(-1)
// })
