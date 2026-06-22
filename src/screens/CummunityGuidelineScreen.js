import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import WelcomeScreenbackgroungpage from "../components/BackgroundPages/WelcomeScreenbackgroungpage";

const { height } = Dimensions.get("window");

const CummunityGuidelineScreen = () => {
  const navigation = useNavigation();

  return (
    <WelcomeScreenbackgroungpage>
      <View style={styles.container}>
        <View style={styles.header}>
          <Icon
            name="arrow-back"
            size={22}
            color="#000"
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.headerTitle}>Community Guidelines</Text>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
        >
          <View style={styles.card}>
            <Text style={styles.title}>LOKAL FRND COMMUNITY GUIDELINES</Text>

            <Text style={styles.content}>
              Last Updated: June 2026{"\n\n"}
              Welcome to LOKAL FRND. Our mission is to create a safe,
              respectful, and enjoyable platform where adults can connect
              through chat, audio calls, video calls, live streaming, and
              community interactions.{"\n\n"}
              These Community Guidelines form part of the LOKAL FRND Terms of
              Use and Privacy Policy. By using LOKAL FRND, you agree to follow
              these guidelines.
            </Text>

            <Text style={styles.heading}>1. RESPECT EVERY USER</Text>
            <Text style={styles.content}>
              Treat all users with dignity and respect.{"\n\n"}
              You must not:{"\n"}
              • Harass, threaten, bully, or intimidate others.{"\n"}
              • Use abusive, offensive, or hateful language.{"\n"}
              • Target users based on religion, caste, race, nationality,
              gender, disability, or sexual orientation.{"\n"}
              • Encourage self-harm or violence.{"\n\n"}
              Violations may result in suspension or permanent removal.
            </Text>

            <Text style={styles.heading}>2. ADULT-ONLY PLATFORM</Text>
            <Text style={styles.content}>
              LOKAL FRND is strictly for users aged 18 years or older.{"\n\n"}
              Users may not:{"\n"}
              • Create accounts if under 18.{"\n"}
              • Misrepresent their age.{"\n"}
              • Share content involving minors.{"\n\n"}
              Any account suspected of belonging to a minor may be immediately
              suspended.
            </Text>

            <Text style={styles.heading}>3. SEXUAL CONTENT POLICY</Text>
            <Text style={styles.content}>
              To maintain a safe platform, the following content is prohibited:
              {"\n"}
              • Nudity{"\n"}
              • Pornography{"\n"}
              • Sexual acts{"\n"}
              • Explicit sexual conversations{"\n"}
              • Escort services{"\n"}
              • Prostitution-related content{"\n"}
              • Sexual exploitation{"\n\n"}
              Users found violating this policy may be permanently banned.
            </Text>

            <Text style={styles.heading}>4. CHILD SAFETY POLICY (CSAE)</Text>
            <Text style={styles.content}>
              LOKAL FRND maintains a zero-tolerance policy against Child Sexual
              Abuse and Exploitation (CSAE).{"\n\n"}
              The following are strictly prohibited:{"\n"}
              • Child Sexual Abuse Material (CSAM){"\n"}
              • Grooming minors{"\n"}
              • Sexualized content involving minors{"\n"}
              • Exploitation of children{"\n\n"}
              Violations will result in:{"\n"}
              • Immediate account termination{"\n"}
              • Reporting to law enforcement agencies{"\n"}
              • Preservation of evidence{"\n"}
              • Legal action where applicable
            </Text>

            <Text style={styles.heading}>5. LIVE STREAMING RULES</Text>
            <Text style={styles.content}>
              Users participating in live streams must not:{"\n"}
              • Display nudity{"\n"}
              • Perform sexual acts{"\n"}
              • Promote violence{"\n"}
              • Display weapons{"\n"}
              • Consume illegal drugs{"\n"}
              • Harass viewers{"\n"}
              • Encourage dangerous activities{"\n\n"}
              LOKAL FRND may monitor live streams and remove violating content
              immediately.
            </Text>

            <Text style={styles.heading}>6. AUDIO AND VIDEO CALL RULES</Text>
            <Text style={styles.content}>
              Users must:{"\n"}
              • Show respectful behavior.{"\n"}
              • Avoid abusive language.{"\n"}
              • Avoid sexual content.{"\n"}
              • Respect user privacy.{"\n\n"}
              Users must not:{"\n"}
              • Record calls without consent.{"\n"}
              • Share call content publicly.{"\n"}
              • Harass or threaten participants.
            </Text>

            <Text style={styles.heading}>
              7. FACE DETECTION & AI MODERATION
            </Text>
            <Text style={styles.content}>
              To protect users, LOKAL FRND may use:{"\n"}
              • Face Detection{"\n"}
              • AI Content Moderation{"\n"}
              • Nudity Detection{"\n"}
              • Abuse Detection{"\n"}
              • Fraud Detection{"\n\n"}
              If violations are detected:{"\n"}
              • Video may be blurred.{"\n"}
              • Calls may be terminated.{"\n"}
              • Accounts may be restricted.{"\n"}
              • Permanent bans may be imposed.
            </Text>

            <Text style={styles.heading}>8. PRIVACY AND PERSONAL INFORMATION</Text>
            <Text style={styles.content}>
              Do not share:{"\n"}
              • Phone numbers{"\n"}
              • Aadhaar numbers{"\n"}
              • PAN numbers{"\n"}
              • Bank account information{"\n"}
              • Passwords{"\n"}
              • OTPs{"\n"}
              • Financial information{"\n\n"}
              You may not:{"\n"}
              • Doxx users{"\n"}
              • Leak private information{"\n"}
              • Impersonate another person
            </Text>

            <Text style={styles.heading}>9. HARASSMENT AND BULLYING</Text>
            <Text style={styles.content}>
              The following are prohibited:{"\n"}
              • Threats{"\n"}
              • Blackmail{"\n"}
              • Extortion{"\n"}
              • Cyberbullying{"\n"}
              • Repeated unwanted contact{"\n"}
              • Stalking behavior{"\n\n"}
              Violations may result in immediate enforcement action.
            </Text>

            <Text style={styles.heading}>10. HATE SPEECH</Text>
            <Text style={styles.content}>
              Users may not post content that:{"\n"}
              • Promotes hatred{"\n"}
              • Encourages discrimination{"\n"}
              • Supports extremist organizations{"\n"}
              • Incites violence{"\n\n"}
              This applies to text, audio, images, videos, usernames, and profile
              content.
            </Text>

            <Text style={styles.heading}>
              11. VIOLENCE AND DANGEROUS ACTIVITIES
            </Text>
            <Text style={styles.content}>
              The following are prohibited:{"\n"}
              • Graphic violence{"\n"}
              • Criminal activities{"\n"}
              • Terrorist content{"\n"}
              • Weapons demonstrations{"\n"}
              • Explosive instructions{"\n"}
              • Gang-related promotion
            </Text>

            <Text style={styles.heading}>12. FRAUD AND SCAMS</Text>
            <Text style={styles.content}>
              Users may not:{"\n"}
              • Conduct scams{"\n"}
              • Run fake investment schemes{"\n"}
              • Impersonate officials{"\n"}
              • Engage in phishing{"\n"}
              • Request OTPs or passwords{"\n"}
              • Conduct financial fraud{"\n\n"}
              Such activity may be reported to authorities.
            </Text>

            <Text style={styles.heading}>13. SPAM AND PLATFORM ABUSE</Text>
            <Text style={styles.content}>
              The following are prohibited:{"\n"}
              • Mass messaging{"\n"}
              • Automated bots{"\n"}
              • Fake engagement{"\n"}
              • Fake profiles{"\n"}
              • Artificial traffic generation{"\n"}
              • Manipulation of platform systems
            </Text>

            <Text style={styles.heading}>
              14. PROHIBITED PRODUCTS AND SERVICES
            </Text>
            <Text style={styles.content}>
              Users may not promote or sell:{"\n"}
              • Illegal drugs{"\n"}
              • Tobacco products{"\n"}
              • Alcohol{"\n"}
              • Gambling services{"\n"}
              • Firearms{"\n"}
              • Counterfeit products{"\n"}
              • Adult services
            </Text>

            <Text style={styles.heading}>
              15. CREATOR AND HOST PROGRAM RULES
            </Text>
            <Text style={styles.content}>
              Creators and hosts must:{"\n"}
              • Follow all platform rules.{"\n"}
              • Avoid misleading users.{"\n"}
              • Avoid fake engagement.{"\n"}
              • Avoid fraudulent earning activities.{"\n\n"}
              LOKAL FRND reserves the right to revoke rewards obtained through
              abuse or manipulation.
            </Text>

            <Text style={styles.heading}>16. ACCOUNT ENFORCEMENT</Text>
            <Text style={styles.content}>
              Depending on severity, actions may include:{"\n\n"}
              Warning{"\n"}
              First-time minor violations.{"\n\n"}
              Temporary Suspension{"\n"}
              Repeated violations.{"\n\n"}
              Permanent Ban{"\n"}
              Serious violations including:{"\n"}
              • Sexual exploitation{"\n"}
              • Child safety violations{"\n"}
              • Fraud{"\n"}
              • Impersonation{"\n"}
              • Hate speech{"\n"}
              • Violent threats
            </Text>

            <Text style={styles.heading}>17. REPORTING VIOLATIONS</Text>
            <Text style={styles.content}>
              Users can report violations through the application or via email.
              {"\n\n"}
              Support{"\n"}
              Email: support@lokalfrnd.com{"\n\n"}
              Grievance Officer{"\n"}
              Name: Pruthvi{"\n"}
              Email: pruthvi@gmail.com{"\n\n"}
              Registered Office{"\n"}
              Hyderabad, Telangana, India
            </Text>

            <Text style={styles.heading}>
              18. COOPERATION WITH LAW ENFORCEMENT
            </Text>
            <Text style={styles.content}>
              LOKAL FRND may cooperate with:{"\n"}
              • Cyber Crime Authorities{"\n"}
              • Law Enforcement Agencies{"\n"}
              • Government Authorities{"\n\n"}
              Where required by law, user information may be disclosed.
            </Text>

            <Text style={styles.heading}>19. UPDATES TO GUIDELINES</Text>
            <Text style={styles.content}>
              LOKAL FRND may update these Community Guidelines at any time.
              {"\n\n"}
              Continued use of the Platform constitutes acceptance of updated
              guidelines.
            </Text>

            <Text style={styles.heading}>20. CONTACT US</Text>
            <Text style={styles.content}>
              LOKAL FRND{"\n\n"}
              Website: www.lokalfrnd.com{"\n\n"}
              Support Email: support@lokalfrnd.com{"\n\n"}
              Registered Office: Hyderabad, Telangana, India{"\n\n"}
              By using LOKAL FRND, you agree to follow these Community
              Guidelines and help maintain a safe and respectful community.
            </Text>
          </View>
        </ScrollView>
      </View>
    </WelcomeScreenbackgroungpage>
  );
};

export default CummunityGuidelineScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

  scrollContainer: {
    paddingHorizontal: 16,
    paddingBottom: 30,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 18,
    marginTop: 10,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#C44DFF",
    textAlign: "center",
    marginBottom: 18,
  },

  heading: {
    fontSize: 16,
    fontWeight: "700",
    color: "#C44DFF",
    marginTop: 18,
    marginBottom: 8,
  },

  content: {
    fontSize: 14,
    lineHeight: 22,
    color: "#222",
  },
});