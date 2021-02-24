class Text {
  constructor (THREE) {
    this.typed = new Typed('JULIO CONTRERAS')
    this.widthMax = 1640
    this.textHeightMax = 0.5
    this.textHeightMin = 0.2
    this.obj = new SpriteText('')
    this.obj.fontSize = 1000
    this.obj.color = '#F50834'
    this.obj.fontFace = 'minimal'
    this.obj.position.z = 3
    this.update(window.innerWidth)
  }

  updateText () {
    this.obj.text = this.typed.write()
  }

  update (width) {
    let value = (this.textHeightMax * width) / this.widthMax
    if (value < this.textHeightMin) {
      value = this.textHeightMin
    }
    this.obj.textHeight = value
  }
}
