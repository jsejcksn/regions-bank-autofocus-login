(function () {
  'use strict';

  function init () {
    if (u.value !== '') { // Username is not empty
      console.log('Username remembered');
      p.focus();
    } else { // Is empty
      console.log('Enter your username');
      u.focus();
    }
  }

  if (document.getElementById('OnlineID') && document.getElementById('Password')) { // Username and password inputs exist
    var p = document.getElementById('Password');
    var u = document.getElementById('OnlineID');
    init();
  } else {
    console.log('Chrome extension "Regions Bank - Remember username" is out of date and is no longer functioning. Developer must update.'); // Regions homepage has been updated, breaking extension functionality
  }

}());
