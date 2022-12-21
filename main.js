let spanValue = ['enter your first name', 'enter your last name',
'enter your email', 'enter your pronouns','enter your age','enter your favorite Alien type']

let selectCategory = ['favorite car style','favorite food for flight']

let optionsValue = [['Volvo','Saab','Mercedes','Audi'],
    ['apple','Sababa','orange','nishnoshim']]

    let items = ['firstName', 'lastName', 'email' , 'age'
     ,'gender', 'favoriteAlien']
const formObj = {}

for(i=0;i<6;i++){
    const spanTags = document.createElement('span')
let span = document.body.appendChild(spanTags)
span.textContent = spanValue[i]
const inputList = document.createElement('input')
let inputs = document.body.appendChild(inputList)
inputs.placeholder = spanValue[i]
 }
 
 let input = document.querySelectorAll('input')

 input.forEach(function(v){
v.addEventListener('change', function(i){
    let val = i.target.value
    for(i=0;i<items.length;i++){
    formObj[items[i]] = val
    }
});
 });
// let inputSingle = function(){
//     document.getElementsByName(spanValue[i]) 
// inputSingle.addEventListener('change', function(v){
// let innerText = v.target.value
//     formObj.spanValue[i] = innerText
// });
// };
// inputSingle()

 for(i=0;i<2;i++){
        const spanTags = document.createElement('span')
        let span = document.body.appendChild(spanTags)
    span.textContent = selectCategory[i];
    const selectList = document.createElement('select')
    document.body.appendChild(selectList)

    let selectListNames = ['cars','food'];
    selectList.name = selectListNames[i];

    
    for(j=0;j<4;j++){
    let option = document.createElement('option')
    option.value = optionsValue[i][j];
    option.innerHTML = optionsValue[i][j]; 
    selectList.appendChild(option);
    }

}


// selectList.forEach(function(inp){
//     inp.addEventListener('change', function(e){
//         console.log(e);
//         formObj[e.target.name]=e.target.value;
//     })
// });

const submitBtn = document.createElement('button')
submitBtn.innerText = "submit"
document.body.appendChild(submitBtn)

submitBtn.addEventListener('click', function(){
    if(!formObj.firstName || !formObj.lastName ||
         !formObj.email || !formObj.age ||
          !formObj.gender || !formObj.favoriteAlien){
        console.log('error' , formObj);
    }
    console.log(formObj);
})