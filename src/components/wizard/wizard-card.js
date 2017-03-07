import React, {Component} from 'react';
export default class WizardCard extends Component {
    constructor() {
        super();
    }
    componentWillMount() {}
    render() {
        return (
            <div className="wizard-card">
                <div className="image" style={{backgroundImage:`url(${this.props.img})`}} />
                <div className="heading">
                    {this.props.heading}
                </div>
            </div>
        )
    }
}
