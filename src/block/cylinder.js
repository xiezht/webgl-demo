import BaseBlock from './base.js'

class Cylinder extends BaseBlock {
  constructor(x, y, z, width) {
    super('cylinder')

    const size = width || this.width
    const geometry = new THREE.CylinderGeometry(size / 2, size / 2, this.height, 64);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    this.instance = new THREE.Mesh(geometry, material)
    this.instance.name = 'block'
    this.x = x
    this.y = y
    this.z = z
    this.instance.position.set(x, y, z)
  }
}

export default Cylinder
