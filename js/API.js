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
    let c=apidata.Countries[77].Country
    let t=apidata.Countries[77].Date
    let tc=apidata.Countries[77].TotalConfirmed
    let td=apidata.Countries[77].TotalDeaths
    let nc=apidata.Countries[77].NewConfirmed
    let nd=apidata.Countries[77].NewDeaths

    let pre = document.createElement("pre");
    console.log(tc);
    pre.innerHTML = `<span>Country Name: </span> ${c}\n<span>Date: </span> ${t} \n<span>Total Cases: </span> ${tc} \n<span>Total Deaths: </span>${td} \n<span>New Cases: </span>${nc} \n<span>New Deaths: </span>${nd}`

    document.getElementById("info").appendChild(pre)
}
getapi(api_url)






























