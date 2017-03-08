import React, {Component} from 'react';
import Card from './wizard-card';
import Slider from './slider';
import DatePicker from './datepicker';

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
    updateBudget(){

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
                                <label className="form-heading">First Name</label>
                                <input type="text" placeholder="John" ref="firstname"/>
                            </div>
                            <div className="form col-md-6">
                                <label className="form-heading">First Name</label>
                                <input type="text" placeholder="Smith" ref="lastname"/>
                            </div>
                            <div className="form col-md-12">
                                <label className="form-heading">Email</label>
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
                                    <div className="form radiobox-container">
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
                                    <div className="form radiobox-container">
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
                                <label className="form-heading">Project Name</label>
                                <input type="text" placeholder="Example: Banana Project" ref="projectName"/>
                            </div>
                            <div className="form col-md-12">
                                <label className="form-heading">Project Brief</label>
                                <textarea rows={4} placeholder="I wanna build e-commerce app as a SaaS" ref="projectDescription"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className={this.getClass("container", 5)}>
                        <div className="row">
                            <div className="form col-md-12">
                                <label className="form-heading">Contract Type</label>
                                <label className="radio-label">
                                    <input type="radio" name="contract-type"/>
                                    Fixed
                                </label>
                                <label className="radio-label">
                                    <input type="radio" name="contract-type"/>
                                    Hourly
                                </label>
                            </div>
                            <div className="form col-md-12">
                                <label className="form-heading">Budget Range</label>
                                <Slider id={"budget-slider"} setValue={this.updateBudget.bind(this)} default={[5000,14000]} min={0} max={20000} step={1}/>
                            </div>
                            <div className="form col-md-12">
                                <label className="form-heading">Start / End Date</label>
                                <p className="form-subheading">When do you wanna start and end the project</p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <DatePicker />
                                    </div>
                                    <div className="col-md-6">
                                        <DatePicker />
                                    </div>
                                </div>
                            </div>
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
