import React, {Component} from 'react';
export default class WizardCard extends Component {
    constructor() {
        super();
    }
    updateCategory(){
        this.props.updateCategory(this.props.type);
    }
    render() {
        const cardClass = (this.props.type == this.props.currentCategory) ? 'wizard-card active' : 'wizard-card';
        return (
            <div className={cardClass} onClick={this.updateCategory.bind(this)}>
                <div className="image" style={{backgroundImage:`url(${this.props.img})`}} />
                <div className="heading">
                    {this.props.heading}
                </div>
            </div>
        )
    }
}
