console.log("Currency Converter is Working")


const populate = async (value, currency) => {

    url = 'https://api.currencyapi.com/v3/latest?apikey=cur_live_yNBjHYMzQsRMIFtQC9k9wyAVZsLffZSYwo6WLiyt';

    let response = await fetch (url);
    let rjson = await response.json();
    document.querySelector(".output").style.display = "block";
    

   let myStr =' ';
    for(let key of Object.keys (rjson["data"])){
        myStr +=  `<tr>
                        <td>${key}</td>
                        <td>${rjson["data"][key]["code"]}</td>
                        <td>${Math.round(rjson["data"][key]["value"] * value)}</td>
                    </tr>`
    }
    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = myStr;
}

const btn = document.querySelector(".btn");
btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    

    const value = parseInt(document.querySelector("input[name='quantity']").value); 
    const currency = document.querySelector("select[name='currency']").value;
    
    populate(value, currency);
})

 