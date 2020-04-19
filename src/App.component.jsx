import React from 'react';
import { connect } from 'react-redux';
import style from './app.module.scss';

// Components
import Sidebar from './components/Sidebar/Sidebar.component';
import ListLinnks from './components/ListLinks/ListLinks.component';

// Actions
import {FilterByAC} from './redux/reducer/links/links.action';

class App extends React.Component {

  componentDidMount() {
      this.props.FilterByAC('home')
  }

  render() {
    return (
      <div className={style.app}>
        <Sidebar />
        <ListLinnks />
      </div>
    )
  }
 
}

export default connect(null, {FilterByAC})( App);
