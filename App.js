import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Homescreen from './Frontend/Pages/Homescreen';

export default function App() {
  return (
    <Homescreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagecontainer: {
    flex: 1
  },
  avatar:{
    width:100, 
    height:100
  }
});
