class Web {
  showAbout () {
    document.getElementById('home').classList.add('hidden')
    document.getElementById('about').classList.remove('hidden')
    document.getElementById('about-title').classList.add('title-page')
  }

  showHome () {
    document.getElementById('home').classList.remove('hidden')
    document.getElementById('about').classList.add('hidden')
  }

  experience () {

  }

  contact () {

  }
}

const web = new Web()
