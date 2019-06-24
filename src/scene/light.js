class Light {
  constructor () {
    this.instance = null
  }
  init () {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    const directLight = new THREE.DirectionalLight(0xffffff, 0.7)

    directLight.castShadow = true
    directLight.shadow.camera.near = 0.5
    directLight.shadow.camera.far = 500
    directLight.shadow.camera.left = -100
    directLight.shadow.camera.right = 100
    directLight.shadow.camera.top = 100
    directLight.shadow.camera.bottom = -100
    directLight.shadow.mapSize.width = 512
    directLight.shadow.mapSize.height = 512

    // 平行光需要指定一个target，作为lookAt的对象。
    const lightTarget = new THREE.Object3D()

    lightTarget.name = 'lightTarget'
    lightTarget.visible = false
    directLight.position.set(10, 30, 20)
    directLight.target = lightTarget

    this.instance = new THREE.Group()
    this.instance.add(ambientLight)
    this.instance.add(directLight)
    this.instance.add(lightTarget)
  }
}

export default new Light()