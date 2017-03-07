import React, {Component} from 'react';
import Card from './wizard-card';
export default class WizardForm extends Component {
    constructor() {
        super();
    }
    componentWillMount() {}
    getClass(current, step) {
        if (step == this.props.currentStep) {
            return current;
        } else {
            return current + ' hidden';
        }
    }
    nextStep() {
        this.props.nextStep();
    }
    render() {
        var buttonText = this.props.currentStep == 5
            ? 'finish'
            : 'next';
        var buttonClass = this.props.currentStep == 5
            ? 'danger'
            : '';
        return (
            <div className="wizard-form">
                <div className="col-md-12">
                    <div className={this.getClass("container", 1)}>
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
                    <div className={this.getClass("", 2)}>
                        <div className="row">
                            <div className="col-md-12 card-container">
                                <Card heading={'Web & Mobile App Development'} img={require('../../../public/img/clientsAssets/app-developmentAsset1.png')}/>
                                <Card heading={'Branding & Design'} img={require('../../../public/img/clientsAssets/ui-uxAsset1.png')}/>
                                <Card heading={'Marketing'} img={require('../../../public/img/clientsAssets/freelancer2Asset 1.png')}/>
                                <div className="clear"/>
                          </div>
                        </div>
                    </div>
                    <div className={this.getClass("container", 3)}>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="device-type-card">
                                    <div className="radiobox-container">
                                        <input type="radio" name="device-type"/>
                                    </div>
                                    <div className="detail-container">
                                        <h1>Webiste / Web App</h1>
                                        <p>Build a personal or company website, blog, online store, or social community app, game, etc.</p>
                                    </div>
                                    <div className="icon-container">
                                        <div className="image-container pull-right">
                                            <img className="" src={require('../../../public/img/clientsAssets/listIcon.png')}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="device-type-card">
                                    <div className="radiobox-container">
                                        <input type="radio" name="device-type"/>
                                    </div>
                                    <div className="detail-container">
                                        <h1>Mobile App</h1>
                                        <p>Android & IOS mobile apps. You have idea for next mobile app, let us hear about it.</p>
                                    </div>
                                    <div className="icon-container">
                                        <div className="image-container pull-right">
                                            <img className="" src={require('../../../public/img/clientsAssets/mobileIcon.png')}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={this.getClass("container", 4)}>
                        <div className="row">
                            <div className="form col-md-12">
                                <label>Project Name</label>
                                <input type="text" placeholder="Example: Banana Projcet" ref="projectName"/>
                            </div>
                            <div className="form col-md-12">
                                <label>Project Brief</label>
                                <textarea rows={4} placeholder="I wanna build e-commerce app as a SaaS" ref="projectDescription"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className={this.getClass("container", 5)}>
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
            </div>
        )
    }
}
