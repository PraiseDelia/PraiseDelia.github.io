
let unsortedData = []
class DataPicker{
    constructor(){
        this.majorDiv= document.createElement("div") 
        this.inputBox1 = document.createElement("input");
        this.inputBox1.setAttribute("placeholder", "No.");
        this.inputBox1.setAttribute("type", "Number");
        this.inputBox1.setAttribute("class", "No");
        this.inputBox2 = document.createElement("input");
        this.inputBox2.setAttribute("placeholder", "Amount");
        this.inputBox2.setAttribute("type", "Number");
        this.inputBox2.setAttribute("class", "Amount");
        this.majorDiv.appendChild(this.inputBox1);
        this.majorDiv.appendChild(this.inputBox2);
        document.body.appendChild(this.majorDiv);
    }
}

//to let user add one Row at a time
let oneRow = document.createElement("Button");
oneRow.setAttribute("class", "oneRow");
oneRow.innerHTML = "Add one Row"
document.body.appendChild(oneRow);
oneRow.addEventListener("click", ()=>{
    let anotherRow = new DataPicker()
    unsortedData.push(anotherRow)
})

//to let user add many rows at a time
let manyRows = document.createElement("button");
manyRows.setAttribute("class", "manyRows");
manyRows.innerHTML = "Add many Rows"
document.body.appendChild(manyRows);
manyRows.addEventListener("click", ()=>{
    let row1 = new DataPicker()
    let row2 = new DataPicker()
    let row3 = new DataPicker()
    let row4 = new DataPicker()
    let row5 = new DataPicker()
    let row6 = new DataPicker()
    let row7 = new DataPicker()

    unsortedData.push(row1, row2, row3, row4, row5, row6, row7)
})



let gret = document.createElement("button")
gret.setAttribute("class", "Check")
gret.innerHTML="Check Profit and loss"
    document.body.appendChild(gret)
    gret.addEventListener("click", ()=> {
        let amountLost = 0;
        let profit = 0;
        let actualPrice = 0;
        let totalItemGain = 0;
        let totalItemLoss = 0;
        let regularPrice = 0;
        let costPrice = parseInt(unitPrice.value);
        for(find of unsortedData){
            let items = parseInt(find.inputBox1.value)
            let amount = parseInt(find.inputBox2.value)
            let product = items * amount;
            let supposedProduct = costPrice * items
            if(product > supposedProduct){
                profit += product
                totalItemGain += items;
            }else if(product < supposedProduct){
                amountLost += product;
                totalItemLoss += items;
            }else{actualPrice += product;
            regularPrice += items;}
        }
        document.getElementById("pop-up").style.display = "block"
        document.getElementById("write").innerHTML = "Loss: " + totalItemLoss + " items at " +  amountLost + "naira" + "<br>" 
        +"Profit: " + totalItemGain + " items at " + profit + "naira " +  "<br>" +
        "Sold at cost price: " + regularPrice + "items at " + actualPrice + "naira "
    })

    let priceLabel = document.createElement("label")
    priceLabel.innerHTML = "Cost Price"
    priceLabel.setAttribute("class", "label")
    let unitPrice = document.createElement("input");
    unitPrice.setAttribute("type", "number");
    unitPrice.setAttribute("class", "unitNumber")
    document.body.appendChild(priceLabel);
    document.body.appendChild(unitPrice);
     
