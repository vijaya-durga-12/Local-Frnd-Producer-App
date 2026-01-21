import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Platform,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import BackgroundPagesOne from "../components/BackgroundPages/BackgroundPagesOne";
import { userOtpRequest } from "../features/Auth/authAction";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { connectSocketAfterLogin } from "../socket/globalSocket";

const { width } = Dimensions.get("window");
const OTP_LENGTH = 6;

const OtpScreen = ({ route, navigation }) => {
  /* ================= REDUX ================= */
  const dispatch = useDispatch();
  const { success, mode, Otp } = useSelector((state) => state.auth);

  /* ================= PARAMS (SAFE) ================= */
  const mobile_number = route?.params?.mobile_number;

  /* ================= STATE ================= */
  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(""));
  const inputRefs = useRef([]);

  /* ================= OTP INPUT ================= */
  const handleChange = (text, idx) => {
    const char = text ? text.slice(-1) : "";
    const newOtp = [...otp];
    newOtp[idx] = char;
    setOtp(newOtp);

    if (char && idx < OTP_LENGTH - 1) {
      inputRefs.current[idx + 1]?.focus?.();
    }
  };

  const handleKeyPress = (e, idx) => {
    if (e.nativeEvent.key === "Backspace" && !otp[idx] && idx > 0) {
      inputRefs.current[idx - 1]?.focus?.();
    }
  };

  /* ================= SUBMIT OTP ================= */
  const handleOtpSubmit = () => {
    if (!mobile_number) {
      Alert.alert("Error", "Mobile number missing");
      return;
    }

    const otpString = otp.join("");
    dispatch(userOtpRequest({ mobile_number, otp: otpString }));
  };

  /* ================= OTP RESPONSE ================= */
  useEffect(() => {
    if (!Otp) return;

    if (Otp.success === false) {
      Alert.alert("Invalid OTP", Otp.message || "Try again");
      return;
    }

    const afterLogin = async () => {
      try {
        // 1️⃣ Save token
        await AsyncStorage.setItem("twittoke", Otp.token);
        await AsyncStorage.setItem("user_id", String(Otp.user.user_id));
        await AsyncStorage.setItem("gender", Otp.user.gender);

        // 2️⃣ Reconnect socket with NEW token
        await connectSocketAfterLogin();

        // 3️⃣ Navigate ONLY after socket ready
        if (mode === "login") {
          navigation.reset({
            index: 0,
            routes: [
              {
                name:
                  Otp.user.gender === "Male"
                    ? "MaleHomeTabs"
                    : "ReceiverBottomTabs",
              },
            ],
          });
        } else {
          navigation.reset({
            index: 0,
            routes: [{ name: "LanguageScreen" }],
          });
        }
      } catch (err) {
        console.error("OTP flow error:", err);
        Alert.alert("Error", "Something went wrong");
      }
    };

    afterLogin();
  }, [Otp, mode, navigation]);

  /* ================= UI ================= */
  return (
    <BackgroundPagesOne>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.inner}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <Icon name="chevron-back" size={26} color="#fff" />
            </TouchableOpacity>

            <Text style={styles.title}>Verification Code</Text>
            <Text style={styles.subTitle}>
              We’ve sent a 6-digit code to your number
            </Text>

            <View style={styles.otpContainer}>
              {otp.map((v, idx) => (
                <TextInput
                  key={idx}
                  ref={(el) => (inputRefs.current[idx] = el)}
                  style={styles.otpInput}
                  maxLength={1}
                  keyboardType="numeric"
                  value={v}
                  onChangeText={(t) => handleChange(t, idx)}
                  onKeyPress={(e) => handleKeyPress(e, idx)}
                />
              ))}
            </View>

            <TouchableOpacity
              style={styles.nextButton}
              onPress={handleOtpSubmit}
            >
              <Text style={styles.nextText}>Verify</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </BackgroundPagesOne>
  );
};

export default OtpScreen;


const styles = StyleSheet.create({
  inner: { flex: 1, paddingHorizontal: 25, paddingTop: 60, paddingBottom: 40 },
  backButton: { position: "absolute", top: 40, left: 20, zIndex: 10 },
  
  title: {
    marginTop:"25%",
    fontSize: 30,
    color: "#fff",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 10,
  },
  subTitle: { color: "#aaa", fontSize: 14, textAlign: "center", marginBottom: 60,marginTop:"3%" },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginBottom: 25,
  },
  otpInput: {
    width: 49,
    height: 55,
    borderWidth: 1,
    borderColor: "#C724C7",
    borderRadius: 10,
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    backgroundColor: "rgba(43, 32, 38, 0.13)",
  },
  resendContainer: { flexDirection: "row", justifyContent: "center", marginTop: 10 },
  resendText: { color: "#aaa", fontSize: 14 },
  resendLink: { color: "#b784ff", fontSize: 14, textDecorationLine: "underline" },
  nextButton: {
  marginTop: 60,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 16,
  paddingVertical: 14,
  backgroundColor: "#2a072aff",
  width: "60%",
  marginLeft: "23%",

  // ✅ Border
  borderWidth: 1,
  borderColor: "#f896f8ff",

  // ✅ Shadow for iOS
  shadowColor: "#f080f0ff",
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0.9,
  shadowRadius: 19,

  // ✅ Shadow for Android
  elevation: 20,
},

nextText: {
  color: "#fff",
  fontSize: 16,
  fontWeight: "600",
  letterSpacing: 1,
},

});
