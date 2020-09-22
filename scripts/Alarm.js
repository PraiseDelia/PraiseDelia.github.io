function CallAlarm(){
  this.secondDiv = document.createElement("div");
  this.secondDiv.setAttribute("class", "second-Div");
  this.input1 = document. createElement("input");
  this.input1.setAttribute("class", "inputClass1")
  this.input1.setAttribute("placeholder", "Hour");
  this.input2 = document.createElement("input");
  this.input2.setAttribute("class", "inputClass2");
  this.input2.setAttribute("placeholder", "Min");
  this.send = document.createElement("button");
  this.send.setAttribute("class", "submit");
  this.send.innerHTML = "Set Alarm";
  this.secondDiv.appendChild(this.input1)
  this.secondDiv.appendChild(this.input2);
  this.secondDiv.appendChild(this.send);
  document.body.appendChild(this.secondDiv)
      
  this.send.onclick= function(e){
    this.alarmHour =  document.querySelector(".inputClass1").value;
    this.alarmMin = document.querySelector(".inputClass2").value
    this.presentTime = new Date()
    var day = this.presentTime.getDay()
    var date = this.presentTime.getDate()
    var month = this.presentTime.getMonth()
    var year = this.presentTime.getFullYear()
    this.alarm = new Date(year, month, date, this.alarmHour, this.alarmMin);
    //  alert(this.alarm)
    // to convert both times into miliseconds
    this.convertTime = this.presentTime.getTime()
    this.convertAlarm = this.alarm.getTime();
    //find how many miliseconds are left from convertTime till convertAlarm
    this.timeLeft = this.convertAlarm - this.convertTime
  
    // Access the number of hours left
    this.hoursLeft = Math.floor(this.timeLeft/3600000)
    console.log(this.hoursLeft)
    //Access the number of mins left
    this.minutesLeft = Math.floor(this.timeLeft / 60000);
    this.Min = (this.minutesLeft % 60)
    var minn = this.Min + 1
    var minny = this.minutesLeft + 1
    if(this.minutesLeft < 60){
      alert("Your alarm will go off in "  + this.hoursLeft + "hours " + minny + " minutes")
    }else if(this.minutesLeft < 1)
    { alert("Your alarm will go off in less than a minute")
    }else {alert("Your alarm will go off in "  + this.hoursLeft + "hours " + minn + " minutes")
    }
    function timer(){
      alert("Rise and shine ")
      //snoozeStart will stall the execution of the checker function till its 5mins
      var snoozeStart = function snoozeOn (){window.setTimeout(      
        function checker(){
          alert("You've had 5minutes of extra sleep")
          var snoozeAgain = prompt("do u want to snooze again? ")
          if(snoozeAgain != "no"){
            snoozeStart()
          }else{
            alert("Am glad you're awake")
          }
        }
        , 3000)
      }
    // this is to call the function
    var snoozeAgain = prompt(" Do you want to snooze")
    if(snoozeAgain == "yes"){
      snoozeStart()
    }else{
      alert("am glad youre awake")
    }
  }
  // note that everything about snoozing took place inside the timer function. SetOff will now stall the execution of the timer fnctn until the time the user has set for the alarm has reached
      var setOff = window.setTimeout(timer, this.timeLeft)
  }
}
 
  var alarm1 = new CallAlarm()
  var alarm2 = new CallAlarm()
  

 
