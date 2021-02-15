class Loader {
  constructor (THREE) {
    this.objLoader = new THREE.OBJLoader()
    this.objLoader.setPath('/models/')
    this.mtlLoader = new THREE.MTLLoader()
    this.mtlLoader.setPath('/models/')
  }

  load (nomeObj, nameMat, callback) {
    new Promise((resolve) => {
      this.mtlLoader.load(nameMat, (materials) => {
        resolve(materials)
      })
    }).then((materials) => {
      materials.preload()
      this.objLoader.setMaterials(materials)
      this.objLoader.load(nomeObj, (object) => {
        callback(object, materials)
      })
    })
  }
}
