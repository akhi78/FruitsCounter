import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangocount: 0, bananacount: 0}

  CountMango = () => {
    this.setState(prevState => {
      console.log('')
      return {mangocount: prevState.mangocount + 1}
    })
  }

  CountBanana = () => {
    this.setState(prevState => {
      console.log('')
      return {bananacount: prevState.bananacount + 1}
    })
  }

  render() {
    const {mangocount, bananacount} = this.state
    return (
      <div className="main-con">
        <div className="second-con">
          <h1 className="heading">
            Bob ate <span className="count">{mangocount}</span> mangoes{' '}
            <span className="count">{bananacount}</span> bananas
          </h1>
          <div className="bottom-con">
            <div className="mangoes">
              <img
                alt="mango"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              />
              <button type="button" onClick={this.CountMango} className="btn">
                {' '}
                Eat Mango
              </button>
            </div>
            <div className="banana">
              <img
                alt="banana"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              />
              <button type="button" onClick={this.CountBanana} className="btn">
                {' '}
                Eat banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
