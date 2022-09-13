let vnd = null
let usd = null
let result = null
const TYGIA = 23500

function checkInput() {
    vnd = document.getElementById('vnd').value
    usd = document.getElementById('usd').value
    if ((vnd === '' && usd === '') || (vnd !== '' && usd !== '')) {
        alert('Input again')
    } else if (vnd === '') {
        usd = Number(usd)
        if (usd <= 0) {
            alert('Input again')
            return (0)
        } else {
            return (1)
        }
    } else {
        vnd = Number(vnd)
        if (vnd <= 0) {
            alert('Input again')
            return (0)
        } else {
            return (1)
        }
    }
}


function toVND() {
    if (checkInput()) {
        if (vnd === '') {
            result = usd * TYGIA
        } else {
            result = vnd
        }
        document.getElementById('result').innerHTML = result
    }
}

function toUSD() {
    if (checkInput()) {
        if (usd === '') {
            result = vnd / TYGIA
        } else {
            result = usd
        }
        document.getElementById('result').innerHTML = result
    }
}