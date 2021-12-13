import React, { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {

  const [fileUrl, setFileUrl] = useState();
  const [fileSize, setFileSize] = useState();
  const [fileName, setFileName] = useState();

  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({}).then(response => {
      if (response.type === 'success') {
        setFileUrl(response.uri)
        setFileName(response.name)
        setFileSize(response.size)
      }
    })
  }

  return (
    <View style={styles.container}>
      <FontAwesome name="folder-open" size={32} onPress={pickDocument} />
      <Image source={{ uri: document }} style={{ width: 200, height: 200 }} />
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
});
