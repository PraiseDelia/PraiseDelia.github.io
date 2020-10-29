class GPCalc{
    constructor(){
        this.environ = document.createElement("div");
        this.myTable = document.createElement("table");
        this.phase1 = document.createElement("tr");
        this.header1 = document.createElement("th");
        this.header1.innerHTML = "Course";
        this.header2 = document.createElement("th");
        this.header2.innerHTML = "Credit Load";
        this.header3 = document.createElement("th");
        this.header3.innerHTML = "Your Grade";
        this.header4 = document.createElement("th");
        this.header4.innerHTML = "Submit"
        this.phase1.appendChild(this.header1);
        this.phase1.appendChild(this.header2);
        this.phase1.appendChild(this.header3);
        this.phase1.appendChild(this.header4);
        this.environ.appendChild(this.phase1);
        document.body.appendChild(this.environ);
    }
    addMore(){
        this.phase2 = document.createElement("tr");
        this.row1 = document.createElement("td")
        this.innerRow1 = document.createElement("input");
        this.innerRow1.setAttribute("class", "Course")
        this.row2 = document.createElement("td")
        this.innerRow2 = document.createElement("input");
        this.innerRow2.setAttribute("type", "number");
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
        this.environ.appendChild(this.phase2)

        var ideal = this;
        this.submit.addEventListener("click", ()=>{
            var CreditL = ideal.innerRow2.value;
            var Grade = ideal.innerRow3.value;
            var gradeNumber;
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
                    break;
                default:
                    gradeNumber = 0;
            }
        ideal.total = gradeNumber * CreditL
        check.addMore();
        });

    }
   
}
var check = new GPCalc()
check.addMore()
