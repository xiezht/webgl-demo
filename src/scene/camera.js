import sceneConf from '../../conf/scene-conf'

class Camera {
  constructor () {
    this.instance = null
  }

  init () {
    const aspect = window.innerHeight / window.innerWidth
    const viewSize = sceneConf.frustumSize
    // 摄像机的视口宽高比例应该与屏幕的宽高比例一致，确保物体的视图投影归一化为标准屏幕坐标后，视图不会变形
    this.instance = new THREE.OrthographicCamera(- viewSize, viewSize, viewSize * aspect, - viewSize * aspect, -100, 85)
    // this.instance.position.set(-10, 10, 10)
    this.instance.position.set(0, 0, 10)
    this.target = new THREE.Vector3(0, 0, 0)
    this.instance.lookAt(this.target)
  }
}

export default new Camera()
