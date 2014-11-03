

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


  var m = new Member({
    name: member_name,
    email: member_email

  });




  all_members.add(m);

  m.save();

  console.log(m)



  $('#name').val('');
  $('#email').val('');

});
