import gameView from './view'
import gameModel from './model'

class GameController {
  constructor () {
    this.gameView = gameView
    this.gameModel = gameModel
  }

  initPages () {
    const gamePageCallbacks = {
      showGameOverPage: this.showGameOverPage
    }
    const gameOverPageCallbacks = {
      restartGame: this.restartGame
    }

    this.gameView.initGamePage(gamePageCallbacks)
    this.gameView.initGameOverPage(gameOverPageCallbacks)
  }

  showGameOverPage = () => {
    this.gameView.showGameOverPage()
  }
  restartGame = () => {
    this.gameView.restartGame() 
  }
}

export default new GameController()
