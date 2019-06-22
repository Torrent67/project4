
  var order = new Order
  var sizes
  var toppings = [];

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

$(document).ready(function(){
  $("#neworder").submit(function(event){
    event.preventDefault();
    $("input:checkbox[name=sizes]:checked").each(function()
    {
      sizes = $(this).val();
      order.size = sizes
    })
    $("input:checkbox[name=toppings]:checked").each(function(){
        toppings = $(this).val();
        order.addToppings(toppings);
    })
console.log(order);
});
});
