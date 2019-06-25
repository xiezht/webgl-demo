import bottleConf from '../../conf/bottle-conf.js'
import blockConf from '../../conf/block-conf.js'

class Bottle {
  constructor () {
    this.obj = null
  }

  init () {
    const bottleOffset = 2.2
    this.obj = new THREE.Object3D()
    this.obj.name = 'bottle'
    // 质心位置
    this.obj.position.set(bottleConf.initPosition.x, bottleConf.initPosition.y + blockConf.height / 2, bottleConf.initPosition.z)
    this.baseMatrial = new THREE.MeshPhongMaterial({
      color: bottleConf.color
    })

    const bottle = new THREE.Object3D()

    const head = this.initHead()
    const body = this.initBody()

    bottle.add(head)
    bottle.add(body)
    // 将物体进行偏移，使质心位于物体底部
    bottle.position.y = bottleOffset

    this.obj.add(bottle)
  }

  initHead () {
    const head = new THREE.Mesh(
      new THREE.SphereGeometry(bottleConf.radius * 0.82, 64, 64),
      this.baseMatrial
    )
    head.castShadow = true
    head.position.y = 3.57143 * bottleConf.radius
    return head
  }

  initBody () {
    const radius = bottleConf.radius
    const body = new THREE.Object3D()
    const bottom = new THREE.Mesh(
      new THREE.CylinderGeometry(radius * 0.62857, radius * 0.907143, radius * 1.91423, 20),
      this.baseMatrial
    )
    bottom.castShadow = true

    const middle = new THREE.Mesh(
      new THREE.CylinderGeometry(radius / 1.4, radius / 1.44 * 0.88, radius * 1.2),
      this.baseMatrial
    )
    middle.position.y = 1.3857 * radius
    middle.castShadow = true

    const top = new THREE.Mesh(
      new THREE.SphereGeometry(radius / 1.4, 64, 64).scale(1, 0.54, 1),
      this.baseMatrial
    )
    top.position.y = radius * 1.8143
    top.castShadow = true

    body.add(bottom)
    body.add(middle)
    body.add(top)

    return body
  }
}

export default new Bottle()
