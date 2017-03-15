import React, {Component} from 'react';
import select2 from 'select2';
import 'select2/dist/css/select2.css';

export default class Dropdown extends Component {
    constructor() {
        super()
    }
    componentDidMount() {
        $(`#${this.props.id}`).select2({placeholder: this.props.placeholder, allowClear: false}).on('change', (e) => {
            this.props.callback($(`#${this.props.id}`).val());
        })
    }
    componentWillReceiveProps(nextProps) {
        $(`#${this.props.id}`).select2({placeholder: this.props.placeholder, allowClear: false}).on('change', (e) => {
            this.props.callback($(`#${this.props.id}`).val());
        })
    }
    render() {
        return (
            <select id={this.props.id} value={this.props.value} className="form-control searchable-dropdown" multiple={this.props.multiple} defaultValue={this.props.default}>
                {this.props.values.find(value => value.group_id === undefined) !== undefined
                    ? <optgroup>
                            {this.props.values.filter(value => value.group_id === undefined).map(function(data, index) {
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
                        </optgroup>
                    : null
}
                {this.props.values.find(value => value.group_id === 'software-engineer') !== undefined
                    ? <optgroup label={'Software Engineer'}>
                            {this.props.values.filter(value => value.group_id === 'software-engineer').map(function(data, index) {
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
                        </optgroup>
                    : null
}
                {this.props.values.find(value => value.group_id === 'designer') !== undefined
                    ? <optgroup label={'Designer'}>
                            {this.props.values.filter(value => value.group_id === 'designer').map(function(data, index) {
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
                        </optgroup>
                    : null
}
                {this.props.values.find(value => value.group_id === 'marketing') !== undefined
                    ? <optgroup label={'Marketing'}>
                            {this.props.values.filter(value => value.group_id === 'marketing').map(function(data, index) {
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
                        </optgroup>
                    : null
}
            </select>
        )
    }
}
