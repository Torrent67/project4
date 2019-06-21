$(document).ready(function(){

  var order = new Order();
  var size;
  var toppings;

  $(function(){
    function Order () {
      this.order = [],
      this.currentId= 0
    }

    Order.prototype.addOrder = function (newOrder) {
      newOrder.id = this.assignId();
      this.order.push(neworder);
    }
    Order.prototype.assignId = function () {
      this.currentId +=1;
      return this.currentId;
    }

    function Size (name, balance) {
      this.name = name,
      this.size = size
    }

    Account.prototype.Size = function(size) {
      this.size += size;
      this.size.push(size);
      return this.size;
    }
    Account.prototype.Toppings = function(toppings) {
      this.toppings.push(toppings);toppings
      this.balance -= toppings;
      return this.size;
    }
    });
  });
