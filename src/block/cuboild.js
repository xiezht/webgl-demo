import BaseBlock from './base'

class Cuboild extends BaseBlock {
  constructor (x, y, z, width) {
    super('cuboild')
    const size = width || this.width
    const geometry = new THREE.BoxGeometry(size, this.height, size)
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    this.instance = new THREE.Mesh(geometry, material)
    this.instance.name = 'block'
    this.x = x
    this.y = y
    this.z = z
    this.instance.position.set(x, y, z)
  }
}

export default Cuboild