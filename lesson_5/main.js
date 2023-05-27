const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const eur = document.querySelector('#eur')


som.addEventListener("input", (e) => {
    const request = new XMLHttpRequest()
    request.open("GET", "data.json")
    request.setRequestHeader("Content-Type", "application/json")
    request.send()

    request.addEventListener("load", () => {
        const data = JSON.parse(request.response)
        usd.value = (som.value / data.usd).toFixed(2)
        eur.value = (som.value / data.eur).toFixed(2)

    })
})

















































































// const convert = (elem, target, isTrue) => {
//     elem.addEventListener("input", () => {
//       const request = new XMLHttpRequest()
//         request.open("GET", "data.json")
//         request.setRequestHeader("Content-Type", "application/json")
//         request.send()
//
//         request.addEventListener("load", () => {
//             const data = JSON.parse(request.response)
//             if(isTrue) {
//                 target.value = (elem.value / data.usd).toFixed(2)
//             }else{
//                 target.value = (elem.value * data.usd).toFixed(2)
//             }
//             if (elem.value === ''){
//                 target.value = ''
//             }
//         })
//     })
// }
// convert(som, usd, 42)
// convert(usd, som, "")