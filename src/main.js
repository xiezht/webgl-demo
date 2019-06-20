import * as THREE from '../lib/three'
window.THREE = THREE

class Main {
  constructor() {

  }

  init() {
    const width = 375
    const height = 667
    // let canvas = wx.createCanvas()
    
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas
    })
    
    const scene = new THREE.Scene()
    
    const camera = new THREE.OrthographicCamera(- width / 2, width / 2, height / 2, - height / 2, -1000, 1000)
    camera.position.x = 10
    camera.position.y = 10
    camera.position.z = -10
    camera.lookAt(new THREE.Vector3(0, 0, 0))
    
    renderer.setClearColor(new THREE.Color(0x00aa00, 1.0))
    renderer.setSize(375, 667)
    
    let geometry = new THREE.BoxGeometry( 100, 100, 100 )
    let material = new THREE.MeshBasicMaterial( {color: 0x00ff00} )
    let cube = new THREE.Mesh( geometry, material )
    cube.position.x = 0
    cube.position.y = 0
    cube.position.z = 0
    scene.add(cube)
    
    /** 动态渲染 */
    let currentAngle = 0
    let lastTimeStamp = Date.now()
    
    let animate = function () {
      let now = Date.now()
      let duration = now - lastTimeStamp
      lastTimeStamp = now
      currentAngle = currentAngle + duration / 1000 * Math.PI
    }
    
    let render = function () {
      animate()
      cube.rotation.set(currentAngle, 0, 0)
      renderer.render(scene, camera)
      requestAnimationFrame(render)
    }
    render()
  }
}

export default new Main()