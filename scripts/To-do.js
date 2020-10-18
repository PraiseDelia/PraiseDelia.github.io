

class DoList{
    constructor(){
        this.contain = document.querySelector(".container");
        this.holder = document.createElement("table");
        this.holder.setAttribute("class", "tab");
        this.phase1 = document.createElement("tr");
        this.header1 = document.createElement("th");
        this.header1.innerHTML = "Items";
        this.header3 = document.createElement("th");
        this.header3.innerHTML= "Time";
        this.header4 = document.createElement("th");
        this.header4.innerHTML = "Submit"
        this.phase1.appendChild(this.header1);
        this.phase1.appendChild(this.header3);
        this.phase1.appendChild(this.header4)
        this.holder.appendChild(this.phase1);
        this.contain.appendChild(this.holder)
        document.body.appendChild(this.contain);
        
    }

    repeat(){
        this.phase2 = document.createElement("tr");
        this.tdata1 = document.createElement("td");
        this.textarea = document.createElement("textarea");
        this.tdata3 = document.createElement("td");
        this.hour = document.createElement("input");
        this.hour.setAttribute("class", "time");
        this.hour.setAttribute("placeholder", "Hr");
        this.min = document.createElement("input");
        this.min.setAttribute("placeholder", "Min");
        this.min.setAttribute("class", "time");
        this.tdata4 = document.createElement("td")
        this.submit = document.createElement("button");
        this.submit.innerHTML = "Save";
        this.submit.setAttribute("class", "save")
        this.phase2.appendChild(this.tdata1)
        this.tdata1.appendChild(this.textarea);
        this.tdata3.appendChild(this.hour);
        this.tdata3.appendChild(this.min);
        this.phase2.appendChild(this.tdata3)
        this.tdata4.appendChild(this.submit)
        this.phase2.appendChild(this.tdata4)
        this.holder.appendChild(this.phase2);
    

        var ideal = this;
        this.submit.addEventListener("click", () => {
            ideal.submit.style.display = "none";
            ideal.check = document.createElement("input");
            ideal.check.setAttribute("type", "checkbox");
            ideal.check.setAttribute("class", "check")
            ideal.tdata4.appendChild(ideal.check)
        })
        this.submit.addEventListener("click", () => {
        var another = repeat();
        ideal.accessDate = new Date()
            var say = ideal.textarea.value;
            var year = ideal.accessDate.getFullYear();
            var month = ideal.accessDate.getMonth();
            var date = ideal.accessDate.getDate();
            var hour = ideal.hour.value;
            var min = ideal.min.value;
            ideal.listTime = new Date(year, month, date, hour, min);
            ideal.convertTime = ideal.accessDate.getTime()
            ideal.convertList = ideal.listTime.getTime();
            ideal.timeLeft = ideal.convertList - ideal.convertTime;
        setTimeout(() => {
        alert(say)
        }, ideal.timeLeft)
        }) 
    }

}
let call = new DoList()
call.repeat()
