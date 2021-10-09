const switchButton = document.querySelectorAll('.switch')
const configtoQuan = document.querySelector('.Config-to-qn')
const quantoConfig = document.querySelector('.Qn-to-config')
const inputOrb = document.getElementById('input-orbital')
const electronNumber = document.getElementById('electron-number')
const calculateButton = document.getElementById('calculate')
const subShells = document.querySelectorAll('input[name="subshell"]')
const errorHandle2 = document.querySelector('.error-handler-2')
const nP = document.getElementById('n')
const lP = document.getElementById('l')
const ml = document.getElementById('ml')
const ms = document.getElementById('ms')
const oN = nP.innerHTML
const oL = lP.innerHTML
const oMl = ml.innerHTML
const oMs = ms.innerHTML

const subShellObject = {
  s:2,p:6,d:10,f:14
}

const l_indentifier = {
  s:0,p:1,
  d:2,f:3
}

const s = {
  1:0,2:0,
}

const p = {
  1:-1, 2:0, 3:1,
  4:-1,5:0,6:1
}

const d = {
  1:-2,2:-1,3:0,
  4:1,5:2,6:-2,
  7:-1,8:0,9:1,
  10:2
}

const f = {
  1:-3,2:-2,3:-1,
  4:0,5:1,6:2,
  7:3,8:-3,9:-2,
  10:-1,11:0,12:1,
  13:2,14:3
}

console.log(f[5])


switchButton.forEach((e)=>{


  e.addEventListener ('click', ()=>{
  if(quantoConfig.classList.contains('show') === false){
    quantoConfig.classList.add('show')
    configtoQuan.style['display'] = 'none'
  }else{
    quantoConfig.classList.remove('show')
    configtoQuan.style['display'] = 'flex'
    // configtoQuan.style['flex-direction'] = 'column'
    // configtoQuan.style['justify-content'] = 'space-between'
  }



  })

})




calculateButton.addEventListener('click',()=>{
  let electron = electronNumber.value
  let orbital = inputOrb.value
  let sub = ''
  for(const shell of subShells){
    if (shell.checked){
      sub = shell.value
    }
  }
  if (electron <= 0 || electron === '' || orbital <= 0 || orbital === '' || sub === ''){
    errorHandle2.textContent = 'Please input all fields before clicking...'
  }else{

    errorHandle2.textContent = ''
  getQuant(orbital,electron,sub)}

})





const getQuant = (orb, el,ss)=>{
  nP.textContent = oN
  lP.textContent = oL
  if (el > subShellObject[ss]){
    errorHandle2.textContent =`the ${ss} subshell is incapabel of storing ${el} electrons`
  }else{
    errorHandle2.textContent = ''
    nP.textContent += orb
    lP.textContent += l_indentifier[ss]
    getElPosition(el,ss)

  }

}



const getElPosition = (num,ss)=>{
  ml.innerHTML = oMl
  ms.innerHTML = oMs

  if (num <= 2 && ss === 's'){
    ml.innerHTML += s[num]
    if (num < 2){
      ms.innerHTML += '+ 1/2'
    }else{
      ms.innerHTML += '- 1/2'
    }
  }else if(num <= 6 && ss === 'p'){
    ml.innerHTML += p[num]
    if (num <= 3){
      ms.innerHTML += '+ 1/2'
    }else{
      ms.innerHTML += '- 1/2'
    }
  }else if(num <= 10 && ss === 'd'){
    ml.innerHTML += d[num]
    if (num <= 5){
      ms.innerHTML += '+ 1/2'
    }else{
      ms.innerHTML += '- 1/2'
    }
  }else if(num <=14 && ss === 'f'){
    ml.innerHTML += f[num]
    if (num <= 7){
      ms.innerHTML += '+ 1/2'
    }else{
      ms.innerHTML += '- 1/2'
    }
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const inputN = document.getElementById('input-N')
const inputL = document.querySelectorAll('input[name="l-value"]')
const inputMl = document.getElementById('input-location')
const inputSpin = document.querySelectorAll('input[name="spin"]')
const calculateButton2 = document.getElementById('calculate-2')
const configuration = document.getElementById('configuration')
const errorHandle = document.querySelector('.error-handler')
const l_range ={
  s:{'0':[1,2]},
  p:{'-1':[1,4],'0':[2,5],'1':[3,6]},
  d:{'-2':[1,6],'-1':[2,7],'0':[3,8],'1':[4,9],'2':[5,10]},
  f:{'-3':[1,8],'-2':[2,9],'-1':[3,10],'0':[4,11],'1':[5,12],'2':[6,13],'3':[7,14]}
}





calculateButton2.addEventListener('click',()=>{
  let n = inputN.value
  let electron_location = inputMl.value
  let spin= ''
  let l = ''
  for (const sub of inputL){
    if(sub.checked){
      l = sub.value
    }
  }
  for (const s of inputSpin){
    if(s.checked){
      spin = s.value
    }
  }

  if (n === '' || n === '0' || electron_location === '' || spin === '' || l === ''){
    errorHandle.textContent = 'Check if all input fields are entered with appropriate data'
  }else{
    getConfig(n,electron_location,spin,l)
  }


})




const getConfig = (nV,elV,spnV,lV)=>{
  let nFrame = nV
  let supFrame;
  if (lV === "0"){
    if (elV === "0"){
    errorHandle.textContent = ''
    if(spnV === 'positive'){
      supFrame = l_range.s[elV][0]
    }else{
        supFrame = l_range.s[elV][1]
    }

  }else{
    errorHandle.textContent = `The s subshell doesn't have a ml number of ${elV}`

  }

}

if (lV === "1"){
  if (elV === '-1' || elV === '0' || elV === '1'){
  errorHandle.textContent = ''
  if(spnV === 'positive'){
    supFrame = l_range.p[elV][0]
  }else{
      supFrame = l_range.p[elV][1]
  }

}else{
  errorHandle.textContent = `The p subshell doesn't have a ml number of ${elV}`

}}

if (lV === "2"){
  if (elV === '-2' || elV === '-1' || elV === '0' || elV === '1' || elV === '2'){
  errorHandle.textContent = ''
  if(spnV === 'positive'){
    supFrame = l_range.d[elV][0]
  }else{
      supFrame = l_range.d[elV][1]
  }

}else{
  errorHandle.textContent = `The d subshell doesn't have a ml number of ${elV}`

}}
if (lV === "3"){
  if (elV === '-3' || elV === '-2' || elV === '-1' || elV === '0' || elV === '1' || elV === '2' || elV === '3'){
  errorHandle.textContent = ''
  if(spnV === 'positive'){
    supFrame = l_range.f[elV][0]
  }else{
      supFrame = l_range.f[elV][1]
  }

}else{
  errorHandle.textContent = `The f subshell doesn't have a ml number of ${elV}`

}}
 generateTemplate(nFrame,lV,supFrame)

}


function generateTemplate(nString,lString,elecString){
  let lTemp;
  let elecTemp;
  if (lString === '0'){
    lTemp = 's'
  }else if(lString === '1'){
    lTemp = 'p'
  }else if(lString === '2'){
    lTemp = 'd'
  }else{
    lTemp = 'f'
  }

  configuration.innerHTML = `
  ${nString}${lTemp}
  <sup>
  ${elecString}
  </sup>`
}
