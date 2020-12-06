const displaySong = () => {
    const xhttp = new XMLHttpRequest();
  
    xhttp.open("GET", "https://graytsongs.herokuapp.com/songs", false);
    xhttp.send();
  
    const songs = JSON.parse(xhttp.responseText);
  
    let submit =  document.getElementById("submit");
    let output = document.getElementById("output");

    submit.addEventListener('click', function() {
      let date = $('#date').val() - 1;
      console.log(songs[date].song + " - " + songs[date].artist);
      output.innerHTML = songs[date].song + " - " + songs[date].artist;
    })
  };

  displaySong();
  