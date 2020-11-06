var collect = []

class GPCalc{
    constructor(){
// this contains all the DOM elements
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

// this new button will create an object and push the entire object into the "collect array"
var addNew = document.createElement("button")
addNew.innerHTML = "Add another Course"
document.body.appendChild(addNew)
addNew.addEventListener("click", ()=> {
    var subject = new GPCalc();
    collect.push(subject)
    
})
 
//Here we access the needed properties of the objects in the array usin a for..of loop
var calc = document.createElement("button")
calc.innerHTML = "Calculate GP"
document.body.appendChild(calc)
calc.addEventListener("click", ()=> {

    let sum = 0; //holds product of creditLoad & Grade for all objects
    let totalUnits = 0;//holds sum of creditLoads for all objects
    for(find of collect){
        var Grade = find.innerRow3.value
        var gradeNumber;
// the switch will convert the letters to particular figures
        switch (Grade) {
            case "A":
                gradeNumber = 5;
                break;
            case "B":
                gradeNumber = 4;
                break;
            case "C":
                gradeNumber = 3;
                break;
            case "D":
                gradeNumber = 2;
                break;
            case "E":
                gradeNumber = 1;
            default:
                gradeNumber = 0;
                break;
        }
        var product = gradeNumber * find.innerRow2.value
        sum += product
        totalUnits += parseInt(find.innerRow2.value);
    }
    console.log(sum, totalUnits)
    var CGPA = sum/totalUnits;
    document.querySelector(".GPHolder").innerHTML = "CGPA = " + CGPA
   
})
