import React, {Component} from 'react';
import {
  Container,
  Header,
  Item,
  Input,
  Icon,
  Text,
  List,
  ListItem,
} from 'native-base';
import axios from 'axios';

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      data: '',
    };
  }

  btnPressed = async x => {
    await axios
      .get(`http://10.0.2.2:5000/search?msg=${this.state.query}`)
      .then(response => {
        // this.SendBotResponse(response.data);
        this.setState({data: response.data});
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  };

  render() {
    const {navigation} = this.props;
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon
              name="ios-search"
              onPress={() => this.btnPressed(this.state.query)}
            />
            <Input
              placeholder="Enter Drug, Brand, Symptom"
              onChangeText={query => this.setState({query})}
            />
          </Item>
        </Header>
        <List
          dataArray={this.state.data}
          renderRow={item => (
            <ListItem
              onPress={() =>
                navigation.navigate('Details', {
                  Brand_Name: item.Brand_Name,
                  Drug_Name: item.Drug_Name,
                  Usage: item.Usage,
                  Route: item.Route,
                  Form: item.Form,
                  Dosage: item.Dosage,
                  Retail_Price: item.Retail_Price,
                  Additional_Instruction: item.Additional_Instruction,
                  Warning: item.Warning,
                })
              }>
              <ListItem itemHeader first>
                <Text>{item.Dosage}</Text>
                <Text>{item.title}</Text>
              </ListItem>
              <Text>{item.Brand_Name}</Text>
            </ListItem>
          )}
        />
      </Container>
    );
  }
}
