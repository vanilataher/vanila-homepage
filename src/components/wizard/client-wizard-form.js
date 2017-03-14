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
            console.log(ClientSignupStore.requestBody);
            API.registerAsClient().then(() => {
                window.location.href = 'http://159.203.97.116/';
            }).catch(err => console.log(err));
        } else {
            console.log(ClientSignupStore.type);
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
        if(ClientSignupStore.type === type){
            return true;
        }
        else{
            return false;
        }
    }

    renderTypeRow({ id, title, description, icon }) {

        return (
            <div className="device-type-card" onClick={this.updateTypeCard.bind(this, id)}>
                <div className="form radiobox-container">
                    <input type="radio" name="device-type" checked={this.checkType(id)}/>
                </div>
                <div className="detail-container">
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
                <div className="icon-container">
                    <div className="image-container pull-right">
                        <img className="" src={icon}/>
                    </div>
                </div>
            </div>
        )
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
                                <label className="form-heading enterLeft-client">First Name</label>
                                <input type="text" value={ClientSignupStore.firstName} placeholder="John" ref="firstname" onChange={(event) => ClientSignupStore.setFirstName(event.target.value)}/>
                            </div>
                            <div className="form col-md-6">
                                <label className="form-heading">Last Name</label>
                                <input type="text" value={ClientSignupStore.lastName} placeholder="Smith" ref="lastname" onChange={(event) => ClientSignupStore.setLastName(event.target.value)}/>
                            </div>
                            <div className="form col-md-6">
                                <label className="form-heading">Username</label>
                                <input type="text" value={ClientSignupStore.username} placeholder="johny" ref="username" onChange={(event) => ClientSignupStore.setUsername(event.target.value)}/>
                            </div>
                            <div className="form col-md-6">
                                <label className="form-heading">Password</label>
                                <input type="password" value={ClientSignupStore.password} placeholder="password" ref="password" onChange={(event) => ClientSignupStore.setPassword(event.target.value)}/>
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
                                {
                                    ClientSignupStore.subcategories.map((arg) => {
                                        console.log(arg);
                                        return this.renderTypeRow({ ...arg });
                                    })
                                }
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
                                    <input type="radio" checked={ClientSignupStore.contractType === 'fixed'} name="contract-type" onChange={() => ClientSignupStore.setContractType('fixed') /* TODO: Make this into an array */}/>
                                    Fixed
                                </label>
                                <label className="radio-label">
                                    <input type="radio" checked={ClientSignupStore.contractType === 'hourly'} name="contract-type" onChange={() => ClientSignupStore.setContractType('hourly') /* TODO: Make this into an array */}/>
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
                                        <DatePicker value={ClientSignupStore.startDate} onChange={ClientSignupStore.setStartDate} />
                                    </div>
                                    <div className="col-md-6">
                                        <DatePicker value={ClientSignupStore.endDate} onChange={ClientSignupStore.setEndDate} />
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
