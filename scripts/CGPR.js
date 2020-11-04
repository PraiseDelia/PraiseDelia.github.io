var collect = []
var unitSum = []
class GPCalc{
    constructor(course, gradeNumber, CreditL ){
        this.phase2 = document.createElement("tr");
        this.row1 = document.createElement("td")
        this.innerRow1 = document.createElement("input");
        this.innerRow1.setAttribute("class", "Course");
        this.innerRow1.setAttribute("placeholder", "Course")
        this.row2 = document.createElement("td")
        this.innerRow2 = document.createElement("input");
        this.innerRow2.setAttribute("type", "number");
        this.innerRow2.setAttribute("placeholder", "unit Load");
        this.row3 = document.createElement("td")
        this.innerRow3 = document.createElement("input");
        this.innerRow3.setAttribute("placeholder", "capital letters");
        this.submit = document.createElement("td");
        this.innerSubmit = document.createElement("button");
        this.innerSubmit.innerHTML = "Submit";
        this.phase2.appendChild(this.row1);
        this.row1.appendChild(this.innerRow1);
        this.phase2.appendChild(this.row2);
        this.row2.appendChild(this.innerRow2);
        this.phase2.appendChild(this.row3);
        this.row3.appendChild(this.innerRow3);
        this.phase2.appendChild(this.submit);
        this.submit.appendChild(this.innerSubmit)
        document.body.appendChild(this.phase2)
        
        var ideal = this;
        this.submit.addEventListener("click", ()=>{
            ideal.CreditL = ideal.innerRow2.value;
            ideal.Grade = ideal.innerRow3.value;
            ideal.gradeNumber;
            switch (ideal.Grade) {
                case "A":
                    ideal.gradeNumber = 5;
                    break;
                case "B":
                    ideal.gradeNumber = 4;
                    break;
                case "C":
                    ideal.gradeNumber = 3;
                    break;
                case "D":
                    ideal.gradeNumber = 2;
                    break;
                case "E":
                    ideal.gradeNumber = 1;
                    break;
                default:
                    ideal.gradeNumber = 0;
            }
            ideal.total = ideal.gradeNumber * ideal.CreditL
            collect.push(ideal.total);
            ideal.string = parseInt(ideal.CreditL)
            unitSum.push(ideal.string);
        });
    }
}

var addNew = document.createElement("button")
addNew.innerHTML = "Add another Course"
document.body.appendChild(addNew)
addNew.addEventListener("click", ()=> {
    var subject = new GPCalc(course, gradeNumber, CreditL);
    var course = subject.innerRow1.value;
    var gradeNumber = subject.gradeNumber;
    var CreditL = subject.CreditL
    
})
    
var calc = document.createElement("button")
calc.innerHTML = "Calculate GP"
document.body.appendChild(calc)
calc.addEventListener("click", ()=> {
    var sum = 0;
    var totalUnit = 0;
    for(var i = 0; i < collect.length; i++){
        sum += collect[i]
        totalUnit += unitSum[i]
    }
    var GP = sum / totalUnit;
    document.querySelector(".GPHolder").innerHTML = "Your CGPA = "+ GP
})
