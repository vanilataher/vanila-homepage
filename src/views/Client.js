import React, {Component} from 'react';
import WizardStep from '../components/wizard/wizard-step';
import WizardForm from '../components/wizard/client-wizard-form';
import WizardImages from '../components/wizard/client-wizard-images';
import '../../public/styles/wizard.css'
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
            <div className="wizard-container client">
                <div className="left-container">
                    <div className="container">
                        <div className="row">
                            <h1 className="title">
                                Do you have
                                <b>
                                    &nbsp;idea&nbsp;
                                </b><br/>
                                for your next project ?
                            </h1>
                            <h4 className="sub-title">
                                Tell us about it, we are glad to listen <br/> and will provide you with a
                                <b>
                                    &nbsp;feedback
                                </b>
                            </h4>
                        </div>
                        <div className="row">
                            <WizardStep currentStep={this.state.currentStep}/>
                        </div>
                    </div>
                    <div className="row">
                        <WizardForm nextStep={this.nextStep.bind(this)} currentStep={this.state.currentStep}/>
                    </div>
                </div>
                <div className="right-container">
                    <WizardImages currentStep={this.state.currentStep}/>
                </div>
                <div className="clear"/>
            </div>
        )
    }
}
