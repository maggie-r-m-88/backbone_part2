

var all_members = new Members();

all_members.fetch().done( function () {

  new MembersView({
    collection: all_members
  });
});

$('#memberForm').on('submit', function (event){
  event.preventDefault();

  var member_name = $('#name').val();
  var member_email = $('#email').val();
  var member_gender = $('input[name=gender]:checked').val();
  var member_subscribe = $('#mailing').prop('checked');
  var member_language = $("#lang option:selected").text();

  var m = new Member({
    name: member_name,
    email: member_email,
    gender: member_gender,
    subscribe: member_subscribe,
    language: member_language

  });


  all_members.add(m);

  m.save();

  console.log(m)



  $('#name').val('');
  $('#email').val('');
  $('.hero-unit').hide();
  $('#thanks').fadeIn(300);

});
