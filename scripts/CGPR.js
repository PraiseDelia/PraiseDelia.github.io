var collect = []

class GPCalc{
    constructor(course, gradeNumber, CreditL){
        this.course = course;
        this.gradeNumber = gradeNumber;
        this.CreditL = CreditL;
        this.product = gradeNumber * CreditL
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
        
    }
}

var addNew = document.createElement("button")
addNew.innerHTML = "Add another Course"
document.body.appendChild(addNew)
addNew.addEventListener("click", ()=> {
    var subject = new GPCalc(course, gradeNumber, CreditL);
    var course = subject.innerRow1.value;
    var CreditL = subject.innerRow2.value;
    var gradeNumber = subject.innerRow3.value;
    
    collect.push(subject)
    
})
    
var calc = document.createElement("button")
calc.innerHTML = "Calculate GP"
document.body.appendChild(calc)
calc.addEventListener("click", ()=> {
    let sum = 0;
    let totalUnits = 0;
    for(find of collect){
        sum += parseInt(find.product);
        totalUnits += parseInt(find.CreditL);
        console.log(find.CreditL)
    }
    console.log(totalUnits)
    var CGPA = sum/totalUnits;
    document.querySelector(".GPHolder").innerHTML = "CGPA = " + CGPA
   
})
