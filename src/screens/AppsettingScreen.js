import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Modal,
  ScrollView,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { SocketContext } from "../socket/SocketProvider";
import WelcomeScreenbackgroungpage from "../components/BackgroundPages/WelcomeScreenbackgroungpage";

const { height } = Dimensions.get("window");

const AppsettingScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { socketRef } = useContext(SocketContext);

  const [showLogoutModal, setShowLogoutModal] = useState(false);

  
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
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.headerTitle}>App Settings</Text>
        </View>

        {/* LIST */}
      <View style={styles.listBox}>
  <Item icon="shield-checkmark-outline" title="Privacy Policy" onPress={()=> navigation.navigate("PrivacyPolicyScreen")} />
  <Item icon="document-text-outline" title="Terms of Use" onPress={()=>navigation.navigate("TermsofUseScreen")} />
  <Item icon="people-outline" title="Community Guidelines" onPress={()=> navigation.navigate("CummunityGuidelineScreen")} />
  <Item icon="language-outline" title="App Language" />
  <Item icon="chatbubbles-outline" title="Customer Support Chat" />
  <Item icon="information-circle-outline" title="About Local Frnd" />
  <Item
  icon="settings-outline"
  title="Settings"
  onPress={() => navigation.navigate("SettingScreen")}
/>
  <Item icon="card-outline" title="Payment Policy" />
  <Item icon="shield-half-outline" title="Safety Center" />
</View>

        

      </ScrollView>

     

    </View>
  </WelcomeScreenbackgroungpage>
);
};

/* ---------- REUSABLE ITEM ---------- */
const Item = ({ icon, title, onPress }) => (
  <TouchableOpacity style={styles.item} onPress={onPress} activeOpacity={0.8}>
    <View style={styles.iconCircle}>
      <Icon name={icon} size={18} color="#fff" />
    </View>

    <Text style={styles.itemText}>{title}</Text>

    <Icon name="chevron-forward" size={18} color="#aaa" />
  </TouchableOpacity>
);


export default AppsettingScreen;

/* ================= STYLES ================= */
const styles = StyleSheet.create({
  container: {
  flex: 1,
  
},

scrollContainer: {
  flexGrow: 1,
  paddingBottom: height * 0.05,
},
  /* HEADER */
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
  color: '#000', // ✅ ADD
},

  /* LIST */
  listBox: {
    marginTop: 20,
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: "#eee",
  },

  iconCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#C44DFF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },

  itemText: {
    flex: 1,
    fontSize: 14,
    fontWeight: "500",
    color: '#000', // ✅ ADD
  },

  /* LOGOUT ROW */
  logoutItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 18,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    marginTop: height * 0.1,
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
    color: '#000', // ✅ ADD
  },

  /* MODAL */
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

  modalTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 6,
    color: '#000', // ✅ ADD
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

  confirmText: {
    color: "#fff",
    fontWeight: "600",
  },
});