const form = document.querySelector('form')
const input = document.querySelector('.country')
const btn = document.querySelector('.btn')
const title = document.querySelector('.titleCountry')
const capitalHTML = document.querySelector('.capital')
const img = document.querySelector('img')
const ul = document.querySelector('.languages ul')

form.addEventListener('submit', ()=>{
    console.log('salut')
    let country = input.value 
    console.log(country)
    const url = `https://restcountries.com/v3.1/name/${country}`
 
    fetch(url)
    .then(response => response.json())
    .then((data) => {
        console.log('Success:', data);

        let name = data.map(result => result.name).map(common=>common.official).join('')
        let languages = data.map(result => result.languages).map(lang=>lang)
        let capital = data.map(result => result.capital).join('')
        let flags = data.map(result => result.flags).map(flag=>flag.png).join('')
        for(let i=0; i <languages.length; i++){
          for (const lg in languages[i]) {
            let allLanguages= (`${lg}: ${languages[i][lg]}`);
            console.log(allLanguages)
            let li = document.createElement('li')
            li.innerHTML = allLanguages
            ul.append(li)
          }
        }

      title.innerHTML = name
      capitalHTML.innerHTML = capital
      img.src = flags
    })
      .catch((error) => {
        console.error('Error:', error);
      });
})

const display = () => {
  const url = `https://restcountries.com/v2/all`
  fetch(url)
  .then(response => response.json())
  .then((data) => {
    console.log('Success:', data);
    let tbody = document.querySelector('tbody')
    for(let i= 0;i< data.length;i++ ){
    let infos = document.createElement('tr')
    tbody.append(infos)

    let name = document.createElement('td')
    let capital = document.createElement('td')
    let region = document.createElement('td')
    name.innerHTML = data[i].name
    name.classList.add('pays')
    capital.innerHTML = data[i].capital
    region.innerHTML = data[i].region

    infos.append(name)
    infos.append(capital)
    infos.append(region)
  }
  })
    .catch((error) => {
      console.error('Error:', error);
    });
}

display()



  


