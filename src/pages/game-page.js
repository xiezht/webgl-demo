class GamePage {
  constructor (callbacks) {
    this.callbacks = callbacks
  }

  init () {
    console.log('game page init')
    const width = window.innerWidth
    const height = window.innerHeight
    // let canvas = wx.createCanvas()
    
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas
    })
    
    const scene = new THREE.Scene()
    this.scene = scene

    const axesHelper = new THREE.AxesHelper( 300 );
    scene.add( axesHelper );

    const camera = new THREE.OrthographicCamera(- width / 2, width / 2, height / 2, - height / 2, -1000, 1000)
    // const cameraHelper = new THREE.CameraHelper( camera )
    // scene.add(cameraHelper)
    
    camera.position.x = 0
    camera.position.y = 0
    camera.position.z = -10
    camera.lookAt(new THREE.Vector3(0, 0, 0))
    
    renderer.setClearColor(new THREE.Color(0x000000, 0))
    renderer.setSize(width, height)
    
    let geometry = new THREE.BoxGeometry( 100, 100, 100 )
    let material = new THREE.MeshBasicMaterial( {color: 0x00ff00} )
    let cube = new THREE.Mesh( geometry, material )
    this.cube = cube
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

    setTimeout(() => {
      this.callbacks.showGameOverPage()
    }, 2000)
    
    render()
  }

  restart () {
    console.log('game page restart')
  }

  show () {
    this.cube.visible = true
  }

  hide () {
    this.cube.visible = false
  }
}

export default GamePage
