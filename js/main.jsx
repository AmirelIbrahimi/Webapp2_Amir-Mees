console.log('hello world!');

const waarschuwing = () => {
    const titelnew = document.querySelector('#titel');
    titelnew.className = waarschuwing
    titelnew.src = 'img/warning.png';
    titelnew.alt = 'waarschuwing!';
    titelnew.style = 'border; 1px solid red';
    console.log(titelnew.textContent);
    titelnew.textContent = 'Pas op! je hebt de titel veranderd!';
    console.log(titelnew.textContent);
}