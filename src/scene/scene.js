import camera from './camera.js'
import light from './light.js'
import background from '../objects/background.js'

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

    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    
    // 坐标轴辅助
    this.axesHelper = new THREE.AxesHelper(150);
    this.instance.add(this.axesHelper)
    // 初始化相机
    this.camera = camera
    this.camera.init()
    // 初始化光照
    this.light = light
    this.light.init()
    // 场景光照加载
    this.instance.add(this.camera.instance)
    this.instance.add(this.light.instance)
    this.addBackground()
  }

  render () {
    this.renderer.render(this.instance, this.camera.instance)
  }

  addBackground() {
    const camera = this.camera.instance
    background.init()
    background.instance.position.z = -64
    camera.add(background.instance)
  }

}

export default new Scene()
