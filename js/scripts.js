$(document).ready(function(){

  var order = new Order();
  var size;
  var toppings;


    Order.prototype.addOrder = function (newOrder) {
      newOrder.id = this.assignId();
      this.order.push(neworder);
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
    function Order () {
      this.order = [];
      this.currentId= 0
    }

  });
