import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Modal, Alert, Pressable } from "react-native";
import Swiper from "react-native-deck-swiper";
import Card from "./Card";
import carddata from "./carddata";

const Swipe = () => {
  const [index, setIndex] = useState(0);
  const onSwipe = () => {
    setIndex(index + 1);
  }
  const [modalVisible, setModalVisible] = useState(false); 
  const [modalResult, setModalResult] = useState('result');

  return (
    <SafeAreaView>
      <View style={styles.centeredView}>
        <Modal
        transparent={true}
        animationType="slide" 
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <Text style={styles.modalText}> {modalResult} </Text>
             <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}> OK </Text>
            </Pressable>

              </View>
          </View>
          </Modal>
        <Swiper
          cards={carddata}
          cardIndex={index}
          renderCard={(card) => <Card card={card} />}
          onSwiper={onSwipe}
          onSwipedLeft={() => setModalVisible(true) || setModalResult("PASS!")}
          onSwipedRight={() => setModalVisible(true) || setModalResult("MATCH!")}
          stackSize={4} //no of items
          stackScale={10} //scale between two stacks
          stackSeparation={14}
          disableBottomSwipe
          disableTopSwipe
          overlayLabels={{
            left: {
              title: "NOPE",
              style: {
                label: {
                  backgroundColor: "#FF008E",
                  color: "#fff",
                  fontSize: 24,
                },
                wrapper: {
                  flexDirection: "column",
                  alignItems: "flex-end",
                  justifyContent: "flex-start",
                  marginTop: 20,
                  marginLeft: -20,
                },
              },
            },
            right: {
              title: "YESS",
              style: {
                label: {
                  backgroundColor: "#95CD41",
                  color: "#fff",
                  fontSize: 24,
                },
                wrapper: {
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  marginTop: 20,
                  marginLeft: 20,
                },
              },
            },
          }}
        />
        </View>
    </SafeAreaView>
  );
};

 const Popup = (result) => {
     const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView>
      <View style={styles.centeredView}>
        <Modal
        transparent={true}
        animationType="slide" 
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <Text style={styles.modalText}> {result} </Text>
             <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}> OK </Text>
            </Pressable>

              </View>
          </View>
          </Modal>
          </View>
          </SafeAreaView>
  )
 }

export default Swipe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  card: {
    flex: 1,
    borderRadius: 10,
    shadowRadius: 25,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 0 },
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  cardImage: {
    width: 160,
    flex: 1,
    resizeMode: "contain",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    height: 170,
    width: 300,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 30,
    justifyContent: "center",
    paddingBottom: 20,
    alignItems: "center",
    marginBottom: 15,
    textAlign: "center"
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    padding: 15,
  },
});
