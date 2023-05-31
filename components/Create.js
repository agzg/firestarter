import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

export default function Create() {
  return (
    <View style={styles.container}>
      <Card style={{ padding: 12 }}>
        <View style={styles.inner}>
          <Text style={styles.head}> Success! </Text>
          <View style={{ height: 5 }} />
          <Text style={styles.shead}>Please share this code</Text>
          <View style={{ height: 5 }} />
          <Text style={styles.code}>54644864842-64</Text>
          <View style={styles.hframe}>
            <View style={styles.inner}>
              <Text style={styles.head}> Time Zones: </Text>
              <View style={{height: 10}} />
            </View>
            <Text style={styles.tfont}>EST: 11:30 PM - 12:30 AM</Text>
            <Text style={styles.tfont}>GMT: 03:30 PM - 04:30 PM</Text>
            <Text style={styles.tfont}>PT : 05:32 PM - 06:32 PM</Text>
            <Text style={styles.tfont}>IST: 07:06 AM - 08:06 AM</Text>
            <Text style={styles.tfont}>BST: 09:29 PM - 10:29 PM</Text>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: 'teal',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
  },
  inner: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  head: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  shead: {
    fontSize: 20,
    paddingLeft: 2,
  },
  code: {
    fontFamily: 'Monaco',
    fontSize: 18,
    backgroundColor: 'lightgrey',
    borderRadius: 5,
    padding: 5,
    marginBottom: 15
  },
  hframe: {
    borderTopWidth: 1,
    width: 275,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 5,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  tfont: {
    fontWeight: 450,
    fontSize: 17,
    fontFamily: 'Monaco'
  }
});
