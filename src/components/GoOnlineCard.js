import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";
import { useDispatch } from "react-redux";
import { SocketContext } from "../socket/SocketProvider";
import { femaleSearchRequest } from "../features/calls/callAction";

const GoOnlineCard = ({ navigation }) => {
  const dispatch = useDispatch();
  const { connected } = useContext(SocketContext);
  const [showModal, setShowModal] = useState(false);

  const handleGoOnline = (type) => {
    if (!connected) return;

    setShowModal(false);

    dispatch(femaleSearchRequest({ call_type: type }));

    navigation.navigate("CallStatusScreen", {
      call_type: type,
      role: "female",
    });
  };

  return (
    <>
      <TouchableOpacity activeOpacity={0.9} onPress={() => setShowModal(true)}>
        {/* Figma Gradient applied here */}
        <LinearGradient
          colors={["#D51BF9", "#8C37F8"]}
          start={{ x: 0.05, y: 0.25 }}
          end={{ x: 1.0, y: 0.75 }}
          style={styles.outerPill}
        >
          {/* Floating background decorative shapes */}
          <Icon name="heart" size={48} color="rgba(255,255,255,0.20)" style={styles.heart1} />
          <Icon name="heart" size={48} color="rgba(255,255,255,0.15)" style={styles.heart2} />
          <Icon name="heart" size={48} color="rgba(255,255,255,0.15)" style={styles.heart3} />
          <Icon name="heart" size={48} color="rgba(255,255,255,0.12)" style={styles.heart4} />

          <View style={styles.innerPill}>
            <Icon name="wifi-outline" size={22} color="#fff" />
            <Text style={styles.innerText}>GO ONLINE</Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>

      {/* Choice Modal */}
      <Modal transparent visible={showModal} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Go Online</Text>

            {/* Audio Call Button - Custom Purple */}
            <TouchableOpacity
              style={styles.callBtn}
              onPress={() => handleGoOnline("AUDIO")}
            >
              <Icon name="call-outline" size={22} color="#fff" />
              <Text style={styles.callText}>Audio Call</Text>
            </TouchableOpacity>

            {/* Video Call Button - Custom Purple Gradient Variant */}
            <TouchableOpacity
              style={[styles.callBtn, styles.videoBtn]}
              onPress={() => handleGoOnline("VIDEO")}
            >
              <Icon name="videocam-outline" size={22} color="#fff" />
              <Text style={styles.callText}>Video Call</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setShowModal(false)} activeOpacity={0.7}>
              <Text style={styles.closeText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default GoOnlineCard;

const styles = StyleSheet.create({
  outerPill: {
    width: "100%",
    height: 110,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    elevation: 5,
    shadowColor: "#8C37F8",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },

  innerPill: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 26,
    paddingVertical: 12,
    borderRadius: 30,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.25)",
  },

  innerText: {
    marginLeft: 10,
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 1.2,
  },

  heart1: { position: "absolute", left: 18, top: 12 },
  heart2: { position: "absolute", left: 120, top: 8 },
  heart3: { position: "absolute", right: 70, top: 10 },
  heart4: { position: "absolute", right: 30, bottom: 10 },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(12, 5, 20, 0.75)", // Darkened, saturated overlay for modern UI look
    justifyContent: "center",
    alignItems: "center",
  },

  modalBox: {
    backgroundColor: "#180D2B", // Deep complementary dark purple background
    padding: 28,
    borderRadius: 24,
    width: "85%",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(213, 27, 249, 0.2)", // Subtle outer purple border glow
  },

  modalTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 24,
    letterSpacing: 0.5,
  },

  callBtn: {
    flexDirection: "row",
    backgroundColor: "#8C37F8", // Primary purple brand color
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 14,
    width: "100%",
    justifyContent: "center",
    elevation: 2,
  },

  videoBtn: {
    backgroundColor: "#D51BF9", // Secondary neon-purple brand color
  },

  callText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 10,
  },

  closeText: {
    color: "rgba(255, 255, 255, 0.5)",
    fontSize: 15,
    fontWeight: "500",
    marginTop: 14,
    padding: 5,
  },
});