import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { CheckBox } from '@react-native-community/checkbox';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style= {{ color: '#8A2BE2', fontWeight: 'bold', fontSize: 30 }}>WORKOUT LOG</Text>
      <Text style= {{ fontSize: 14, paddingBottom: 5, paddingTop: 15 }}>Login To An Existing Account</Text>
      <TextInput style={ styles.loginTextInput } placeholder='email address'/>
      <TextInput style={ styles.loginTextInput } placeholder='password'/>

      <StatusBar style="auto" />
      <View style={styles.loginButton}>
        <Button title="Login" color="#fff"/>
      </View>

      <Text>Register New User</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginTextInput: {
    color: '#C0C0C0',
    borderWidth: 1, 
    width: '85%', 
    paddingVertical: 15, 
    paddingLeft: 20, 
    marginTop: 20 
  },
  loginButton: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 32,
    marginBottom: 20,
    borderRadius: 4,
    elevation: 3,
    marginTop: 20,
    backgroundColor: '#24A0ED'
  }
});