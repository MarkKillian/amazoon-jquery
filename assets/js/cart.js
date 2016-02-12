$(document).ready(function(){
    var products = [
      {
        name: "Amazon Fire TV",
        manufacturer: "Amazoon",
        imageSrc: "assets/images/product01.jpg",
        description: "Eligible for free shipping and returns",
        price: 89.99
      },
      {
        name: "Amazon Fire",
        manufacturer: "Amazoon",
        imageSrc: "assets/images/product02.jpg",
        description: "Eligible for free shipping and returns",
        price: 69.00
      },
      {
        name: "Amazon Echo",
        manufacturer: "Amazoon",
        imageSrc: "assets/images/product03.jpg",
        description: "Eligible for free shipping and returns",
        price: 109.99
      }
    ];

    var productTemplate = $('template#product').html();
      for(var i = 0; i < products.length; i++){
        var newProduct = $(productTemplate);
        var pData = products[i];
        
        $('h2', newProduct).text(products[i].name);
        var newManufacturer = $('<span/>').addClass('manufacturer').text('by ' + products[i].manufacturer);
        $('h2', newProduct).append(newManufacturer);
        $('.image img', newProduct).attr('src', products[i].imageSrc);
        $('h3', newProduct).text(products[i].description)
        $('.price', newProduct).text('$' + products[i].price.toFixed(2));
        $('.mobile-price', newProduct).text('$' + products[i].price.toFixed(2));
        $(newProduct).data('price', pData.price);

        $('.cart').append(newProduct);
    }
    $('.move').on('click',function(){
      if ($(this).parents().eq(4).hasClass('cart')){
        $(this).parents().eq(3).appendTo('.saved');
        $(this).text('Add to cart')
      } else {
        $(this).parents().eq(3).appendTo('.cart')
        $(this).text('Save for later')
      }
    });
  });
