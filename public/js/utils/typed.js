class Typed {
  constructor (fullText) {
    this.enterCount = 2
    this.fullText = fullText
    this.pos = 0
    this.text = ''
    this.count = 0
  }

  write () {
    this.count++
    if (this.count >= this.enterCount) {
      this.count = 0
      if (this.pos < this.fullText.length) {
        this.text += this.fullText[this.pos]
        this.pos++
      }
    }
    return this.text
  }
}