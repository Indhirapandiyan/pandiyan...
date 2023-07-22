// let spanColor=document.getElementById('spanColor');

// spanColor.addEventListener('mouseover',function(event){
//     spanColor.style.color='blue';
// });

// spanColor.addEventListener('mouseout',function(event){
//     spanColor.style.color='black';
// });

// let getInput=document.getElementById('getInput');
// let spanElement=document.getElementById('spanElement');

// getInput.addEventListener('click', function(event){
//     spanElement.textContent=window.prompt('say somthimg')
// });

function showcoordinates(event){
    let header=document.getElementById('header');

    let x =event.clientX;
    let y =event.clientY;

    let spancoordinates=document.getElementById('coordinates');

    spancoordinates.textContent=`coordinates x: ${x} and y: ${y}`;
}