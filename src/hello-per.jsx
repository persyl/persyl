//EcmaScript 2015 syntax
import React from'react';
import data from './data';
import SvgApp from './svg-app.jsx';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as usersActions from './redux/actions/users';

class HelloPer extends React.Component{
	constructor(props){
		super(props);
	}

	componentWillMount(){
		this.props.usersActions.getUsers();
	}

  render(){
    return (<div>
      <p>Detta kommer från React-komponenten hello-per.js!</p>
			<h2>Användare</h2>
			{this.renderUsers()}
			<br />
      <SvgApp data={data} />
      </div>);
  }

	renderUsers(){
		const {users} = this.props;
		if(!users) return null;
		return users.map(user => <div>{user.firstName} {user.lastName}</div>);
	}
}

const mapStateToProps = (state) => {
	return {
		users: state.users.users,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		usersActions: bindActionCreators(usersActions ,dispatch)
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(HelloPer);
