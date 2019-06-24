import { scene } from '../scene/index'
import Cuboild from '../block/cuboild'
import Cylinder from '../block/cylinder'
import ground from '../objects/ground'

class GamePage {
  constructor (callbacks) {
    this.callbacks = callbacks
  }

  init () {
    this.scene = scene
    this.scene.init()
    this.addGround()
    this.addInitBlock()
    this.render()
  }

  render () {
    this.scene.render()
    requestAnimationFrame(this.render.bind(this))
  }

  addInitBlock () {
    const cuboildBlock = new Cuboild(-15, 0, 0)
    const cylinderBlock = new Cylinder(23, 0, 0)
    const scene = this.scene.instance
    scene.add(cuboildBlock.instance)
    scene.add(cylinderBlock.instance)
  }

  addGround () {
    ground.init()
    this.scene.instance.add(ground.instance)
  }

  restart () {
    // console.log('game page restart')
  }

  show () {
    // this.cube.visible = true
  }

  hide () {
    // this.cube.visible = false
  }
}

export default GamePage
