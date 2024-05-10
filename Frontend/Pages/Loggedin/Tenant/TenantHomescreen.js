import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ScrollView } from 'react-native-web';
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function TenantHomescreen(){
  <ScrollView styles={styles.container}>
      <View styles={styles.header}>
        <View>
          <Image 
            styles={styles.avatar}
            source={require('/Frontend/Images/Avatar.jpeg')}
          />
          <View>
            <Text>Good Evening</Text>
            <Text>Chris Kamau</Text>
          </View>
          <EvilIcons name="search" size={24} color="black" />
          <Ionicons name="notifications" size={24} color="black" />

        </View>

      </View>
      <View styles={styles.adssection}>
        

      </View>

  </ScrollView>
}

const styles = StyleSheet.create({
  container:{

  }
})