import React, {Component} from 'react';
export default class WizardForm extends Component {
    constructor() {
        super();
    }
    componentWillMount() {}
    getClass(step) {
        if (step <= this.props.currentStep) {
            return 'active';
        } else {
            return '';
        }
    }
    render() {
        return (
            <div className="wizard-form">
                <div className="step1 container">
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
                <div className="button-container container">
                    <div className="row">
                        <div className="col-md-12">
                            <button>Next</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
