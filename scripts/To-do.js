    var container = document.createElement("div");
    var holder = document.createElement("table");
    holder.setAttribute("class", "tab");
    var phase1 = document.createElement("tr");
    var header1 = document.createElement("th");
    header1.innerHTML = "Items";
    var header3 = document.createElement("th");
    header3.innerHTML= "Time";
    header4 = document.createElement("th");
    header4.innerHTML = "Submit"
    phase1.appendChild(header1);
    phase1.appendChild(header3);
    phase1.appendChild(header4)
    holder.appendChild(phase1);
    container.appendChild(holder)
    document.body.appendChild(container);

function DoList(){
    this.phase2 = document.createElement("tr");
    this.tdata1 = document.createElement("td");
    this.textarea = document.createElement("textarea");
    this.tdata3 = document.createElement("td");
    this.hour = document.createElement("input");
    this.hour.setAttribute("class", "time");
    this.hour.setAttribute("placeholder", "hour");
    this.min = document.createElement("input");
    this.min.setAttribute("placeholder", "min");
    this.min.setAttribute("class", "time");
    this.tdata4 = document.createElement("td")
    this.submit = document.createElement("button")
    this.submit.innerHTML = "Save"
    this.phase2.appendChild(this.tdata1)
    this.tdata1.appendChild(this.textarea);
    this.tdata3.appendChild(this.hour);
    this.tdata3.appendChild(this.min);
    this.phase2.appendChild(this.tdata3)
    this.tdata4.appendChild(this.submit)
    this.phase2.appendChild(this.tdata4)
    holder.appendChild(this.phase2);

    var ideal = this;
    this.submit.addEventListener("click", () => {
        ideal.submit.style.display = "none";
        ideal.check = document.createElement("input");
        ideal.check.setAttribute("type", "checkbox");
        ideal.check.setAttribute("class", "check")
        ideal.tdata4.appendChild(ideal.check)
    })
    this.submit.addEventListener("click", () => {
       another = new DoList();
       ideal.accessDate = new Date()
        var year = ideal.accessDate.getFullYear();
        var month = ideal.accessDate.getMonth();
        var date = ideal.accessDate.getDate();
        var hour = ideal.hour.value;
        var min = ideal.min.value;
        ideal.listTime = new Date(year, month, date, hour, min);
        ideal.convertTime = ideal.accessDate.getTime()
        ideal.convertList = ideal.listTime.getTime();
        ideal.timeLeft = ideal.convertTime - ideal.convertList;
      setTimeout(() => {
       alert("its time")
      }, ideal.timeLeft)
       console.log(ideal.listTime)
    })
}
start = new DoList()
