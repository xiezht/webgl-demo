class GameOverPage {
  constructor (callbacks) {
    this.callbacks = callbacks
  }

  init (opts) {
    console.log('game over page init')
    this.initGameOverCanvas(opts)
  }

  show () {
    this.obj.visible = true
    console.log('game over page show')
  }

  hide () {
    this.obj.visible = false
  }

  initGameOverCanvas (opts) {
    const aspect = window.innerHeight / window.innerWidth
    
    this.scene = opts.scene

    this.canvas = document.createElement('canvas')
    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight

    this.texture = new THREE.Texture(this.canvas)

    // var loader = new THREE.FontLoader();
    
    // loader.load( '../../resource/fonts/helvetiker_regular.typeface.json',  (font) => {
    //   this.geometry = new THREE.TextGeometry('Game Over', {
    //     font: font,
    //     size: 80
    //   });
    // });


    this.material = new THREE.MeshBasicMaterial({
      map: this.texture,
      transparent: true,
      side: THREE.DoubleSide
    })

    this.geometry = new THREE.PlaneGeometry(window.innerWidth, window.innerHeight)

    this.obj = new THREE.Mesh(this.geometry, this.material)
    this.obj.position.z = -1
    this.obj.rotation.y = Math.PI
    this.obj.visible = false

    this.context = this.canvas.getContext('2d')
    this.context.fillStyle = '#333'
    this.context.fillRect((window.innerWidth - 200) / 2, (window.innerHeight - 100) / 2, 200, 100)

    this.context.fillStyle = '#eee'
    this.context.font = '30px Georgia'
    this.context.fillText('Game Over', (window.innerWidth - 200) / 2 + 25, (window.innerHeight - 100) / 2 + 55)
    this.texture.needsUpdate = true
    this.scene.add(this.obj)
  }
}

export default GameOverPage
