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
//import { Field, reduxForm } from 'redux-form';

export default class RegisterView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      error: '',
      emailerror: ''
    };
  }

  onLoginView = () => {
    this.props.navigation.goBack();
  };

  onRegisterView = () => {
    if (
      !this.state.firstname ||
      !this.state.lastname ||
      !this.state.email ||
      !this.state.password
    ) {
      this.setState({ error: 'All fields are required' });
      return;
    }
    this.setState({ error: '' });
  };

  onClickListener = viewId => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (
      !this.state.firstname ||
      !this.state.lastname ||
      !this.state.email ||
      !this.state.password
    ) {
      this.setState({ error: 'All fields are required' });
      return;
    } else if (!re.test(String(this.state.email).toLowerCase())) {
      this.setState({
        emailerror: 'Email id is not in proper format',
        error: ''
      });
      return;
    }
    this.setState({ error: '', emailerror: '' });
    Alert.alert('Alert', ' User Registered successfully !');
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="FirstName"
            underlineColorAndroid="transparent"
            onChangeText={firstname => this.setState({ firstname })}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="LastName"
            underlineColorAndroid="transparent"
            onChangeText={lastname => this.setState({ lastname })}
          />
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
            placeholder="Email"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={email => this.setState({ email })}
          />
          {this.state.emailerror ? (
            <Text style={{ color: 'red', marginTop: 80, marginBottom: 16 }}>
              {this.state.emailerror}
            </Text>
          ) : null}
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

        <TouchableHighlight
          style={[styles.buttonContainer, styles.registerButton]}
          onPress={() => this.onClickListener('register')}>
          <Text style={styles.registerText}>register</Text>
        </TouchableHighlight>
        {this.state.error ? (
          <Text style={{ color: 'red', marginTop: -16, marginBottom: 16 }}>
            {this.state.error}
          </Text>
        ) : null}

        <TouchableHighlight
          style={styles.buttonContainer}
          onPress={() => this.onClickListener('restore_password')}>
          <Text>Forgot your password?</Text>
        </TouchableHighlight>

        <TouchableHighlight
          //style={styles.buttonContainer}
          onPress={this.onLoginView}>
          <Text>Login</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  registerButton: {
    backgroundColor: '#00b5ec'
  },
  registerText: {
    color: 'white'
  }
});

// const validate = values => {
//   const errors = {};
//   if (!values.name) {
//     errors.name = ' First Name is required';
//   }
//   if (!values.name) {
//     errors.name = ' Last Name is required';
//   }
//   if (!values.email) {
//     errors.email = 'Email is required';
//   }
//   if (!values.password) {
//     errors.password = 'Password is required';
//   }
//   return errors;
// };

// export default reduxForm({
//     form: 'register',
//     validate,
//   })
// )(RegisterView);
