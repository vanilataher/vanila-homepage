import React, {Component} from 'react';
export default class WizardStep extends Component {
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
            <div className="wizard-steps">
                <div className="line"/>
                <ul>
                    <li className={this.getClass(1)}>
                        <div className="circle"/>
                    </li>
                    <li className={this.getClass(2)}>
                        <div className="circle"/>
                    </li>
                    <li className={this.getClass(3)}>
                        <div className="circle"/>
                    </li>
                    <li className={this.getClass(4)}>
                        <div className="circle"/>
                    </li>
                    <li className={this.getClass(5)}>
                        <div className="circle"/>
                    </li>
                </ul>
            </div>
        )
    }
}
