const url = "PHP/countries.php";
let myData = {};
fetch(url).then(function (res) {
    return res.json()
}).then(function (data) {
    myData = data;
    buildSelect(data);
})

function buildSelect(d) {
    let select = document.createElement('select');
    d.forEach(function (item, index) {
        let option = document.createElement('option');
        
        option.value = index;
        option.textContent = item.name;
        select.appendChild(option);
    })
    select.addEventListener("change",outputData);
    document.querySelector('#countries').appendChild(select);
}


function outputData(e){
    console.log(e);
    console.log(e.target.value);
    console.log(myData[e.target.value]);
    let obj = myData[e.target.value];
    output.innerHTML = `
    <div class="card border-primary mb-3" style="max-width: 40rem;">
    <div class="card-header"><h1>${obj.name}</h1>
    <img src=${obj.flag}>
    </div>
    <div class="card-body justify-content-center">
        <h3 class="card-text"><strong>Population</strong>: ${obj.population}</h3>
        <p class="card-text"><span><strong>Capital city</strong>: ${obj.capital}</span><br>
        <span><strong>Currencies</strong>: ${obj.currencies[0].name}</span><br>
        <span><strong>Languages</strong>: ${obj.languages[0].name}</span><br>
        <span><strong>Region</strong>: ${obj.region}</span><br>
        <span><strong>Subregion</strong>: ${obj.subregion}</span><br>
        <span><strong>Demonym</strong>: ${obj.demonym}</span><br>
        <span><strong>Gini</strong>: ${obj.gini}</span><br>
        <span><strong>Regional Bloc</strong>: ${obj.regionalBlocs[0].name}</span><br>
        <span><strong>Calling code</strong>: ${obj.callingCodes[0]}</span><br>
        <span><strong>Time zones</strong>: ${obj.timezones}</span><br>
        <span><strong>Native name</strong>: ${obj.nativeName}<span><br>
        <span><strong>area</strong>: ${obj.area} km2</span><br>
        </p>
        </div>
        </div>
    `;
    
}

var mymap = L.map('mapid').setView([50,0], 3);
L.tileLayer('https://tile.jawg.io/jawg-light/{z}/{x}/{y}.png?access-token=8ylar0mFu8qjfOjkoE0EE43LnGLBR3F8MuB9S4QuVl0Vw7lmQ5qyVaqRlKacMN5q', {}).addTo(mymap);
mymap.attributionControl.addAttribution("<a href=\"https://www.jawg.io\" target=\"_blank\">&copy; Jawg</a> - <a href=\"https://www.openstreetmap.org\" target=\"_blank\">&copy; OpenStreetMap</a>&nbsp;contributors")