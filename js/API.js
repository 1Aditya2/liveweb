// const api_url="https://jsonplaceholder.typicode.com/users"

// function getapi(url){
//     fetch(url).then((res)=>{return res.json()}).then((data)=>displayData(data)).catch((error)=>console.log(error.message))
// }
// function displayData(apidata){
//     console.log(apidata)
//     for(let i of apidata){
//         let tr=document.createElement("tr")
        
//         let td1=document.createElement("td")
//         let td2=document.createElement("td")
//         let td3=document.createElement("td")
//         let td4=document.createElement("td")

//         td1.innerText=`${i.id}`
//         td2.innerText=`${i.name}`
//         td3.innerText=`${i.email}`
//         td4.innerText=`${i.phone}`

//         tr.appendChild(td1)
//         tr.appendChild(td2)
//         tr.appendChild(td3)
//         tr.appendChild(td4)
//         document.getElementById("mytable").
//     }
// }
// getapi(api_url);


const api_url="https://api.covid19api.com/summary"


function getapi(url){
    fetch(url).then((res)=>{return res.json()}).then((data)=>displayData(data)).catch((error)=>console.log(error.message))
}

function displayData(apidata){
    console.log(apidata)
    for (let i of apidata.Countries) {
        let h1=document.createElement("h3")
        let h2=document.createElement("h3")
        let h3=document.createElement("h3")
        let h4=document.createElement("h3")
        let h5=document.createElement("h3")
        let h6=document.createElement("h3")

            
            h1.textContent=`${i[77].Country}`
            h2.textContent=`${i[77].Date}`
            h3.textContent=`${i[77].TotalConfirmed}`
            h4.textContent=`${i[77].TotalDeaths}`
            h5.textContent=`${i[77].NewConfirmed}`
            h6.textContent=`${i[77].NewDeaths}`

            
           document.getElementById("fill").appendChild(h1)
           document.getElementById("fill").appendChild(h2)
           document.getElementById("fill").appendChild(h3)
           document.getElementById("fill").appendChild(h4)
           document.getElementById("fill").appendChild(h5)
           document.getElementById("fill").appendChild(h6)

    }
}
getapi(api_url)






























