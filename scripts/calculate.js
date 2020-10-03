
function Calculator(){
    this.environ = document.createElement("div");
    this.environ.setAttribute("class", "f1")
    this.capital = document.createElement("input");
    this.capital.setAttribute("class", "CCapital");
    this.capital.setAttribute("placeholder", "Capital");
    this.rate = document.createElement("input");
    this.rate.setAttribute("class", "RRate");
    this.rate.setAttribute("placeholder", "Rate");
    this.time = document.createElement("input");
    this.time.setAttribute("class", "TTime");
    this.time.setAttribute("placeholder", "Time");
    this.number = document.createElement("input");
    this.number.setAttribute("class", "NNumber");
    this.number.setAttribute("placeholder", "No of times")
    this.time.setAttribute("placeholder", "time");
    this.submit = document.createElement("button");
    this.submit.innerHTML="Submit";
    this.submit.setAttribute("class", "submit");
    this.environ.appendChild(this.capital);
    this.environ.appendChild(this.rate);
    this.environ.appendChild(this.time);
    this.environ.appendChild(this.number);
    this.environ.appendChild(this.submit)
    document.body.appendChild(this.environ);
    
    var ideal = this;
    this.check = function(){
        ideal.capyValue = ideal.capital.value;
        ideal.rateValue = ideal.rate.value;
        ideal.timeValue = ideal.time.value;
        ideal.simpleInterest = (ideal.capyValue * ideal.rateValue * ideal.timeValue)/100 ;
        ideal.amount = (ideal.capyValue * (1 + ((ideal.rateValue)/ideal.timeValue)) ** ideal.timeValue);
        ideal.compoundInterest = ideal.amount - ideal.capyValue;

    };
    
}

var First = document.createElement("p");
First.setAttribute("class", "first");
First.innerHTML = "Enter info for the first bank";
document.body.appendChild(First)
var bank1 = new Calculator();

var Second = document.createElement("p");
Second.setAttribute("class", "second");
Second.innerHTML = "Enter info for the second bank";
document.body.appendChild(Second);
var bank2 = new Calculator();

   function Compare(){
      var compare = document.createElement("button");
      compare.setAttribute("class", "comp")
      compare.innerHTML = "Compare"
      document.body.appendChild(compare);
      var answer = document.createElement("div");
      answer.setAttribute("class", "ans-box");
      var words = document.createElement("p");
      words.setAttribute("class", "word")
      answer.appendChild(words);
      document.body.appendChild(answer);

      compare. addEventListener("click", function(){
          if(bank1.amount > bank2.amount){
              words.innerHTML = "Choose Bank 1"
          }else{words.innerHTML = "Choose Bank 2"}
      })
   }
Compare()