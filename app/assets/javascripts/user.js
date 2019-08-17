$(function(){
  function buildHTML(user){
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${user.name}</p>
                <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
                </div>`
  $("#user-search-result").append(html);
  }
  
  $('#user-search-field').on('keyup',function(){
    var input = $('#user-search-field').val();

    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json'
    })

   .done(function(users){
     $('#user-search-result').empty();
      users.forEach(function(user){ 
        buildHTML(user);
      });
   })
   .fail(function(){
     alert('ユーザー検索に失敗しました');
   })
  });
  $('#user-search-result').on('click', '.chat-group-user__btn--add', function(){
    $(this).parent()
    $('#user-search-result').remove();
    console.log("OK");
   });
});