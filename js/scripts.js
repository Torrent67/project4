
  var order = new Order
  var sizes
  var toppings = [];
  var name
  var time
  var addons = 1

  function Order() {
    this.toppings = [];
    this.size = 0;
}

  Order.prototype.addOrder = function (name, time, size, toppings) {
  this.name = name;
  this.time = time;
  this.size = size;
  order.addToppings ();
  this.order.push(neworder);
}

  Order.prototype.addToppings = function (toppings) {
  this.toppings.push(toppings);
}

 Order.prototype.Price = function (){
  this.cost += this.size
  this.cost += addons
 }

$(document).ready(function(){

$("#neworder").submit(function(event){
    event.preventDefault();
    name = $("input#name").val();
    time = $("#time").val();

    $("input:checkbox[name=sizes]:checked").each(function()
  {
      sizes = parseInt($(this).val());
      order.size = sizes
  })
    $("input:checkbox[name=toppings]:checked").each(function(){
      toppings = $(this).val();
      order.addToppings(toppings);
      addons += 1;
})
      order.Price();
  $("#currentOrder").append(name +"<br>" + time + "<br>" + order.size + "inch" + "<br>" + order.toppings + "<br>" + "Pizza")

console.log(name);
console.log(time);
console.log(order);
});
});
