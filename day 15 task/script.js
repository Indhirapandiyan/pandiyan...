function characterCount(){
    let textarea=document.getElementById('textarea');
    let chars=document.getElementById('chars');

    chars.textContent=`You inserted characters: ${textarea.value.length}`;
}