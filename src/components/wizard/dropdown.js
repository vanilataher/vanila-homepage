import React, {Component} from 'react';
import select2 from 'select2';
import 'select2/dist/css/select2.css';

export default class Dropdown extends Component {
    constructor() {
        super()
    }
    componentDidMount(){
        $('.searchable-dropdown').select2({
            placeholder: this.props.placeholder,
            allowClear: false
        });
    }
    updateValue(){
        this.props.callback();
    }
    render() {
        return (
            <select className="form-control searchable-dropdown" onChange={this.updateValue.bind(this)} multiple={this.props.multiple} defaultValue={this.props.default}>
              {
                  this.props.value.map(function(data, index) {
                      return (
                          <option key={index} value={data}>{data}</option>
                      )
                  })
              }
            </select>
        )
    }
}
