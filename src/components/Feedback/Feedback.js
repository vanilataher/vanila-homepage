import React from 'react';
import FeedbackDetail from './FeedbackDetail';
import sr, {leftConf, rightConf} from '../sr';

class Feedback extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    sr.reveal(".enterLeft-f",leftConf,80);
  }
  render() {
    return (
        <div className="row rowFeedback">
            <h2 className="text-center enterLeft-f">What Clients Says About Us</h2>
            <h3 className="text-center enterLeft-f">
              We helped various business and startups <br></br>
              to get their idea into reallity
            </h3>
            <FeedbackDetail />
        </div>
    );
  }
}

export default Feedback;
