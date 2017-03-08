import React, {Component} from 'react';
export default class WizardForm extends Component {
    constructor() {
        super();
    }
    componentWillMount() {}
    getClass(step) {
        if (step == this.props.currentStep) {
            return '';
        } else {
            return 'hidden';
        }
    }
    render() {
        return (
            <div className="wizard-images">
                <img className={this.getClass(1)} src={require('../../../public/img/clientsAssets/notebookAsset1.png')}/>
                <img className={this.getClass(2)} src={require('../../../public/img/clientsAssets/codingAsset1.png')}/>
                <img className={this.getClass(3)} src={require('../../../public/img/clientsAssets/knifeAsset1.png')}/>
                <img className={this.getClass(4)} src={require('../../../public/img/clientsAssets/notebookAsset1.png')}/>
                <img className={this.getClass(5)} src={require('../../../public/img/clientsAssets/walletAsset1.png')}/>
            </div>
        )
    }
}
