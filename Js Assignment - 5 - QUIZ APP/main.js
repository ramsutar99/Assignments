







console.log('hello')
console.log('hello')
console.log('hello')
const content = document.querySelector('.content')
const questions = document.querySelector('.questions')
const score = document.querySelector('.score')


fetch('https://5d76bf96515d1a0014085cf9.mockapi.io/quiz')

.then((res)=>{
    let data = res.json()
    // function for data making in html
    return data

})

.then( (data)=>{
    // console.log(data[0].id)
    for(let i = 0; i < data.length; i++){
        const q = document.createElement('p')   
        q.innerHTML = `Q.${data[i].id} ${data[i].question}</br>`

        const options = data[i].options

        // for(let j = 0; j < options.length; j++){
           

        //     // create inputs
        //     const input = document.createElement('input')
        //     input.id = 'options'+ j
        //     input.setAttribute('type','radio')
        //     input.value = data[i].options[j]  

        //     // create label
        //     const label = document.createElement('label')
        //     label.setAttribute('for','options'+ j)
           
        //     label.innerHTML = `  ${options[j]} <br> <br>`
        //     label.append(input)


        //     q.append(label)
        // }
        for(let j = 0; i < options.length; j++){

            const label = document.createElement('label')
        
            label.innerHTML = `<label for = ${option.j} > < input type="radio" id=" option${j}"> ${options[j]} </lable> <br>`

            q.append(label)
        }

        
        const form = document.getElementById('form')
        
        const line = document.createElement('div')
        line.style.display = 'block'
        line.className = 'line'
        
        form.append(q, line)
    }
})

.then((res)=> {
    console.log(res)
    let data = res
    let options = data[0].options[0]
    console.log(options)
})


.catch((err)=>{
    console.log(`this is an error`+ err)
})


