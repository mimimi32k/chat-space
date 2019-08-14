$(function() {
  function buildHTML(message){
    var image = ""
    message.image ? image = `<img src="${message.image}">` : image = ""

    var html = `<div class="main_contents__body__timeline">
                  <div class="main_contents__body__timeline__info">
                   <div class="main_contents__body__timeline__info__user">
                     ${message.user_name}
                   </div>
                   <div class="main_contents__body__timeline__info__date">
                     ${message.created_at}
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
      $('.main_contents__body').append(html)
      $('#message_content').val('')
      $('.submit-btn').prop('disabled', false);
      $('.main_contents__body').animate({scrollTop: $('.main_contents__body')[0].scrollHeight}, 500);
    })
    .fail(function(){
      alert('error');
    })
  })
});               
                

                  