class Loader {
  constructor (THREE) {
    this.objLoader = new THREE.OBJLoader()
    this.objLoader.setPath('/models/')
    this.mtlLoader = new THREE.MTLLoader()
    this.mtlLoader.setPath('/models/')
  }

  load (nameObj, nameMat, callback) {
    new Promise((resolve) => {
      this.mtlLoader.load(nameMat, (materials) => {
        resolve(materials)
      })
    }).then((materials) => {
      materials.preload()
      this.loadObj(nameObj, materials, callback)
    })
  }

  loadObj (nameObj, materials, callback) {
    this.objLoader.setMaterials(materials)
    this.objLoader.load(nameObj, (object) => {
      callback(object)
    })
  }

}
