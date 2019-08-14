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