import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ScrollView,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { userlogoutrequest } from "../features/user/userAction";
import { SocketContext } from "../socket/SocketProvider";
import WelcomeScreenbackgroungpage from "../components/BackgroundPages/WelcomeScreenbackgroungpage";

const { height } = Dimensions.get("window");

const SettingScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { socketRef } = useContext(SocketContext);

  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const clearUserSession = async () => {
    socketRef?.current?.disconnect();

    await AsyncStorage.multiRemove(["twittoke", "user_id"]);

    dispatch(userlogoutrequest());

    navigation.reset({
      index: 0,
      routes: [{ name: "Phone" }],
    });
  };

  const handleConfirmLogout = async () => {
    setShowLogoutModal(false);
    await clearUserSession();
  };

  const handleDeleteAccount = async () => {
    setShowDeleteModal(false);

    /*
      Add your permanent delete account API here.

      Example:
      const token = await AsyncStorage.getItem("twittoke");

      await fetch("YOUR_DELETE_ACCOUNT_API_URL", {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
    */

    await clearUserSession();
  };

  return (
    <WelcomeScreenbackgroungpage>
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
        >
          {/* HEADER */}
          <View style={styles.header}>
            <Icon
              name="arrow-back"
              size={22}
              color="#000"
              onPress={() => navigation.goBack()}
            />

            <Text style={styles.headerTitle}>Settings</Text>
          </View>


          
          {/* DELETE ACCOUNT BUTTON */}
          <TouchableOpacity
            style={styles.deleteItem}
            onPress={() => setShowDeleteModal(true)}
            activeOpacity={0.8}
          >
            <View style={styles.deleteIcon}>
              <Icon name="trash-outline" size={20} color="#fff" />
            </View>

            <Text style={styles.deleteText}>Delete Account</Text>

            <Icon name="chevron-forward" size={18} color="#aaa" />
          </TouchableOpacity>

          {/* LOGOUT BUTTON */}
          <TouchableOpacity
            style={styles.logoutItem}
            onPress={() => setShowLogoutModal(true)}
            activeOpacity={0.8}
          >
            <View style={styles.logoutIcon}>
              <Icon name="log-out-outline" size={20} color="#fff" />
            </View>

            <Text style={styles.logoutText}>Log Out</Text>

            <Icon name="chevron-forward" size={18} color="#aaa" />
          </TouchableOpacity>

        </ScrollView>

        {/* LOGOUT MODAL */}
        <Modal
          transparent
          visible={showLogoutModal}
          animationType="fade"
          onRequestClose={() => setShowLogoutModal(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalBox}>
              <View style={styles.modalIcon}>
                <Icon name="person-outline" size={24} color="#fff" />
              </View>

              <Text style={styles.modalTitle}>Logout?</Text>

              <Text style={styles.modalSub}>
                Are you sure you want to logout?
              </Text>

              <View style={styles.modalButtons}>
                <TouchableOpacity
                  style={styles.cancelBtn}
                  onPress={() => setShowLogoutModal(false)}
                  activeOpacity={0.8}
                >
                  <Text style={styles.cancelText}>CANCEL</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.confirmBtn}
                  onPress={handleConfirmLogout}
                  activeOpacity={0.8}
                >
                  <Text style={styles.confirmText}>CONFIRM</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        {/* DELETE ACCOUNT MODAL */}
        <Modal
          transparent
          visible={showDeleteModal}
          animationType="fade"
          onRequestClose={() => setShowDeleteModal(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalBox}>
              <View style={styles.deleteModalIcon}>
                <Icon name="trash-outline" size={24} color="#fff" />
              </View>

              <Text style={styles.modalTitle}>Delete Account?</Text>

              <Text style={styles.modalSub}>
                This will permanently delete your account. This action cannot be
                undone.
              </Text>

              <View style={styles.modalButtons}>
                <TouchableOpacity
                  style={styles.cancelBtn}
                  onPress={() => setShowDeleteModal(false)}
                  activeOpacity={0.8}
                >
                  <Text style={styles.cancelText}>CANCEL</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.deleteConfirmBtn}
                  onPress={handleDeleteAccount}
                  activeOpacity={0.8}
                >
                  <Text style={styles.confirmText}>DELETE</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </WelcomeScreenbackgroungpage>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  scrollContainer: {
    flexGrow: 1,
    paddingBottom: height * 0.05,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: height * 0.01,
    marginBottom: 10,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginLeft: 10,
    color: "#000",
  },
logoutItem: {
  flexDirection: "row",
  alignItems: "center",
  paddingVertical: 18,
  paddingHorizontal: 20,
  backgroundColor: "#fff",
  marginTop: 25,
},

  logoutIcon: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#C44DFF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },

  logoutText: {
    flex: 1,
    fontSize: 14,
    fontWeight: "500",
    color: "#000",
  },

  deleteItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 18,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    marginTop: 12,
  },

  deleteIcon: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#FF3B30",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },

  deleteText: {
    flex: 1,
    fontSize: 14,
    fontWeight: "500",
    color: "#060101",
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.45)",
    justifyContent: "center",
    alignItems: "center",
  },

  modalBox: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
  },

  modalIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#C44DFF",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },

  deleteModalIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#FF3B30",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },

  modalTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 6,
    color: "#000",
  },

  modalSub: {
    fontSize: 13,
    color: "#777",
    textAlign: "center",
    marginBottom: 20,
  },

  modalButtons: {
    flexDirection: "row",
    width: "100%",
  },

  cancelBtn: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: "#F4E6FF",
    marginRight: 10,
    alignItems: "center",
  },

  cancelText: {
    color: "#C44DFF",
    fontWeight: "600",
  },

  confirmBtn: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: "#C44DFF",
    alignItems: "center",
  },

  deleteConfirmBtn: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: "#FF3B30",
    alignItems: "center",
  },

  confirmText: {
    color: "#fff",
    fontWeight: "600",
  },
});