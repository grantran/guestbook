$(document).ready(function() {

  let guestentry = $('#guest-entry'); 
  let cont = $('#name-list')

  guestentry.submit(function (event) {
    event.preventDefault();
    console.log($('#first-name').val());
    console.log($('#last-name').val());
    let firstName = $('#first-name').val();
    let lastName = $('#last-name').val();

    let time = moment(event.created_at).format('YYYY-MM-DD HH:mm:ss');
    console.log(time);

    let appendName = firstName + ' ' + lastName + ' - ' + time;

    cont.append($('<li>').text(appendName));
    // cont.append($('<span>').text(lastName));

    $('#first-name').val("");
    $('#last-name').val("");
    
  })

})