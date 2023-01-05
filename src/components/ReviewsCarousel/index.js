// Write your code here
import {Component} from 'react'

import './index.css'

const reviewsList = [
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/wade-warren-img.png',
    username: 'Wade Warren',
    companyName: 'Rang',
    description:
      'The most important thing I learnt is that nothing is a failure, but what we learn from that is a rich and rewarding experience.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/adrian-williams-img.png',
    username: 'Adrian Williams',
    companyName: 'WheelO',
    description:
      'Coming to Startup School is the best thing that has happened to me. I wish every startup in the country should get this opportunity.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/sherry-jhonson-img.png',
    username: 'Sherry Johnson',
    companyName: 'MedX',
    description:
      'I am glad to have such experienced mentors guiding us in every step through out the 4 weeks. I have improved personally and developed many interpersonal skills.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/ronald-jones-img.png',
    username: 'Ronald Jones',
    companyName: 'Infinos Tech',
    description:
      'I am really loving the way how mentors are taking care of us, the way they are explaining big theories with lots of case studies and innovative methods.',
  },
]

class ReviewsCarousel extends Component {
  state = {value: 0}

  leftArrowclick = () => {
    const {value} = this.state
    if (value > 0) {
      this.setState(prev => ({value: prev.value - 1}))
    }
  }

  rightArrowclick = () => {
    const {value} = this.state
    if (value < reviewsList.length - 1) {
      this.setState(prev => ({value: prev.value + 1}))
    }
  }

  render() {
    const {value} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[value]

    console.log(reviewsList.length)
    return (
      <div className="bg_container">
        <h1 className="heading">Reviews</h1>
        <img src={imgUrl} className="image" alt={username} />
        <div className="container">
          <button
            data-testid="leftArrow"
            type="button"
            className="button"
            onClick={this.leftArrowclick}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <h1 className="user_name">{username}</h1>
          <button
            data-testid="rightArrow"
            type="button"
            className="button"
            onClick={this.rightArrowclick}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
        <p className="company">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }
}
export default ReviewsCarousel
