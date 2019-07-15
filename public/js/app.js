

const converterForm = document.querySelector('form')
const date = document.querySelector('#date')
//const sum = document.querySelector('#sum')
const messageOne = document.querySelector('#message-1')
//const messageTwo = document.querySelector('#message-2')

// converterForm.addEventListener('submit', (e) => {
//     e.preventDefault()

//     messageOne.textContent = "Loading..."
//     //messageTwo.textContent = ''

//     fetch('/convert?date=' + date.value).then((res) => {
//         res.json().then((data) => {
//             if (data.error){
//                 messageOne.textContent = "There is an error"
//             } else {
//                 messageOne.textContent = data.value
//             }

//             // if (sum.value == 0) {
//             //     messageOne.textContent = data.value
//             // } else {
//             //     messageOne.textContent = data.value
//             //     //messageTwo.textContent = data.value*sum.value
//             // }

            
//         })
//     })
// })

converterForm.addEventListener('input', (e) => {
    e.preventDefault()

    messageOne.textContent = "Loading..."
    //messageTwo.textContent = ''

    fetch('/convert?date=' + date.value).then((res) => {
        res.json().then((data) => {
            if (data.error){
                messageOne.textContent = "There is an error"
            } else {
                messageOne.textContent = data.value
            }

            // if (sum.value == 0) {
            //     messageOne.textContent = data.value
            // } else {
            //     messageOne.textContent = data.value
            //     //messageTwo.textContent = data.value*sum.value
            // }

            
        })
    })
})
