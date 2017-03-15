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
            min: this.props.min,
            max: this.props.max,
            step: this.props.step
                ? this.props.step
                : 1,
            values: [
                defaultMin, defaultMax
            ],
            slide: (event, ui) => {
                this.setState({min: ui.values[0], max: ui.values[1]})
            },
            change: (event, ui) => {
                if (typeof this.props.setValue != "undefined") {
                    this.props.setValue(ui.values[0], ui.values[1]);
                }
            }
        });
    }
    componentWillReceiveProps(nextprops){
      $(`#${this.props.id}`).slider( "option", "min", nextprops.min);
      $(`#${this.props.id}`).slider( "option", "max", nextprops.max);
      $(`#${this.props.id}`).slider( "option", "step", nextprops.step);
      $(`#${this.props.id}`).slider( "option", "values", [nextprops.min,nextprops.max]);
      this.setState({min: nextprops.min, max: nextprops.max});
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
