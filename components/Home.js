import * as React from 'react';
import {
  TextInput,
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  Picker,
} from 'react-native';
import momentTZ from 'moment-timezone';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';

const timezones = momentTZ.tz.names();
const currenttz = momentTZ.tz.guess();

export default function Home(compass) {
  return (
    <View style={styles.container}>
      <Card style={styles.upcard}>
        <View style={styles.contact}>
          <Image
            style={styles.image}
            source={{
              uri:
                'https://images.unsplash.com/photo-1581629774175-42f704962488?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
            }}
          />
          <View style={styles.cbox}>
            <Text style={styles.chead}>John Fisher</Text>
            <Text> I am free... </Text>
            <Text
              style={{
                paddingLeft: 2,
                fontSize: 14,
                backgroundColor: '#e3e3e3',
                borderRadius: 5,
              }}>
              {' '}
              Mon-Thu (4-5 p.m.){' '}
            </Text>
          </View>
        </View>
        <Picker style={styles.input2} selectedValue={currenttz}>
          {timezones.map((i) => {
            return <Picker.Item label={i} value={i} />;
          })}
        </Picker>
      </Card>
      <Card style={styles.downcard}>
        <Text style={styles.chead}> Upcoming Meetings: </Text>
        <View style={{ height: 10 }} />
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => {
          return (
            <Card style={{ padding: 3 }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{ fontSize: 18 }}> 01/0{i}/20 </Text>
                <Text style={styles.link}>zoomlink.com/to</Text>
                <Text style={{ fontSize: 18 }}> - </Text>
              </View>
              <View style={{ height: 10 }} />
            </Card>
          );
        })}
      </Card>

      <View style={{ height: 5 }} />

      <Button
        color={'#01C8F0'}
        justifyContent={'center'}
        borderRadius={10}
        title="+ New Meeting"
        onPress={() => compass.navigation.navigate('YOUnIte: New Meeting')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'teal',
    height: '100%',
    padding: 12,
    flex: 1,
    justifyContent: 'center',
  },
  upcard: {
    padding: 6,
    marginBottom: 5,
  },
  downcard: {
    padding: 6,
  },
  contact: {
    flexDirection: 'row',
    padding: 6,
  },
  image: {
    marginRight: 5,
    height: 70,
    width: 70,
    borderRadius: 5,
  },
  chead: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlignVertical: 'right',
  },
  cbox: {
    paddingLeft: 20,
    flexDirection: 'column',
  },
  link: {
    fontSize: 18,
    color: 'blue',
  },
  input2: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    height: 40,
    width: '100%',
    padding: 5,
  },
});
