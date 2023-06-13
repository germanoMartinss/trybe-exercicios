
// document.getElementsByClassName('pilot-f1-atual')[0].innerText = 'Magrin'

let pilotosF1Atual = document.getElementsByClassName('pilot-f1-atual');
for (let i = 0; i < pilotosF1Atual.length; i += 1) {
    pilotosF1Atual[i].innerText = 'Lewis Hamilton'
}