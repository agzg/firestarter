import * as React from 'react';
import { TextInput,Text, View, StyleSheet, Button, Picker } from 'react-native';

import momentTZ from 'moment-timezone';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';

const timezones = momentTZ.tz.names();
const currenttz = momentTZ.tz.guess();

export default function InputPage(compass) {
  return (
    <View style={styles.mframe}>
      <Card style={styles.card}>
        <Text style={styles.normal1}>Participant 1:</Text>
        <Text style={styles.normal2}>Select Timezone (UTC):</Text>
        <Picker style={styles.input2} selectedValue={5}>
          {timezones.map((i) => {
            return <Picker.Item label={i} value={i} />;
          })}
        </Picker>
        <View>
          <Text style={styles.normal3}>Preferred Meeting Time:</Text>
          <TextInput style={styles.input1} />
        </View>

        <View style={{ height: 10 }} />
      </Card>

      <Card style={styles.card}>
        <Text style={styles.normal1}>Participant 2:</Text>
        <Text style={styles.normal2}>Select Timezone (UTC):</Text>
        <Picker style={styles.input2} selectedValue={26}>
          {timezones.map((i) => {
            return <Picker.Item label={i} value={i} />;
          })}
        </Picker>
        <View>
          <Text style={styles.normal3}>Preferred Meeting Time:</Text>
          <TextInput style={styles.input1} />
        </View>

        <View style={{ height: 10 }} />
      </Card>

      <Card style={styles.card}>
        <Text style={styles.normal1}>Participant 3:</Text>
        <Text style={styles.normal2}>Select Timezone (UTC):</Text>
        <Picker style={styles.input2} selectedValue={32}>
          {timezones.map((i) => {
            return <Picker.Item label={i} value={i} />;
          })}
        </Picker>
        <View>
          <Text style={styles.normal3}>Preferred Meeting Time:</Text>
          <TextInput style={styles.input1} />
        </View>

        <View style={{ height: 10 }} />
      </Card>

      <Card style={styles.card}>
        <Text style={styles.normal1}>Participant 4:</Text>
        <Text style={styles.normal2}>Select Timezone (UTC):</Text>
        <Picker style={styles.input2} selectedValue={79}>
          {timezones.map((i) => {
            return <Picker.Item label={i} value={i} />;
          })}
        </Picker>
        <View>
          <Text style={styles.normal3}>Preferred Meeting Time:</Text>
          <TextInput style={styles.input1} />
        </View>

        <View style={{ height: 10 }} />
      </Card>

      <Card style={styles.card}>
        <Text style={styles.normal1}>Participant 5:</Text>
        <Text style={styles.normal2}>Select Timezone (UTC):</Text>
        <Picker style={styles.input2} selectedValue={56}>
          {timezones.map((i) => {
            return <Picker.Item label={i} value={i} />;
          })}
        </Picker>
        <View>
          <Text style={styles.normal3}>Preferred Meeting Time:</Text>
          <TextInput style={styles.input1} />
        </View>

        <View style={{ height: 10 }} />
      </Card>

      <Button
        title=" Generate Meeting Time "
        color={'#01C8F0'}
        justifyContent={'center'}
        onPress={() =>
          compass.navigation.navigate('YOUnIte: Meeting Created!')
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mframe: {
    backgroundColor: 'teal',
    height: '100%',
    padding: 12,
    flex: 1,
    justifyContent: 'center',
  },
  card: {
    padding: 6,
    marginBottom: 5,
  },
  normal1: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 1
  },
  normal2: {
    fontSize: 14
  },
  normal3: {
    marginTop: 10,
    fontSize: 14,
  },
  input1: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    height: 40,
    width: '100%',
    paddingLeft: 10,
    fontSize: 16,
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
