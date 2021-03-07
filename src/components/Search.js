
import React from 'react';
import './Search.css';

export default function Search({ filterUpdate }) {
  return (
    <header>
      <form>
        <input
          className='filter'
          type='text'
          placeholder='Filter name or surname'
          onChange={(e) => filterUpdate(e.target.value)}
        />
      </form>
    </header>
  );
}



























// class Search extends React.Component {

//     filUpdate(){
//         const val = this.myValue.value
//         this.props.filterUpdate(val)
//     }

//     render() {
//       return (
//     <header > 
//         <form>
//           <input 
//            className = "filter"
//             type='text'
//             ref={ (value) => this.myValue = value }
//             placeholder='Filter name or surname'
//            onChange={this.filUpdate.bind(this)}
//           /> 
//         </form>
//         </header> 
//       )
//     }
//   }
  
//   export default Search;