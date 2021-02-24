class Force {
  constructor (force, speed, direction) {
    this.direction = direction || 1
    this.force = force || 10
    this.speed = speed || 0.001
  }

  acumulateForce (direction) {
    this.direction = direction < 0 ? -1 : 1
    this.force += 0.1 * this.direction
    this.force = this.force < -10 ? -10 : this.force
    this.force = this.force > 10 ? 10 : this.force
  }

  spentForce () {
    return this.getSpeed(this.force)
  }

  getSpeed (force) {
    return force * this.speed
  }

  restriction (max, min, value) {
    if (value > max) {
      return max
    } else
    if (value < min) {
      return min
    }
    return value
  }
}
