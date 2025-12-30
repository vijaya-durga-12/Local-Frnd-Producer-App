import { RTCPeerConnection } from "react-native-webrtc";

const ICE_SERVERS = {
  iceServers: [
    { urls: "stun:stun.l.google.com:19302" },
    {
      urls: "turn:openrelay.metered.ca:443",
      username: "openrelayproject",
      credential: "openrelayproject",
    },
  ],
};

export const createPC = ({ onIceCandidate, onIceState }) => {
  const pc = new RTCPeerConnection(ICE_SERVERS);
 
  console.log("🌐 PeerConnection created",pc);

  pc.onicecandidate = (event) => {
    if (event.candidate) {
      console.log("🧊 ICE candidate generated");
      onIceCandidate?.(event.candidate);
    }
  };

  pc.oniceconnectionstatechange = () => {
    console.log("🧊 ICE =", pc.iceConnectionState);
    onIceState?.(pc.iceConnectionState);
  };

  pc.onconnectionstatechange = () => {
    console.log("📡 PC =", pc.connectionState);
  };

  return pc;
};
