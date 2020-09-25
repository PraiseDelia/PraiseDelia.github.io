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
  
  var ideal = this;
  this.send.onclick= function(e){
    var idealHour = ideal.input1.value;
    var idealMin = ideal.input2.value;
    ideal.alarmHour =  idealHour;
    ideal.alarmMin = idealMin;
    ideal.presentTime = new Date()
    var day = ideal.presentTime.getDay()
    var date = ideal.presentTime.getDate()
    var month = ideal.presentTime.getMonth()
    var year = ideal.presentTime.getFullYear()
    ideal.alarm = new Date(year, month, date, ideal.alarmHour, ideal.alarmMin);
    //  alert(this.alarm)
    // to convert both times into miliseconds
    ideal.convertTime = ideal.presentTime.getTime()
    ideal.convertAlarm = ideal.alarm.getTime();
    //find how many miliseconds are left from convertTime till convertAlarm
    ideal.timeLeft = ideal.convertAlarm - ideal.convertTime
  
    // Access the number of hours left
    ideal.hoursLeft = Math.floor(ideal.timeLeft/3600000)
    console.log(this.hoursLeft)
    //Access the number of mins left
    ideal.minutesLeft = Math.floor(ideal.timeLeft / 60000);
    ideal.Min = (ideal.minutesLeft % 60)
    var minn = ideal.Min + 1
    var minny = ideal.minutesLeft + 1
    if(ideal.minutesLeft < 60){
      alert("Your alarm will go off in "  + ideal.hoursLeft + "hours " + minny + " minutes")
    }else if(ideal.minutesLeft < 1)
    { alert("Your alarm will go off in less than a minute")
    }else {alert("Your alarm will go off in "  + ideal.hoursLeft + "hours " + minn + " minutes")
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
      var setOff = window.setTimeout(timer, ideal.timeLeft)
  }
}
 

  function Another() {
    this.createAlarm = document.createElement("button");
    this.createAlarm.setAttribute("class", "major");
    this.createAlarm.innerHTML = "Create Alarm";
    document.body.appendChild(this.createAlarm);

    this.createAlarm.onclick =  function(e){
      var newAlarm = new CallAlarm()
      
    }
  }
 var addAlarm =new Another()

 
  
  
