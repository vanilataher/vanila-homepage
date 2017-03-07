import React, {Component} from 'react';
export default class WizardForm extends Component {
    constructor() {
        super();
    }
    componentWillMount() {}
    getClass(current,step) {
        if (step == this.props.currentStep) {
            return current;
        } else {
            return current+' hidden';
        }
    }
    nextStep(){
        this.props.nextStep();
    }
    render() {
        var buttonText = this.props.currentStep == 5 ? 'finish' : 'next';
        var buttonClass = this.props.currentStep == 5 ? 'danger' : '';
        return (
            <div className="wizard-form">
                <div className={this.getClass("container",1)}>
                    <div className="row">
                        <div className="form col-md-6">
                            <label>First Name</label>
                            <input type="text" placeholder="John" ref="firstname"/>
                        </div>
                        <div className="form col-md-6">
                            <label>First Name</label>
                            <input type="text" placeholder="Smith" ref="lastname"/>
                        </div>
                        <div className="form col-md-12">
                            <label>Email</label>
                            <input type="email" placeholder="john@example.com" ref="email"/>
                        </div>
                    </div>
                </div>
                <div className={this.getClass("container",2)}>
                    <div className="row">
                        <div className="col-md-12">step2</div>
                    </div>
                </div>
                <div className={this.getClass("container",3)}>
                    <div className="row">
                        <div className="col-md-12">step3</div>
                    </div>
                </div>
                <div className={this.getClass("container",4)}>
                    <div className="row">
                        <div className="col-md-12">step4</div>
                    </div>
                </div>
                <div className={this.getClass("container",5)}>
                    <div className="row">
                        <div className="col-md-12">step5</div>
                    </div>
                </div>
                <div className="button-container container">
                    <div className="row">
                        <div className="col-md-12">
                            <button className={buttonClass} onClick={this.nextStep.bind(this)}>
                                {buttonText}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
