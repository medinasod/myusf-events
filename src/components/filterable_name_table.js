import React, { Component } from 'react';
import SearchBar from './search_bar';
import NameTable from './name_table';
import Pager from './pager';

class FilterableNameTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      isFemaleOnly: true,
      isMaleOnly: true,
    };

    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(filterText, isFemaleOnly, isMaleOnly) {
    this.setState({
      filterText,
      isFemaleOnly,
      isMaleOnly,
    });
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          isFemaleOnly={this.state.isFemaleOnly}
          isMaleOnly={this.state.isMaleOnly}
          onUserInput={this.handleUserInput}
        />
        <NameTable
          events={this.props.events}
          filterText={this.state.filterText}
          isFemaleOnly={this.state.isFemaleOnly}
          isMaleOnly={this.state.isMaleOnly}
        />
        <Pager events={this.props.events} />
      </div>
    );
  }
}

export default FilterableNameTable;
