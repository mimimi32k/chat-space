$(function() {
  function buildHTML(message){
    var image = message.image ? `<img src="${message.image}" width="256" height="256">` : '';
    var html = `<div class="main_contents__body__timeline" data-message-id="${message.id}">
                  <div class="main_contents__body__timeline__info">
                   <div class="main_contents__body__timeline__info__user">
                     ${message.user_name}
                   </div>
                   <div class="main_contents__body__timeline__info__date">
                     ${message.time}
                   </div>
                  </div>
                  <div class="main_contents__body__timeline__message">
                    <p class="main_contents__body__timeline__message__content">
                      ${message.content}
                    </p>
                     ${image}
                  </div>
                </div>`
    return html;
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault()
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(message){
      var html = buildHTML(message);
      $('.main_contents__body').append(html);
      $('.new_message')[0].reset();
      $('.submit-btn').prop('disabled', false);
      $('.main_contents__body').animate({scrollTop: $('.main_contents__body')[0].scrollHeight}, 500);
    })
    .fail(function(){
      alert('error');
    })
  })
  var reloadMessages = function() {
    
    var last_message_id = $('.main_contents__body__timeline:last').data("message-id");
    console.log(last_message_id); 
    $.ajax({
      url: 'api/messages',
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      console.log(messages)
      var insertHTML = ''; 
      messages.forEach(function(message){ 
        insertHTML = buildHTML(message); 
        $('.main_contents__body').append(insertHTML);
      });
      $('.main_contents__body').animate({scrollTop: $('.main_contents__body')[0].scrollHeight}, 500);
    })
    .fail(function() {
      // alert('error');
    });
  };
  setInterval(reloadMessages, 5000); 
});               
                

                  