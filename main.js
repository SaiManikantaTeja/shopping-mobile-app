$(document).ready(function() {
    const minus = $('.quantity_minus');
    const plus = $('.quantity_plus');
    const input = $('.quantity_input');
    minus.click(function(e) {
      e.preventDefault();
      var value = input.val();
      if (value > 1) {
        value--;
      }
      input.val(value);
    });
    
    plus.click(function(e) {
      e.preventDefault();
      var value = input.val();
      value++;
      input.val(value);
    })
  });