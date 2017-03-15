import React, {Component} from 'react';
import { ToastContainer, ToastMessage } from 'react-toastr';

import {observer} from 'mobx-react';

import Card from './wizard-card';
import Slider from './slider';
import DatePicker from './datepicker';
import SearchableDropDown from './dropdown';

import FreelancerSignupStore from '../../stores/freelancer_signup';
import API from '../../helpers/api';

const ToastMessageFactory = React.createFactory(ToastMessage.animation);

@observer
export default class WizardForm extends Component {
    constructor() {
        super();
        this.state = {
            //category:'',
            //type:'',
            //country:['Pakistan','Serbia','United States','France','Germany','United Arab Emirates'],
            //role:['Frontend Developer','Backend Developer','Designer'],
            //languages:['React JS','Angular JS','Javascript','JQuery','Meteor','React JS','Angular JS','Javascript','JQuery','Meteor']
        }

        FreelancerSignupStore.hydrateCountries();
        FreelancerSignupStore.hydrateSkills();
        FreelancerSignupStore.hydrateTitles();

        this.addAlert = this.addAlert.bind(this);
        this.clearAlert = this.clearAlert.bind(this);

        setTimeout(this.addAlert, 1000);
    }
    getClass(current, step) {
        if (step == this.props.currentStep) {
            return current;
        } else {
            return current + ' hidden';
        }
    }

    isNullOrEmpty(val) {
        return val === null || val.length === 0;
    }

    nextStep() {
        console.log(FreelancerSignupStore.requestBody);

        switch (this.props.currentStep) {
            case 1:
                break;
            case 2:
                if (this.isNullOrEmpty(FreelancerSignupStore.firstName) ||
                    this.isNullOrEmpty(FreelancerSignupStore.lastName) ||
                    this.isNullOrEmpty(FreelancerSignupStore.username) ||
                    this.isNullOrEmpty(FreelancerSignupStore.password) ||
                    this.isNullOrEmpty(FreelancerSignupStore.email)) {
                        return;
                    }
                break;
            case 3:
                if (this.isNullOrEmpty(FreelancerSignupStore.country) ||
                    this.isNullOrEmpty(FreelancerSignupStore.city)) {
                        return;
                    }
                break;
            case 4:
                if (this.isNullOrEmpty(FreelancerSignupStore.title) ||
                    this.isNullOrEmpty(FreelancerSignupStore.skills)) {
                        return;
                    }
                break;
            case 5:
                if (this.isNullOrEmpty(FreelancerSignupStore.hourly) ||
                    this.isNullOrEmpty(FreelancerSignupStore.salary)) {
                        return;
                    }
                break;
        }

        if (this.props.currentStep === 5) {
            API.registerAsFreelancer().then(() => {
                window.location.href = 'http://159.203.97.116/';
            });
        }

        if (this.props.currentStep === 2) {
            API.retrieveUser({ username: FreelancerSignupStore.username })
                .then((data) => { FreelancerSignupStore.setUsername(''); })
                .catch((data) => {
                    if (data.err === undefined) {
                        this.props.nextStep();
                    }
                });
        } else {
            this.props.nextStep();
        }
    }
    updateBudget() {

    }
    updateCategoryCard(type) {
        this.setState({category: type})
    }
    updateTypeCard(type) {
        this.setState({type: type})
    }
    checkType(type){
        if(this.state.type == type){
            return 'checked';
        }
        else{
            return '';
        }
    }

    addAlert() {
        this.refs.container.success(`Welcome to vanila!`, `Alert`, {
            closeButton: true,
        });
    }

    clearAlert() {
        this.refs.container.clear();
    }

    render() {
        var buttonText = this.props.currentStep == 5
            ? 'finish'
            : 'next';
        var buttonClass = this.props.currentStep == 5
            ? 'danger'
            : '';
        if(this.props.currentStep == 1){
            buttonClass = 'hidden';
        }
        var url = (this.state.avatar != null) ? this.state.avatar : require('../../../public/img/freelancerAssets/placeholder.jpg');
        var avatarImage = {
          backgroundImage:`url(${url})`
        }
        return (
            <div className="wizard-form row">
                <ToastContainer
                    toastMessageFactory={ToastMessageFactory}
                    ref="container"
                    className="toast-top-right"
                />
                <div className="col-md-12">
                    <div className={this.getClass("container animated bounceInLeft", 1)}>
                        <div className="row">
                            <div className="col-md-12 text-center login-button-container">
                                <button className="facebook-button" onClick={this.nextStep.bind(this)}>
                                    <img src={require('../../../public/img/freelancerAssets/facebook.png')} />
                                    Sign in with Facebook
                                </button>
                                OR
                                <button className="register-button" onClick={this.nextStep.bind(this)}>Register with Email</button>
                            </div>
                        </div>
                    </div>
                    <div className={this.getClass("container animated bounceInLeft", 2)}>
                        <div className="row">
                            <div className="form col-md-6">
                                <label className="form-heading">First Name</label>
                                <input type="text" name="fname" autoComplete="given-name" defaultValue={FreelancerSignupStore.firstName} placeholder="John" ref="firstname" onChange={(event) => FreelancerSignupStore.setFirstName(event.target.value)}/>
                            </div>
                            <div className="form col-md-6">
                                <label className="form-heading">Last Name</label>
                                <input type="text" name="lname" autoComplete="family-name" defaultValue={FreelancerSignupStore.lastName} placeholder="Smith" ref="lastname" onChange={(event) => FreelancerSignupStore.setLastName(event.target.value)}/>
                            </div>
                            <div className="form col-md-6">
                                <label className="form-heading">Username</label>
                                <input type="text" name="username" autoComplete="username" defaultValue={FreelancerSignupStore.username} placeholder="johny" onChange={(event) => FreelancerSignupStore.setUsername(event.target.value)}/>
                            </div>
                            <div className="form col-md-6">
                                <label className="form-heading">Password</label>
                                <input type="password" name="password" autoComplete="new-password" defaultValue={FreelancerSignupStore.password} placeholder="password" onChange={(event) => FreelancerSignupStore.setPassword(event.target.value)}/>
                            </div>
                            <div className="form col-md-12">
                                <label className="form-heading">Email</label>
                                <input type="email" name="email" autoComplete="email" defaultValue={FreelancerSignupStore.email} placeholder="john@example.com" ref="email" onChange={(event) => FreelancerSignupStore.setEmail(event.target.value)}/>
                            </div>
                        </div>
                    </div>
                    <div className={this.getClass("container animated bounceInLeft", 3)}>
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <div className="avatar-container" style={avatarImage}/>
                                <button className="image-upload-button">Upload Avatar</button>
                            </div>
                            <div className="form col-md-6">
                                <label className="form-heading">Country</label>
                                <SearchableDropDown id="country-dropdown" name="country" autoComplete="country" defaultValue={FreelancerSignupStore.country} values={FreelancerSignupStore.COUNTRIES} placeholder="Example: France" multiple={false} callback={FreelancerSignupStore.setCountry}/>
                            </div>
                            <div className="form col-md-6">
                                <label className="form-heading">City</label>
                                <input type="text" name="city" autoComplete="address-level2" defaultValue={FreelancerSignupStore.city} placeholder="Paris" onChange={(event) => FreelancerSignupStore.setCity(event.target.value)}/>
                            </div>
                        </div>
                    </div>
                    <div className={this.getClass("container animated bounceInLeft", 4)}>
                        <div className="row">
                            <div className="form col-md-12">
                                <label className="form-heading">Select your Title</label>
                                <SearchableDropDown id="title-dropdown" defaultValue={FreelancerSignupStore.title} values={FreelancerSignupStore.TITLES}  multiple={false} callback={FreelancerSignupStore.setTitle}/>
                            </div>
                            <div className="form col-md-12">
                                <label className="form-heading">Add your skills</label>
                                <SearchableDropDown id="skills-dropdown" defaultValue={FreelancerSignupStore.skills} values={FreelancerSignupStore.SKILLS} placeholder="Example: Javascript" multiple={true} callback={FreelancerSignupStore.toggleSkills}/>
                            </div>
                        </div>
                    </div>
                    <div className={this.getClass("container animated bounceInLeft", 5)}>
                        <div className="row">
                            <div className="form col-md-5">
                                <label className="form-heading">Your Rates</label>
                                <input type="number" min="0" defaultValue={FreelancerSignupStore.hourly} placeholder="$20 / hr" onChange={(event) => FreelancerSignupStore.setHourlyRate(event.target.value)}/>
                            </div>
                            <div className="form col-md-7 form-group">
                                <label className="form-heading">Monthly Salary</label>
                                <input type="number" min="0" defaultValue={FreelancerSignupStore.salary} placeholder="$2000" onChange={(event) => FreelancerSignupStore.setSalary(event.target.value)}/>
                                <select>
                                    <option>Full Time</option>
                                    <option>Part Time</option>
                                </select>
                          </div>
                            <div className="form col-md-12">
                                <label className="form-heading">Github Username</label>
                                <input type="text" defaultValue={FreelancerSignupStore.github} placeholder="Example: johnsmith" onChange={(event) => FreelancerSignupStore.setGithubUsername(event.target.value)}/>
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
