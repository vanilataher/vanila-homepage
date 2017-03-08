import React, {Component} from 'react';

import 'jquery-ui/themes/base/core.css';
import 'jquery-ui/themes/base/theme.css';
import 'jquery-ui/themes/base/slider.css';
import 'jquery-ui/ui/core';
import 'jquery-ui/ui/widgets/slider';

export default class Slider extends Component {
    constructor() {
        super();
        this.state = {
            min: 0,
            max: 0
        }
    }
    componentDidMount() {
        const that = this;
        const defaultMin = this.props.default
            ? this.props.default[0]
            : this.props.min;
        const defaultMax = this.props.default
            ? this.props.default[1]
            : this.props.max;
        this.setState({
            min: this.props.format
                ? this.format(defaultMin)
                : defaultMin,
            max: this.props.format
                ? this.format(defaultMax)
                : defaultMax
        })
        $(`#${this.props.id}`).slider({
            range: true,
            min: that.props.min,
            max: that.props.max,
            step: that.props.step
                ? that.props.step
                : 1,
            values: [
                defaultMin, defaultMax
            ],
            slide: (event, ui) => {
                that.setState({min: ui.values[0], max: ui.values[1]})
            },
            change: (event, ui) => {
                if (typeof that.props.setValue != "undefined") {
                    that.props.setValue(ui.values[0], ui.values[1]);
                }
            }
        });
    }
    render() {
        return (
            <div className="slider-container">
                <div className="slider-label">${this.state.min}</div>
                <div className="slider" id={this.props.id}></div>
                <div className="slider-label">${this.state.max}</div>
            </div>
        )
    }
}
