var fullName = 'Nguyen Phuoc Minh Hieu'
alert(fullName) 
console.log(fullName)
confirm(fullName)
prompt(fullName)
setTimeout(function(){
    alert(fullName)
}, 100)

setTimeout(function(name) {
    alert("Xin chào, " + name + "!");
  }, 3000, "John");

  setInterval(function(){
    confirm(fullName)
  }, 8000)