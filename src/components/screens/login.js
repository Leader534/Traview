import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';
import { NavigationActions } from 'react-navigation';
//import { connect } from 'react-redux';
//import { Provider } from 'react-redux';
//import store from './reducers/index';
//import { store } from 'redux';
//import { reducers } from './reducers';

export default class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: ''
    };
  }
  // render() {
  //   return (
  //     <Provider store={store}>
  //       <LoginView />
  //     </Provider>
  //   );
  // }

  // componentDidUpdate(prevProps) {
  //   if (
  //     prevProps.successfulLogin !== this.props.successfulLogin &&
  //     this.props.successfulLogin
  //   ) {
  //     this.props.navigation.navigate('Home');
  //   } else if (
  //     prevProps.successfulLogin !== this.props.successfulLogin &&
  //     this.props.successfulLogin === false
  //   ) {
  //     this.showAlert();
  //   }
  // }

  onLogin = () => {
    if (!this.state.username || !this.state.password) {
      this.setState({ error: 'All fields are required' });
      return;
    }
    this.props.onLogin(this.state.username, this.state.password);
  };

  onLoginView = () => {
    if (!this.state.username || !this.state.password) {
      this.setState({ error: 'All fields are required' });
      return;
    }
    this.setState({ error: '' });
    this.props.navigation.navigate('Home');
  };

  onForgotPassword = () => {
    this.props.navigation.navigate('ForgotPassword');
  };

  onRegisterView = () => {
    this.props.navigation.navigate('RegisterView');
  };

  // onRegister = () => {
  //   this.props.navigation.navigate('Register');
  // };

  // onClickListener = viewId => {
  //   Alert.alert('Alert', 'Button pressed ' + viewId);
  // };

  // renderRegisterView() {
  //   return (
  //     <TouchableHighlight onPress={this.onRegisterView}>
  //       <Text>Register</Text>
  //     </TouchableHighlight>
  //   );
  // }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Traview</Text>
        </View>

        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={{
              uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'
            }}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Username"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={username => this.setState({ username })}
          />
        </View>

        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={{
              uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'
            }}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={password => this.setState({ password })}
          />
        </View>
        {this.state.error ? (
          <Text style={{ color: 'red', marginTop: -16, marginBottom: 16 }}>
            {this.state.error}
          </Text>
        ) : null}
        <TouchableHighlight
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={this.onLoginView}>
          <Text>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.buttonContainer}
          onPress={() => this.onClickListener('Restore Password')}>
          <Text>Forgot your password?</Text>
        </TouchableHighlight>

        <TouchableHighlight
          //style={styles.buttonContainer}
          onPress={this.onRegisterView}>
          <Text>Register</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     ...state.loginReducer
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     onLogin: (username, password) => {
//       dispatch(LoginActions.onLogin(username, password));
//     }
//   };
// };
// const Provider = require('react-redux').Provider;
// const createStore = require('redux').createStore;
//const reducers = require('./reducers').default;

// let store = createStore(reducers);

// <Provider store={store}>
//   <LoginView />
// </Provider>;

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(LoginView);

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#00b5ec',
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    width: 250,
    borderRadius: 30,
    marginBottom: 20
  },
  headerText: {
    color: 'white',
    fontSize: 30
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC'
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30
  },
  loginButton: {
    backgroundColor: '#00b5ec'
  },
  loginText: {
    color: 'white'
  }
});
