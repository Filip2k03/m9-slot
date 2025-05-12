import React from 'react';
import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const viberPhone = '09751229930';
  const telegramURL = 'http://t.me/vipclub388mm';

  return (
    <View style={styles.container}>
      <Text style={styles.header}>M9 Slot (မူရင်း)</Text>

      <Image
        source={require('../../assets/images/banner.jpg')}
        style={styles.image}
        resizeMode="contain"
      />

      <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(`tel:${viberPhone}`)}>
        <Text style={styles.buttonText}>အချစ်ကစားလိုက်ပါ</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(`viber://contact?number=+959751229930`)}>
        <Text style={styles.buttonText}>VIBER မှ ဆက်သွယ်ရန်</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(telegramURL)}>
        <Text style={styles.buttonText}>TELEGRAM မှ ဆက်သွယ်ရန်</Text>
      </TouchableOpacity>

      <Text style={styles.phone}>📞 Viber: {viberPhone}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#6200ee',
    marginBottom: 20,
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#6200ee',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginVertical: 6,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  phone: {
    marginTop: 20,
    fontSize: 16,
    color: '#333',
  },
});
