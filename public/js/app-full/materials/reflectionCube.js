class ReflectionCube {
  constructor (THREE) {
    /*
    this.THREE = THREE
    const path = 'textures/cube/galaxy/'
    const format = '.png'
    const urls = [
      path + 'px' + format, path + 'nx' + format,
      path + 'py' + format, path + 'ny' + format,
      path + 'pz' + format, path + 'nz' + format
    ]
    this.envMap = new this.THREE.CubeTextureLoader().load(urls)
    this.envMap.mapping = this.THREE.CubeRefractionMapping
    this.material = new this.THREE.MeshLambertMaterial({ color: 0xffffff, envMap: this.refractionCube, combine: THREE.MixOperation, refractionRatio: 0.5 })
    */ 
    this.material = new THREE.MeshStandardMaterial({
      metalness: 0,
      roughness: 0,
      envMapIntensity: 1.0
    })
  }
}
