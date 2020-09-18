function Chatbot(name, creator="google"){
  this.name = name;
  this.creator = creator;
  this.bot = ["hello", "hi", "hello,how is your day going", 
    "I'm fine", "am okay",
    "my name is " + this.name, "I'm " + this.name,
    "It was " + this.creator + " who programmed me", "sorry, I don't understand you maybe you should ask google"
    ];
  this.user = ["hello", "hey", "goodday",
    "how're u", "how are you",
    "what is your name", "what's your name",
    "who created you", "who programmed you",
    ];
  this.chatEnviron = document.createElement('div');
  this.chatEnviron.setAttribute('class', 'chat-environ');
  this.messageBox = document.createElement("div");
  this.messageBox.setAttribute("class", "msgBox");
  this.chatEnviron.appendChild(this.messageBox);
  this.inputSpace = document.createElement('input');
  this.inputSpace.setAttribute("class", "inputId");
  this.inputSpace.setAttribute("type", "text");
  this.submit = document.createElement("button");
  this.submit.setAttribute("class", "btn");
  this.submit.innerHTML = "send";
  this.chatEnviron.appendChild(this.inputSpace);
  this.chatEnviron.appendChild(this.submit);
  this.message = "";
  this.begin = function(){
    document.body.appendChild(this.chatEnviron);
  }
  function createMessage(message, messageBox, type="send"){
    var box = document.createElement("div");
    box.setAttribute("class", "chat-msg");
    var text = document.createElement("span");
    if(type == "recieve"){
      text.style.backgroundColor = "blue";
      text.setAttribute("class", "text-msg-recieve");
    }else{
      text.style.backgroundColor = "green";
      text.setAttribute("class", "text-msg-send");
    }
    box.appendChild(text);
    messageBox.appendChild(box);
    text.innerHTML = message;
  }
  this.recieve = function(message){
    this.message = message;
    createMessage(message, this.messageBox, "recieve")
  }
  var self = this;
  function checker(){
    var inputMessage = self.inputSpace.value;
    if(self.message != inputMessage){
      self.recieve(inputMessage);
      for(var i = 0; i < self.user.length; i++){
        var innerUser = self.user[i];
        var check = self.message.includes(innerUser);
        if(check == true){
          self.send(self.bot[i])
        }
      }
    }
  }
    
  this.send = function(message){
    createMessage(message, this.messageBox, "send");
  }
  var self = this;
  this.submit.onclick = function(e)
 {
    e.preventDefault();
    checker();
  }
}
var chat1 = new Chatbot("sky", "Delia")

window.onload = function(){
    chat1.begin()
}
