import React from 'react';
import "./Search.css"

class Search extends React.Component {

    filUpdate(){
        const val = this.myValue.value
        this.props.filterUpdate(val)
    }

    render() {
      return (
    <header > 
        <form>
          <input 
           className = "filter"
            type='text'
            ref={ (value) => this.myValue = value }
            placeholder='Filter name or surname'
           onChange={this.filUpdate.bind(this)}
          /> 
        </form>
        </header> 
      )
    }
  }
  
  export default Search;