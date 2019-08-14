$(function() {
  function buildHTML(message){
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
                    <img class="lower-message__image" src="/message/image/${message.image}">
                    </p>
                  </div>
                </div>`
    return html;
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault()
    var formData = new FormData(this);
    var url = window.location.href + '/comments'
                    $.ajax({
                      url: href,
                      type: "POST",
                      data: formData,
                      dataType: 'json',
                      processData: false,
                      contentType: false
                    })
                    .done(function(message){
                      var html = buildHTML(message);
                      $('.comments').append(html)
                      $('.textbox').val('')
                    })
                  })
                });


                  