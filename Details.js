import React, {Component} from 'react';
import {
  Container,
  Header,
  Left,
  Body,
  Button,
  Icon,
  Title,
  Card,
  CardItem,
  Text,
} from 'native-base';
import {ScrollView} from 'react-native';

export default class Details extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {navigation} = this.props;
    const {
      Brand_Name,
      Drug_Name,
      Usage,
      Route,
      Form,
      Dosage,
      Retail_Price,
      Additional_Instruction,
      Warning,
    } = this.props.route.params;
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => navigation.navigate('Search')}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Medicine Details</Title>
          </Body>
        </Header>
        <ScrollView>
          <Card>
            <CardItem header bordered>
              <Text>Brand Name</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>{Brand_Name}</Text>
              </Body>
            </CardItem>
            <CardItem footer />
          </Card>
          <Card>
            <CardItem header bordered>
              <Text>Drug Name</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>{Drug_Name}</Text>
              </Body>
            </CardItem>
            <CardItem footer />
          </Card>
          <Card>
            <CardItem header bordered>
              <Text>Usage</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>{Usage}</Text>
              </Body>
            </CardItem>
            <CardItem footer />
          </Card>
          <Card>
            <CardItem header bordered>
              <Text>Form</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>{Form}</Text>
              </Body>
            </CardItem>
            <CardItem footer />
          </Card>
          <Card>
            <CardItem header bordered>
              <Text>Dosage</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>{Dosage}</Text>
              </Body>
            </CardItem>
            <CardItem footer />
          </Card>
          <Card>
            <CardItem header bordered>
              <Text>Route</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>{Route}</Text>
              </Body>
            </CardItem>
            <CardItem footer />
          </Card>
          <Card>
            <CardItem header bordered>
              <Text>Retail Price</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>{Retail_Price}</Text>
              </Body>
            </CardItem>
            <CardItem footer />
          </Card>
          <Card>
            <CardItem header bordered>
              <Text>Additional Instruction</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>{Additional_Instruction}</Text>
              </Body>
            </CardItem>
            <CardItem footer />
          </Card>
          <Card>
            <CardItem header bordered>
              <Text>Warning</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>{Warning}</Text>
              </Body>
            </CardItem>
            <CardItem footer />
          </Card>
        </ScrollView>
      </Container>
    );
  }
}
