import React, {Component} from 'react';

import {observer} from 'mobx-react';

import Card from './wizard-card';
import Slider from './slider';
import DatePicker from './datepicker';
import SearchableDropDown from './dropdown';

import FreelancerSignupStore from '../../stores/freelancer_signup';
import API from '../../helpers/api';

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
    }
    getClass(current, step) {
        if (step == this.props.currentStep) {
            return current;
        } else {
            return current + ' hidden';
        }
    }
    nextStep() {
        console.log(FreelancerSignupStore.requestBody);

        if (this.props.currentStep === 5) {
            API.registerAsFreelancer();
        }

        this.props.nextStep();
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
            <div className="wizard-form">
                <div className="col-md-12">
                    <div className={this.getClass("container", 1)}>
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
                    <div className={this.getClass("container", 2)}>
                        <div className="row">
                            <div className="form col-md-6">
                                <label className="form-heading">First Name</label>
                                <input type="text" value={FreelancerSignupStore.firstName} placeholder="John" ref="firstname" onChange={(event) => FreelancerSignupStore.setFirstName(event.target.value)}/>
                            </div>
                            <div className="form col-md-6">
                                <label className="form-heading">Last Name</label>
                                <input type="text" value={FreelancerSignupStore.lastName} placeholder="Smith" ref="lastname" onChange={(event) => FreelancerSignupStore.setLastName(event.target.value)}/>
                            </div>
                            <div className="form col-md-12">
                                <label className="form-heading">Email</label>
                                <input type="email" value={FreelancerSignupStore.email} placeholder="john@example.com" ref="email" onChange={(event) => FreelancerSignupStore.setEmail(event.target.value)}/>
                            </div>
                        </div>
                    </div>
                    <div className={this.getClass("container", 3)}>
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <div className="avatar-container" style={avatarImage}/>
                                <button className="image-upload-button">Upload Avatar</button>
                            </div>
                            <div className="form col-md-6">
                                <label className="form-heading">Country</label>
                                <SearchableDropDown id="country-dropdown" value={FreelancerSignupStore.country} values={FreelancerSignupStore.COUNTRIES} placeholder="Example: France" multiple={false} callback={FreelancerSignupStore.setCountry}/>
                            </div>
                            <div className="form col-md-6">
                                <label className="form-heading">City</label>
                                <input type="text" value={FreelancerSignupStore.city} placeholder="Paris" onChange={(event) => FreelancerSignupStore.setCity(event.target.value)}/>
                            </div>
                        </div>
                    </div>
                    <div className={this.getClass("container", 4)}>
                        <div className="row">
                            <div className="form col-md-12">
                                <label className="form-heading">Select your Title</label>
                                <SearchableDropDown id="title-dropdown" value={FreelancerSignupStore.title} values={FreelancerSignupStore.TITLES}  multiple={false} callback={FreelancerSignupStore.setTitle}/>
                            </div>
                            <div className="form col-md-12">
                                <label className="form-heading">Add your skills</label>
                                <SearchableDropDown id="skills-dropdown" value={FreelancerSignupStore.skills} values={FreelancerSignupStore.SKILLS} placeholder="Example: Javascript" multiple={true} callback={FreelancerSignupStore.toggleSkills}/>
                            </div>
                        </div>
                    </div>
                    <div className={this.getClass("container", 5)}>
                        <div className="row">
                            <div className="form col-md-5">
                                <label className="form-heading">Your Rates</label>
                                <input type="number" min="0" value={FreelancerSignupStore.hourly} placeholder="$20 / hr" onChange={(event) => FreelancerSignupStore.setHourlyRate(event.target.value)}/>
                            </div>
                            <div className="form col-md-7">
                                <label className="form-heading">Monthly Salary</label>
                                <input type="number" min="0" value={FreelancerSignupStore.salary} placeholder="$2000" onChange={(event) => FreelancerSignupStore.setSalary(event.target.value)}/>
                            </div>
                            <div className="form col-md-12">
                                <label className="form-heading">Github Username</label>
                                <input type="text" value={FreelancerSignupStore.github} placeholder="Example: johnsmith" onChange={(event) => FreelancerSignupStore.setGithubUsername(event.target.value)}/>
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
