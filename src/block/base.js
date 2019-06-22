import blockConf from '../../conf/block-conf'

class Base {
  constructor (type) {
    this.type = type  // cuboild | cylinder
    this.height = blockConf.height
    this.width = blockConf.width
  }
}

export default Base
