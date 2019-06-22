import camera from './camera.js'
class Scene {
  constructor () {
    this.instance = null
  }
  init () {
    this.instance = new THREE.Scene()
    const renderer = this.renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      preserveDrawingBuffer: true,
    })
    // 坐标轴辅助
    this.axesHelper = new THREE.AxesHelper(150);
    this.instance.add(this.axesHelper)
    // 初始化相机
    this.camera = camera
    this.camera.init()
    this.instance.add(this.camera.instance)
  }

  render () {
    this.renderer.render(this.instance, this.camera.instance)
  }
}

export default new Scene()
