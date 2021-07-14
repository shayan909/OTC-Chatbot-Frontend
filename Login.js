import React, {Component, useState, useEffect} from 'react';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Title,
  Body,
  Button,
  Text,
} from 'native-base';
import {View, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';

// if (!user) {
//   return (
//     <View>
//       <Text>Login</Text>
//     </View>
//   );
// }

// return (
//   <View>
//     <Text>Welcome {user.email}</Text>
//   </View>
// );

export default class FloatingLabelExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isDisabled: true,
    };
    this.props.navigation.setOptions({tabBarVisible: false});
  }

  createUser = () => {
    auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        Alert.alert('User account created');
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  signIn = () => {
    auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        this.props.navigation.navigate('Chat');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };
  render() {
    return (
      <Container style={{backgroundColor: 'lightblue'}}>
        <Header>
          <Body>
            <Title>Personal Health Management</Title>
          </Body>
        </Header>

        <Content>
          <Form style={{marginTop: 150}}>
            <Item
              style={{marginLeft: 50, marginRight: 80, borderColor: 'black'}}
              bordered
              floatingLabel>
              <Label>    Email:</Label>
              <Input
                onChangeText={email =>
                  this.setState({email: email, isMail: false})
                }
              />
            </Item>
            <Item
              style={{marginLeft: 50, marginRight: 80, borderColor: 'black'}}
              floatingLabel
              last>
              <Label>Password:</Label>
              <Input secureTextEntry={true}
                onChangeText={password => {
                  this.setState({password: password, isPass: true});

                  // if (this.state.password !== '') {
                  //   this.setState({password: password, isPass: false});
                  // }
                }}
              />
            </Item>
          </Form>
        </Content>

        <Button
          style={{marginBottom: 80, marginLeft: 80, marginRight: 80}}
          rounded
          block
          onPress={this.signIn}
          // disabled={}
        >
          <Title>Login</Title>
        </Button>
        {/* <Button
          style={{
            marginBottom: 0,
            marginLeft: 130,
            marginRight: 40,
            position: 'relative',
          }}
          rounded
          transparent>
          <Title style={{color: 'black'}}>Forgot Password?</Title>
        </Button> */}

        <Button
          style={{
            marginBottom: 80,
            marginLeft: 170,
            marginRight: 80,
          }}
          rounded
          transparent
          onPress={this.createUser}>
          <Title style={{color: 'black'}}>Sign Up</Title>
        </Button>
      </Container>
    );
  }
}
