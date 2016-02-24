$(document).ready(function(){

  $.get('https://www.batchacademy.com/api/wdfne/dummy/amazoon-products', function(products){
// In here we have access to the data from the server
  var updateView = function(){
    var cart = $('.cart .product');
    var saved = $('.saved .product');

    if(cart.length === 0){
      $('.cart .empty').show();
      $('.cart-total').hide();
    } else {
      $('.cart .empty').hide();
      $('.cart-total').show();
    }

    if(saved.length === 0){
      $('.saved .empty').show();
    } else {
      $('.saved .empty').hide();
    }

    var cartTotal = 0;
    $(cart).each(function(){
      cartTotal += Number($(this).data('price'));
    });

      $('.cart-total span').text('$', + cartTotal.toFixed(2));

      updateView();  

    };

    var stub = $('template#product').html();
    
    for(var i = 0; i < products.length; i++){
      var newProduct = $(stub);
      var pData = products[i];

      $('.content h2', newProduct).text(pData.name);
      var manufacturerSpan = $('<span/>').addClass('manufacturer').text(' by ' + pData.manufacturer);
      $('.content h2', newProduct).append(manufacturerSpan);
      $('.content h3', newProduct).text(pData.description);
      $('.image img', newProduct).attr('src', pData.imageSrc);
      $('.price, .mobile-price', newProduct).text('$' + pData.price.toFixed(2));
      $(newProduct).data('price', pData.price);

      $('.cart').append(newProduct);
    }
        
    $('.move').on('click',function(){
      if($(this).parents().eq(4).hasClass('cart')){
      $(this).parents().eq(3).prependTo('.saved');
      $(this).text('Move to cart')
    } else {
      $(this).parents().eg(3).appendTo(.'cart');
      $(this).text('Save for later');
    }

    updateView();

    });
  });
// Out here we don't
    
