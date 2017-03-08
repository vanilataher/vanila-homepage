import React, {Component} from 'react';
import {observer} from 'mobx-react';

import ClientSignupStore from '../../stores/client_signup';

import API from '../../helpers/api';

import Card from './wizard-card';
import Slider from './slider';
import DatePicker from './datepicker';

@observer
export default class WizardForm extends Component {
    constructor() {
        super();
        this.state = {
            category:'',
            type:''
        }
    }
    getClass(current, step) {
        if (step == this.props.currentStep) {
            return current;
        } else {
            return current + ' hidden';
        }
    }
    nextStep() {
        if (this.props.currentStep === 5) {
            API.registerAsClient().catch(err => console.log(err));
        } else {
            this.props.nextStep();
        }
    }
    updateBudget(min, max) {
        ClientSignupStore.setMinBudget(min);
        ClientSignupStore.setMaxBudget(max);
    }
    updateCategoryCard(type) {
        ClientSignupStore.setCategory(type);
    }
    updateTypeCard(type) {
        // TODO: This will be STORE ONLY.
        this.setState({type: type})
        ClientSignupStore.setType(type);
    }
    checkType(type){
        if(this.state.type == type){
            return 'checked';
        }
        else{
            return '';
        }
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
                                <input type="text" value={ClientSignupStore.firstName} placeholder="John" ref="firstname" onChange={(event) => ClientSignupStore.setFirstName(event.target.value)}/>
                            </div>
                            <div className="form col-md-6">
                                <label className="form-heading">Last Name</label>
                                <input type="text" value={ClientSignupStore.lastName} placeholder="Smith" ref="lastname" onChange={(event) => ClientSignupStore.setLastName(event.target.value)}/>
                            </div>
                            <div className="form col-md-12">
                                <label className="form-heading">Email</label>
                                <input type="email" value={ClientSignupStore.email} placeholder="john@example.com" ref="email" onChange={(event) => ClientSignupStore.setEmail(event.target.value)}/>
                            </div>
                        </div>
                    </div>
                    <div className={this.getClass("", 2)}>
                        <div className="row">
                            <div className="col-md-12 card-container">
                                <Card currentCategory={ClientSignupStore.category} updateCategory={this.updateCategoryCard.bind(this)} type={ClientSignupStore.CATEGORIES.WEB_MOBILE_APP} heading={'Web & Mobile App Development'} img={require('../../../public/img/clientsAssets/app-developmentAsset1.png')}/>
                                <Card currentCategory={ClientSignupStore.category} updateCategory={this.updateCategoryCard.bind(this)} type={ClientSignupStore.CATEGORIES.BRANDING_DESIGN} heading={'Branding & Design'} img={require('../../../public/img/clientsAssets/ui-uxAsset1.png')}/>
                                <Card currentCategory={ClientSignupStore.category} updateCategory={this.updateCategoryCard.bind(this)} type={ClientSignupStore.CATEGORIES.MARKETING} heading={'Marketing'} img={require('../../../public/img/clientsAssets/freelancer2Asset1.png')}/>
                                <div className="clear"/>
                            </div>
                        </div>
                    </div>
                    {/* This part is missing, needs to be created. */}
                    <div className={this.getClass("container", 3)}>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="device-type-card" onClick={this.updateTypeCard.bind(this,'website')}>
                                    <div className="form radiobox-container">
                                        <input type="radio" name="device-type" checked={this.checkType('website')}/>
                                    </div>
                                    <div className="detail-container">
                                        <h1>Website / Web App</h1>
                                        <p>Build a personal or company website, blog, online store, or social community app, game, etc.</p>
                                    </div>
                                    <div className="icon-container">
                                        <div className="image-container pull-right">
                                            <img className="" src={require('../../../public/img/clientsAssets/listIcon.png')}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="device-type-card" onClick={this.updateTypeCard.bind(this,'mobile')}>
                                    <div className="form radiobox-container">
                                        <input type="radio" name="device-type" checked={this.checkType('mobile')}/>
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
                                <input type="text" value={ClientSignupStore.projectName} placeholder="Example: Banana Project" ref="projectName" onChange={(event) => ClientSignupStore.setProjectName(event.target.value)}/>
                            </div>
                            <div className="form col-md-12">
                                <label className="form-heading">Project Brief</label>
                                <textarea rows={4} value={ClientSignupStore.projectDescription} placeholder="I wanna build e-commerce app as a SaaS" ref="projectDescription" onChange={(event) => ClientSignupStore.setProjectDescription(event.target.value)}></textarea>
                            </div>
                        </div>
                    </div>
                    <div className={this.getClass("container", 5)}>
                        <div className="row">
                            <div className="form col-md-12">
                                <label className="form-heading">Contract Type</label>
                                <label className="radio-label">
                                    <input type="radio" name="contract-type" onChange={() => ClientSignupStore.setContractType('fixed') /* TODO: Make this into an array */}/>
                                    Fixed
                                </label>
                                <label className="radio-label">
                                    <input type="radio" name="contract-type" onChange={() => ClientSignupStore.setContractType('hourly') /* TODO: Make this into an array */}/>
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
                                        <DatePicker onChange={ClientSignupStore.setStartDate} />
                                    </div>
                                    <div className="col-md-6">
                                        <DatePicker onChange={ClientSignupStore.setEndDate} />
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
