$(document).ready(function() {
  $('#guest-entry').disableAutoFill();
  
  // Initial load of users from database 
  // This probably will be split into a different page
  // Or filtered by date 
const guestentry = $('#guest-entry'); 
const member_cont = $('#member-name-list');
const non_member_cont = $('#non-member-name-list');

$.ajax({
    url: '/users',
    method: 'GET',
    success: function(results) {
      results.forEach((entry) => {
        appendMembers(entry.first_name, entry.last_name, entry.membership); 
      })
    }
  });

  $('#first-name').autocomplete({
    source: function(req, res) {
      $.ajax({
        url: '/users',
        method: 'GET',
        success: function(results) {
          console.log(results);
          res($.map(results, function (item) {
            return item.first_name
          }));
      }
    }
  )}});
  
  function appendMembers(firstName, lastName, membership) {
    const appendName = firstName + ' ' + lastName; 
    if (membership) { 
      member_cont.append($('<li>').text(appendName)); 
    } else {
      non_member_cont.append($('<li>').text(appendName)); 
    }
  }



  guestentry.submit(function (event) {
    event.preventDefault();
    let firstName = $('#first-name').val();
    let lastName = $('#last-name').val();
    let membership = $('#membership').val();

    let time = moment(event.created_at).format('YYYY-MM-DD HH:mm:ss');

    let appendName = firstName + ' ' + lastName + ' - ' + time;
    let mem = false;  
    if (membership === 'member') {
      member_cont.append($('<li>').text(appendName));
      mem = true;    
    } else {
      non_member_cont.append($('<li>').text(appendName)); 
      
    }
    // cont.append($('<span>').text(lastName));
    // console.log('ge', guestentry); 

    let data = {"firstname": firstName, "lastname":lastName, "membership": mem};
    $.ajax({
      url: '/addUser', 
      method: 'POST',
      data: data, 
      success: function(results) {
        console.log('the results:', results); 
      }
    })

    $('#first-name').val("");
    $('#last-name').val("");
    
  })

})