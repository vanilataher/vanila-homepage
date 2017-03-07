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
            <div className="wizard-images">
                <img src={require('../../../public/img/clientsAssets/notebookAsset1.png')} />
            </div>
        )
    }
}
