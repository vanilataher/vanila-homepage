import React, {Component} from 'react';
import WizardStep from '../components/wizard/wizard-step';
import WizardForm from '../components/wizard/freelancer-wizard-form';
import '../../public/styles/wizard.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Client extends Component {
    constructor() {
        super();
        this.state = {
            currentStep: 5
        }
    }
    nextStep(){
        if(this.state.currentStep < 5){
            this.setState({
              currentStep:this.state.currentStep+1
            })
        }
    }
    render() {
        return (
          <ReactCSSTransitionGroup
              transitionName="example" transitionAppear={true}
              transitionAppearTimeout={1500}
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}>
            <div className="wizard-container freelancer">
                <div className="left-container">
                    <div className="container">
                        <div className="row">
                            <h1 className="title">
                                Join Vanila.io
                                <b>
                                    &nbsp;community&nbsp;
                                </b>
                                <div>and become big ?</div>
                            </h1>
                            <h4 className="sub-title">
                                Sharpen your skills while working<br/>
                                on Cool projects, while you
                                <b>
                                    &nbsp;learn, earn and make Friends.
                                </b>
                            </h4>
                        </div>
                        <div className="row">
                            <WizardStep currentStep={this.state.currentStep}/>
                        </div>
                    </div>
                    <div>
                        <WizardForm nextStep={this.nextStep.bind(this)} currentStep={this.state.currentStep}/>
                    </div>
                </div>
                <div className="right-container">
                    <div className="wizard-images">
                        <img src={require('../../public/img/freelancerAssets/freelancerAsset1.png')}/>
                    </div>
                </div>
                <div className="clear"/>
            </div>
            </ReactCSSTransitionGroup>
        )
    }
}
