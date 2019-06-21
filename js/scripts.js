$(document).ready(function(){

  var order = new Order();
  var size
  var toppings = [];

  function Order() {
    this.order = [];
    this.currentId= 0
}

  Order.prototype.addOrder = function (name, time, size, toppings) {
  this.name = name;
  this.time = time;
  this.size = size;
  order.addToppings ();
  this.order.push(neworder);
}

  Order.prototype.addToppings = function(toppings) {
  this.toppings.push(toppings);
}



});
