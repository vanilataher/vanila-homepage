import React, {Component} from 'react';
import select2 from 'select2';
import 'select2/dist/css/select2.css';

export default class Dropdown extends Component {
    constructor() {
        super()
    }
    componentDidMount() {
        $(`#${this.props.id}`).select2({placeholder: this.props.placeholder, allowClear: false}).on('change', (e) => {
            this.props.callback(e.target.value);
        });
    }
    render() {
        return (
            <select id={this.props.id} value={this.props.value} className="form-control searchable-dropdown" multiple={this.props.multiple} defaultValue={this.props.default}>
                {this.props.values.map(function(data, index) {
                    let id,
                        name;

                    if (typeof data === 'string') {
                        id = data;
                        name = data;
                    } else {
                        id = data.id;
                        name = data.name;
                    }

                    return (
                        <option key={index} value={id}>{name}</option>
                    )
                })
}
            </select>
        )
    }
}
