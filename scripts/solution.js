let cover = document
let unsortedData = []
class DataPicker{
    constructor(){
        this.environ = document.querySelector(".table")
        this.majorDiv= document.createElement("tr");
        this.data1 = document.createElement("td"); 
        this.inputBox1 = document.createElement("input");
        this.inputBox1.setAttribute("class", "No");
        this.data2 = document.createElement("td")
        this.inputBox2 = document.createElement("input");
        this.inputBox2.setAttribute("type", "Number");
        this.inputBox2.setAttribute("class", "CP");
        this.data3 = document.createElement("td")
        this.inputBox3 = document.createElement("input");
        this.inputBox3.setAttribute("class", "costPrice");
        this.data4 = document.createElement("td");
        this.inputBox4 = document.createElement("input");
        this.inputBox4.setAttribute("class", "quantity");
        this.data5 = document.createElement("td");
        this.data1.appendChild(this.inputBox1);
        this.majorDiv.appendChild(this.data1);
        this.data2.appendChild(this.inputBox2);
        this.majorDiv.appendChild(this.data2);
        this.data3.appendChild(this.inputBox3);
        this.majorDiv.appendChild(this.data3);
        this.data4.appendChild(this.inputBox4);
        this.majorDiv.appendChild(this.data4);
        this.environ.appendChild(this.majorDiv);
        this.data5 = document.createElement("tr")
        this.calc = document.createElement("button");
        this.calc.innerHTML = "calculate"
        this.data5.appendChild(this.calc)
        this.environ.appendChild(this.data5)

        let ideal = this;
        this.calc.addEventListener("click", ()=>{
            let cp = parseInt(ideal.inputBox2.value);
            let sp = parseInt(ideal.inputBox3.value);
            let quant = parseInt(ideal.inputBox4.value);
            let sales = sp * quant;
            let costOfGoods = cp * quant;
            let item = ideal.inputBox1.value;
            document.querySelector(".calculation").style.display = "block";
            if(sales > costOfGoods){
                let itemProfit = sales - costOfGoods;
                document.querySelector(".calculating").innerHTML = "Your profit is " + itemProfit + " from " + item;
            }else{
                let itemLoss = costOfGoods - sales;
                document.querySelector(".calculating").innerHTML = "Your loss is " + itemLoss + " from " + item;
            }
        })
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




let netSales = document.createElement("button");
netSales.setAttribute("class", "Check");
netSales.innerHTML="Check Profit and loss"
    document.body.appendChild(netSales)
    netSales.addEventListener("click", ()=> {
        let sumOfCost = 0;
        let sumOfSales = 0;

        for(find of unsortedData){
            let bought = parseInt(find.inputBox2.value)
            let sold = parseInt(find.inputBox3.value)
            let number = parseInt(find.inputBox4.value)
            let totalCost = bought * number;
            let totalSales = sold * number;
            sumOfCost += totalCost;
            sumOfSales += totalSales;
        }  
        if(sumOfCost > sumOfSales){
            let amountLost = sumOfCost - sumOfSales;
            document.getElementById("pop-up").style.display = "block"
            document.getElementById("write").innerHTML = "You Incured a gross Loss of " + amountLost + " Naira"
        }else{
            let profitAmount = sumOfSales - sumOfCost;
            document.getElementById("pop-up").style.display = "block"
            document.getElementById("write").innerHTML = "You have a gross Profit of " + profitAmount + " Naira"
        }
    })

    