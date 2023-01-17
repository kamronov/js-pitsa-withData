var fullObj = {
    qalinligi: '',
    kattaligi: '',
    ustiga: [],
    qoshimcha: []
}

var elSelect = document.querySelector('#select');
var elBtnList = document.querySelector('.btn__list');
var elUstiga = document.querySelector('.ustiga__list');
var elQoshimcha= document.querySelector('.qoshimcha__list');
var elTitleNon= document.querySelector('.titleNon');
var elTitleKatt= document.querySelector('.titleKatt');
var elTitleUstida= document.querySelector('.titleUstida');
var elTitleqoshm= document.querySelector('.titleqoshm');
var elbuyurtma= document.querySelector('.buyurtma');

// data ---

var selectArr =  ['Qalin',`O'rtacha`, 'Yupqa'];
var kattaArr =  ['25sm','30sm', '35sm'];
var ustigaArr =  ['Pomidor','Tuzlangan bodiring', `Kurka go'shti`, 'Zaytun', 'Qazi'];
var qoshimchaArr =  ['Achchiq','Pishloq'];

for (const i of selectArr) {
    var newOption = document.createElement('option')
    newOption.textContent = i;
    elSelect.appendChild(newOption);
}
elSelect.addEventListener('change', ()=> {
    fullObj.qalinligi = elSelect.value;
    elTitleNon.textContent = elSelect.value;
})

for (const i of kattaArr) {
    var newBtn = document.createElement('button')
    newBtn.textContent = i;
    elBtnList.appendChild(newBtn);
    newBtn.addEventListener('click', (e)=>{
        e.preventDefault()
        fullObj.kattaligi = i;
        elTitleKatt.textContent = i
    })
}

for (const i of ustigaArr) {
    var newLabel = document.createElement('label')
    var newInp = document.createElement('input')
    var newSpan = document.createElement('span')
    newLabel.className ='container';
    newSpan.className = 'checkmark';
    newLabel.textContent = i;
    newInp.type = 'checkbox';
    newInp.id = i;
    newLabel.appendChild(newInp);
    newLabel.appendChild(newSpan);
    elUstiga.appendChild(newLabel);
    newInp.addEventListener('click', (e)=>{
        if(e.target.checked == true){
            fullObj.ustiga.push(e.target.id)
            elTitleUstida.textContent = fullObj.ustiga;
        }else{
            var index = fullObj.ustiga.indexOf(e.target.id);
            if(index > -1){
                fullObj.ustiga.splice(index, 1);
                elTitleUstida.textContent = fullObj.ustiga;
            }
        }
    })
}

for (const i of qoshimchaArr) {
    var newLabel = document.createElement('label')
    var newInp = document.createElement('input')
    var newSpan = document.createElement('span')
    newLabel.className ='container';
    newSpan.className = 'checkmark';
    newLabel.textContent = i;
    newInp.type = 'checkbox';
    newInp.id = i;
    newLabel.appendChild(newInp);
    newLabel.appendChild(newSpan);
    elQoshimcha.appendChild(newLabel);
    newInp.addEventListener('click', (e)=>{
        if(e.target.checked == true){
            fullObj.qoshimcha.push(e.target.id)
            elTitleqoshm.textContent = fullObj.qoshimcha
        }else{
            var index = fullObj.qoshimcha.indexOf(e.target.id);
                if(index > -1){
                    fullObj.qoshimcha.splice(index, 1);
            elTitleqoshm.textContent = fullObj.qoshimcha
                }
        }
    })    
}
elbuyurtma.addEventListener('click', ()=>{
    console.log(fullObj);
})