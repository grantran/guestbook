$(document).ready(function() {
  
  // Initial load of users from database 
  // This probably will be split into a different page
  // Or filtered by date 

  $.ajax({
    url: '/users',
    method: 'GET',
    success: function(results) {
      console.log('heyooo', results); 
    }
  })

  let guestentry = $('#guest-entry'); 
  let member_cont = $('#member-name-list');
  let non_member_cont = $('#non-member-name-list');

  guestentry.submit(function (event) {
    event.preventDefault();
    let firstName = $('#first-name').val();
    let lastName = $('#last-name').val();
    let membership = $('#membership').val();

    let time = moment(event.created_at).format('YYYY-MM-DD HH:mm:ss');

    let appendName = firstName + ' ' + lastName + ' - ' + time;

    if (membership === 'member') {
      member_cont.append($('<li>').text(appendName));      
    } else {
      non_member_cont.append($('<li>').text(appendName));
      
    }
    // cont.append($('<span>').text(lastName));

    $('#first-name').val("");
    $('#last-name').val("");
    
  })

})