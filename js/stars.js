function stars() {
    const count = 300;
    const stars = document.getElementById('stars');
    var i = 0;
    while(i < count) {
      const star = document.createElement('i');
      const x = Math.floor(Math.random() * window.innerWidth)
      const y = Math.floor(Math.random() * window.innerHeight)
      const size = Math.random() * 5;
      star.style.left = x+'px';
      star.style.top = y+'px';
      star.style.height = 1+size+'px';
      star.style.width = 1+size+'px';
      const duration = Math.random() * 2;
      star.style.animationDuration = 2+duration+'s';
      stars.appendChild(star);
      i++
    }
  }
  stars();