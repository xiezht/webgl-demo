import sceneConf from '../../conf/scene-conf.js'

class Background {
  constructor () {
    this.instance = null
  }

  init () {
    const size = sceneConf.frustumSize * 2
    const geometry = new THREE.PlaneGeometry(size, window.innerHeight / window.innerWidth * size)
    const material = new THREE.MeshBasicMaterial({
      color: 0xd7dbe6,
      transparent: true,
      opacity: 1
    })
    this.instance = new THREE.Mesh(geometry, material)
  }
}

export default new Background()
