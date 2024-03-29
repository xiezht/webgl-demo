import gameView from './view'
import gameModel from './model'

class GameController {
  constructor () {
    this.gameView = gameView
    this.gameModel = gameModel
    this.gameModel.stageChanged.attach((sender, args) => {
      const stageName = args.stage
      switch (stageName) {
        case 'game-over':
          this.gameView.showGameOverPage()
          break
        case 'game':
          this.gameView.showGamePage()
        default:
      }
    })
  }

  initPages () {
    const gamePageCallbacks = {
      showGameOverPage: () => {
        this.gameModel.setStage('game-over')
      }
    }
    const gameOverPageCallbacks = {
      restartGame: () => {
        this.gameModel.setStage('game')
      }
    }

    this.gameView.initGamePage(gamePageCallbacks)
    this.gameView.initGameOverPage(gameOverPageCallbacks)
  }

  // showGamePage = () => {
  //   this.gameView.showGamePage()
  // }

  // showGameOverPage = () => {
  //   this.gameView.showGameOverPage()
  // }
  // restartGame = () => {
  //   this.gameView.restartGame() 
  // }
}

export default new GameController()
