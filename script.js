$(document).ready(function() {
    let addCart=0;
    let likeCount = 0;

       $('.l1').click(function(event) {
           event.preventDefault();
           $(this).toggleClass('liked');
           if ($(this).hasClass('liked')) {
               likeCount++;
           } else {
               likeCount--;
           }
           $('#like-count').text(likeCount);
       });


        $('.custom-btn').click(function(event) {
                   event.preventDefault();
                   $(this).toggleClass('cart');
                   if ($(this).hasClass('cart')) {
                       addCart++;
                   } else {
                       addCart--;
                   }
                   $('#add').text(addCart);
               });
});

