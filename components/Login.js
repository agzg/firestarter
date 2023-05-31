import * as React from 'react';
import {
  TextInput,
  Text,
  View,
  StyleSheet,
  Button,
  Picker,
} from 'react-native';
import momentTZ from 'moment-timezone';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';

export default function Login(compass) {
  return (
    <View style={styles.mframe}>
      <Card style={styles.card}>
        <View style={styles.hframe}>
          <Text style={styles.head1}>Welcome to YOUnIte!</Text>
          <Text style={styles.head2}>sign in or create a new account</Text>
        </View>

        <Text style={styles.normal1}>Enter Username:</Text>
        <TextInput style={styles.input1} />
        <Text>alphanumeric characters only</Text>
        <View style={styles.bframe}>
          <Button
            title=" Get Started! "
            style={styles.button}
            color={'#ff983d'}
            onPress={() => compass.navigation.navigate('YOUnIte: Home')}
          />
        </View>

        <View style={{ height: 10 }} />
      </Card>
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
    padding: 8,
  },
  hframe: {
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingBottom: 14,
    marginBottom: 8,
  },
  bframe: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'right',
    paddingTop: 10,
  },
  head1: {
    fontSize: 25,
    fontWeight: 625,
  },
  head2: {
    fontSize: 16,
  },
  normal1: {
    marginTop: 20,
    fontSize: 18,
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
});
