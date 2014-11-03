

var all_members = new Members();

all_members.fetch().done( function () {

  new MembersView({
    collection: all_members
  });
});
$('#join-us').on('click', function (event){
    event.preventDefault();


    $('.Join').fadeIn();

});
$('#memberForm').on('submit', function (event){
  event.preventDefault();


  var member_name = $('#name').val();
  var member_email = $('#email').val();
  var member_gender = $('input[name=gender]:checked').val();

  var m = new Member({
    name: member_name,
    email: member_email,
    gender: member_gender

  });




  all_members.add(m);

  m.save();

  console.log(m)



  $('#name').val('');
  $('#email').val('');

});
