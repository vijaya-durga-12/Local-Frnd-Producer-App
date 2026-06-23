import React, { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import RazorpayCheckout from "react-native-razorpay";
import { useDispatch, useSelector } from "react-redux";
import {
  verifyPaymentRequest,
  resetPurchase,
} from "../features/purchase/purchaseActions";

const PaymentScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();

  const { order, package: pkg } = route.params;

  const { loading, paymentSuccess } = useSelector(
    (state) => state.purchase
  );

  useEffect(() => {
    dispatch(resetPurchase());
  }, [dispatch]);

  useEffect(() => {
    if (paymentSuccess) {
      navigation.replace("PaymentSuccessScreen");
    }
  }, [paymentSuccess, navigation]);

  const handlePayment = () => {
    dispatch(resetPurchase());

    const options = {
      key: "rzp_test_GRRNoJBdPElkDv",
      amount: order.amount,
      currency: "INR",
      name: "Lokal Frnd",
      description: "Coin Purchase",
      order_id: order.order_id,
      prefill: {
        contact: "9999999999",
        email: "test@gmail.com",
      },
      theme: {
        color: "#9333EA",
      },
    };

    RazorpayCheckout.open(options)
      .then((data) => {
        console.log("✅ PAYMENT SUCCESS:", data);

        dispatch(
          verifyPaymentRequest({
            razorpay_order_id: data.razorpay_order_id,
            razorpay_payment_id: data.razorpay_payment_id,
            razorpay_signature: data.razorpay_signature,
            package_id: pkg.id,
          })
        );
      })
      .catch((err) => {
        console.log("❌ RAZORPAY CLOSED / ERROR:", err);

        // No alert
        // No error text
        // No popup from app side
        return;
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Details</Text>

      <View style={styles.card}>
        <Text style={styles.plan}>Coin Package</Text>
        <Text style={styles.amount}>₹ {order.amount / 100}</Text>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#9333EA" />
      ) : (
        <LinearGradient
          colors={["#7C3AED", "#D946EF"]}
          style={styles.payBtn}
        >
          <TouchableOpacity
            style={styles.payTouchable}
            activeOpacity={0.8}
            onPress={handlePayment}
          >
            <Text style={styles.payText}>
              PAY ₹ {order.amount / 100}
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      )}
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 20,
    color: "#000",
  },

  card: {
    backgroundColor: "#f3f3f3",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },

  plan: {
    fontSize: 16,
    color: "#000",
  },

  amount: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 5,
    color: "#000",
  },

  payBtn: {
    marginTop: 20,
    borderRadius: 10,
    overflow: "hidden",
  },

  payTouchable: {
    padding: 15,
    alignItems: "center",
  },

  payText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});