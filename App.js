import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, TextInput, ScrollView,ImageBackground, Modal } from 'react-native';
import CARDS from './data';
import DataCategory from './categories';
import Categories from './Componentes/CategoriesCom';
const backImage = require('./HereToSlayImages/BackImage.png')
const WhiteBackImage = require('./HereToSlayImages/WhiteBackImage.png')

export default function App() {

  const [activateCategory, setActivateCategory] = useState(null)
  const [list, setList] = useState(CARDS)
  const [searchText, setSearchText] = useState('')
  const [modalVisible, setModalVisible] = useState(false)
  const [activateInfo, setActivateInfo] = useState(null)
  const [descInfo, setDesc] = useState()

  function handlePress(id) {
    setActivateInfo(id)
  }

  function desc(id) {
    setDesc(id)
  }
  
  useEffect(() => {
    if (searchText === '') {
      setList(CARDS)
    } else {
      setList(
        CARDS.filter( item => {
          if (item.tittle.indexOf(searchText) > -1) {
            return true
          } else {
            return false
          }
        })
      )
    }
  }, [searchText])

  

  return (
    <View style={styles.container}>
      <ImageBackground style={{ flex: 1, justifyContent: 'center'}} source={backImage}>
        <StatusBar style="auto" />
        <View style={{ marginTop: 100, width: '100%' }}>
          <View style={{ alignItems: 'center' }}>
            <TextInput placeholderTextColor={'#c3c6ce'} onChangeText={(t) => setSearchText(t)} style={{ width: 250, padding: 4, borderWidth: 3, borderRadius: 15, marginBottom: 10, borderColor: '#c3c6ce', color: '#c3c6ce' }} placeholder='Procure por uma carta' />
          </View>
          <Categories onChange={(id) => setActivateCategory(id)} />
        </View>
        <View style={{ width: '100%', flex: 1, marginTop: 10 }}>
          <ScrollView>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
              {
                list.filter((item) => {
                  if (activateCategory === null) {
                    return true
                  }
                  return item.category === activateCategory
                }).map(item =>
                  <View style={{ width: 110, height: 180, padding: 4}} key={item.id}>
                    <TouchableOpacity onPress={() => {
                      setDesc(item.desc)
                      handlePress(item.image)
                      setModalVisible(!modalVisible)
                    }} style={{ width: '100%', height: '100%' }}>
                      <Image style={{ width: '100%', height: '100%', borderRadius: 10}} source={item.image} />
                    </TouchableOpacity>
                  </View>
                )
              }
            </View>
            <Modal
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(!modalVisible)}
            >
              <View style={styles.modal}>
                <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                  <View style={styles.modalContainer}>
                    <View style={styles.imageModal}>
                      <Image style={{width: '100%', height: '100%', borderTopLeftRadius: 20, borderTopRightRadius: 20}} source={activateInfo}/>
                    </View>
                    <Text style={styles.textModal}>{descInfo}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </Modal>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    width: '100%',
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageModal: {
    width: '100%',
    height: '100%',
  },
  modalContainer: {
    width: 250,
    height: 450, 
    alignItems: 'center',
    borderRadius: 20
  },
  textModal: {
    backgroundColor: '#fff',
    width: '100%',
    textAlign: 'center',
    fontWeight: '500',
    padding: 4,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  }
});
