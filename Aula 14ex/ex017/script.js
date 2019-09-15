function tabuada() {
    let num = Number(document.getElementById("txtnum").value)
    let res = document.getElementById("res")
    res.innerHTML = ""
    for (let i = 0; i <= 10; i++){
        res.innerHTML += `${num} * ${i} = ${num*i} <br>`   
    }
}