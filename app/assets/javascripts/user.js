$(function(){
  function buildHTML(user){
    var html = `<div class='chat-group-user clearfix'>
                  <p class='chat-group-user__name'>${user.name}</p>
                <div class='user-search-add chat-group-user__btn chat-group-user__btn--add' data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
                </div>`
  $('#user-search-result').append(html);
  }
  function buildUser(userId, userName){
    var html = `<div class='chat-group-user'>
                  <input name='group[user_ids][]' type='hidden' value='${userId}'>
                  <p class='chat-group-user__name'>${userName}</p>
                  <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</div>
                </div>`
  $('#user_list').append(html);
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
     if (users.length !== 0) {
      users.forEach(function(user){ 
        buildHTML(user);
      });
     }
   })
   .fail(function(){
     alert('ユーザー検索に失敗しました');
   })
  });
  $('#user-search-result').on('click', '.user-search-add', function(){
    $(this).parent().remove();
    var userId = $(this).attr('data-user-id');
    var userName = $(this).attr('data-user-name');
    buildUser(userId, userName);
  });
  $('#user_list').on('click', '.user-search-remove', function(){
    $(this).parent().remove();
  });
});