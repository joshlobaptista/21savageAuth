var fire = document.getElementsByClassName("fa-fire");
var thumbDown = document.getElementsByClassName("fa-thumbs-down");
var trash = document.getElementsByClassName("fa-trash");

Array.from(fire).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const song = this.parentNode.parentNode.childNodes[3].innerText
        const lyrics = this.parentNode.parentNode.childNodes[5].innerText
        const fire = parseFloat(this.parentNode.parentNode.childNodes[7].innerText)
        fetch('messages', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'song': song,
            'lyrics': lyrics,
            'fire':fire
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(thumbDown).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const song = this.parentNode.parentNode.childNodes[3].innerText
        const lyrics = this.parentNode.parentNode.childNodes[5].innerText
        const thumbDown = parseFloat(this.parentNode.parentNode.childNodes[7].innerText)
        fetch('messagesDown', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'song': song,
            'lyrics': lyrics,
            'thumbDown':thumbDown
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const lyrics = this.parentNode.parentNode.childNodes[5].innerText
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'lyrics': lyrics
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
