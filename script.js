console.log("test js failas");
// 1. gauti vieta, kur idesiu foto
const place = document.getElementById('root');
const myButton = document.createElement('button')
place.appendChild(myButton);
myButton.innerText = "Gauk kavos"

// 1. sukurti img elementa
// 2. img prideti i div html
place.appendChild(document.createElement('img'))

const getData = async () => {
    const res = await fetch("https://coffee.alexflipnote.dev/random.json")
    const data = await res.json();
    console.log(data);
    // 3. src atributui priskirti reiksme, kuria gauname is API
    document.querySelector('img').src = data.file;
}

// 4. kas karta paspaudus mygtuka keiciasi esama nuotrauka
myButton.addEventListener('click', getData);
// tikrinu ar veikia kodas, nesustoja
console.log("test js veikia toliau")