import React from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import WelcomeScreenbackgroungpage from "../components/BackgroundPages/WelcomeScreenbackgroungpage";

const { height } = Dimensions.get("window");

const TermsofUseScreen = () => {
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
          <Text style={styles.headerTitle}>Terms of Use</Text>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
        >
          <View style={styles.card}>
            <Text style={styles.title}>LOKAL FRND TERMS OF USE</Text>

            <Text style={styles.content}>
              Last Updated: June 2026{"\n\n"}
              These Terms of Use ("Terms") govern your use of the LOKAL FRND
              mobile application, website, and related services collectively,
              the "Platform" operated by [COMPANY NAME] ("LOKAL FRND",
              "Company", "we", "us", or "our"), having its registered office
              at Hyderabad, Telangana, India.{"\n\n"}
              By accessing or using the Platform, you agree to be bound by these
              Terms, the Privacy Policy, Community Guidelines, Refund Policy,
              and any additional policies published by us from time to time.
              {"\n\n"}
              If you do not agree with these Terms, you must discontinue use of
              the Platform immediately.
            </Text>

            <Text style={styles.heading}>1. ELIGIBILITY</Text>
            <Text style={styles.content}>
              You must be at least 18 years of age to create an account or use
              the Platform.{"\n\n"}
              By registering an account, you represent and warrant that:{"\n"}
              • You are at least 18 years old.{"\n"}
              • You have the legal capacity to enter into a binding agreement.
              {"\n"}
              • The information provided by you is accurate and complete.{"\n"}
              • You are not prohibited from using the Platform under applicable
              laws.{"\n\n"}
              We reserve the right to suspend or terminate accounts that violate
              age restrictions.
            </Text>

            <Text style={styles.heading}>2. ACCOUNT REGISTRATION</Text>
            <Text style={styles.content}>
              To access certain features, you must register using your mobile
              number and verify it through OTP authentication.{"\n\n"}
              You are responsible for:{"\n"}
              • Maintaining account security.{"\n"}
              • Keeping login credentials confidential.{"\n"}
              • All activities occurring through your account.{"\n\n"}
              You may not:{"\n"}
              • Create multiple fraudulent accounts.{"\n"}
              • Share accounts.{"\n"}
              • Sell or transfer accounts.{"\n"}
              • Use another person's account.
            </Text>

            <Text style={styles.heading}>3. SERVICES PROVIDED</Text>
            <Text style={styles.content}>
              LOKAL FRND provides social networking and communication services
              including:{"\n"}
              • User Profiles{"\n"}
              • Friend Discovery{"\n"}
              • Private Messaging{"\n"}
              • Audio Calls{"\n"}
              • Video Calls{"\n"}
              • Live Streaming{"\n"}
              • Virtual Gifts{"\n"}
              • Coin Purchases{"\n"}
              • Subscription Features{"\n"}
              • Creator and Host Programs{"\n"}
              • Community Interactions{"\n\n"}
              The Company may modify, suspend, discontinue, or update any
              feature at any time.
            </Text>

            <Text style={styles.heading}>
              4. COINS, GIFTS AND VIRTUAL ITEMS
            </Text>
            <Text style={styles.content}>
              Users may purchase virtual Coins through approved payment methods.
              {"\n\n"}
              Coins may be used for:{"\n"}
              • Sending Gifts{"\n"}
              • Unlocking Premium Features{"\n"}
              • Participating in Events{"\n"}
              • Subscription Services{"\n"}
              • Other Platform Features{"\n\n"}
              Coins:{"\n"}
              • Have no cash value.{"\n"}
              • Are not legal tender.{"\n"}
              • Are not bank deposits.{"\n"}
              • Are not electronic money.{"\n"}
              • Are not RBI-regulated wallets.{"\n"}
              • Cannot be redeemed for cash.{"\n"}
              • Cannot be transferred outside the Platform.{"\n\n"}
              Unused Coins may expire after six (6) months of inactivity.{"\n\n"}
              All purchases are final unless otherwise required by law.
            </Text>

            <Text style={styles.heading}>5. CREATOR AND HOST PROGRAM</Text>
            <Text style={styles.content}>
              The Platform may allow eligible creators or hosts to receive
              incentives, rewards, bonuses, or earnings based on engagement and
              performance.{"\n\n"}
              The Company reserves the right to:{"\n"}
              • Set eligibility requirements.{"\n"}
              • Modify earning structures.{"\n"}
              • Review suspicious activity.{"\n"}
              • Withhold or reverse rewards obtained through fraud.{"\n\n"}
              Participation does not create employment, partnership, or agency
              relationships.
            </Text>

            <Text style={styles.heading}>
              6. LIVE STREAMING, AUDIO AND VIDEO FEATURES
            </Text>
            <Text style={styles.content}>
              Users may participate in:{"\n"}
              • Audio Calls{"\n"}
              • Video Calls{"\n"}
              • Live Streaming{"\n"}
              • Live Audio Rooms{"\n\n"}
              Users must not:{"\n"}
              • Display nudity.{"\n"}
              • Share sexually explicit content.{"\n"}
              • Stream illegal activities.{"\n"}
              • Engage in harassment.{"\n"}
              • Impersonate others.{"\n\n"}
              The Company may monitor, moderate, blur, block, suspend, or
              terminate streams that violate Platform Policies.
            </Text>

            <Text style={styles.heading}>7. FACE DETECTION AND MODERATION</Text>
            <Text style={styles.content}>
              To maintain user safety and platform integrity, LOKAL FRND may use
              automated moderation technologies including:{"\n"}
              • Face Detection{"\n"}
              • Content Analysis{"\n"}
              • Nudity Detection{"\n"}
              • Abuse Detection{"\n"}
              • Fraud Detection{"\n\n"}
              If violations are detected, we may:{"\n"}
              • Blur content.{"\n"}
              • End sessions.{"\n"}
              • Restrict features.{"\n"}
              • Suspend accounts.{"\n"}
              • Permanently ban users.
            </Text>

            <Text style={styles.heading}>8. USER CONTENT</Text>
            <Text style={styles.content}>
              Users retain ownership of content uploaded to the Platform.{"\n\n"}
              By uploading content, you grant LOKAL FRND a worldwide,
              non-exclusive, royalty-free license to:{"\n"}
              • Host{"\n"}
              • Store{"\n"}
              • Display{"\n"}
              • Reproduce{"\n"}
              • Distribute{"\n"}
              • Modify{"\n"}
              • Promote{"\n\n"}
              such content solely for operating and improving the Platform.{"\n\n"}
              You remain solely responsible for your content.
            </Text>

            <Text style={styles.heading}>9. PROHIBITED ACTIVITIES</Text>
            <Text style={styles.content}>
              You may not:{"\n"}
              • Upload illegal content.{"\n"}
              • Share pornography.{"\n"}
              • Promote prostitution or escort services.{"\n"}
              • Harass or threaten users.{"\n"}
              • Spread malware.{"\n"}
              • Conduct scams.{"\n"}
              • Impersonate others.{"\n"}
              • Engage in money laundering.{"\n"}
              • Share misleading information.{"\n"}
              • Circumvent moderation systems.{"\n\n"}
              Violation may result in immediate suspension or permanent
              termination.
            </Text>

            <Text style={styles.heading}>10. CHILD SAFETY (CSAE POLICY)</Text>
            <Text style={styles.content}>
              LOKAL FRND has a zero-tolerance policy regarding Child Sexual
              Abuse and Exploitation.{"\n\n"}
              Users may not:{"\n"}
              • Upload CSAM.{"\n"}
              • Groom minors.{"\n"}
              • Exploit children.{"\n"}
              • Share content involving minors in sexual contexts.{"\n\n"}
              Violations may result in:{"\n"}
              • Immediate account termination.{"\n"}
              • Reporting to law enforcement.{"\n"}
              • Preservation of records.{"\n"}
              • Cooperation with investigating agencies.
            </Text>

            <Text style={styles.heading}>11. PRIVACY</Text>
            <Text style={styles.content}>
              Your use of the Platform is subject to our Privacy Policy.{"\n\n"}
              By using the Platform, you consent to the collection, processing,
              and use of your information as described in the Privacy Policy.
            </Text>

            <Text style={styles.heading}>
              12. ACCOUNT SUSPENSION AND TERMINATION
            </Text>
            <Text style={styles.content}>
              We may suspend or terminate accounts for:{"\n"}
              • Policy violations.{"\n"}
              • Fraudulent activities.{"\n"}
              • Security concerns.{"\n"}
              • Illegal activities.{"\n"}
              • Abuse of services.{"\n\n"}
              Users may appeal enforcement decisions through our grievance
              process.
            </Text>

            <Text style={styles.heading}>13. THIRD-PARTY SERVICES</Text>
            <Text style={styles.content}>
              The Platform may integrate third-party services including:{"\n"}
              • Payment Providers{"\n"}
              • Analytics Providers{"\n"}
              • Cloud Providers{"\n"}
              • Streaming Services{"\n\n"}
              Use of third-party services is subject to their respective terms
              and privacy policies.
            </Text>

            <Text style={styles.heading}>14. LIMITATION OF LIABILITY</Text>
            <Text style={styles.content}>
              The Platform is provided on an "AS IS" and "AS AVAILABLE" basis.
              {"\n\n"}
              To the maximum extent permitted by law, LOKAL FRND shall not be
              liable for:{"\n"}
              • Indirect damages.{"\n"}
              • Consequential damages.{"\n"}
              • Lost profits.{"\n"}
              • Data loss.{"\n"}
              • Service interruptions.{"\n"}
              • User-generated content.
            </Text>

            <Text style={styles.heading}>15. INDEMNIFICATION</Text>
            <Text style={styles.content}>
              You agree to indemnify and hold harmless the Company, its
              affiliates, officers, employees, and agents against claims arising
              from:{"\n"}
              • Your use of the Platform.{"\n"}
              • Your content.{"\n"}
              • Your violations of these Terms.{"\n"}
              • Violations of law.
            </Text>

            <Text style={styles.heading}>16. GRIEVANCE REDRESSAL</Text>
            <Text style={styles.content}>
              Support Email:{"\n"}
              support@lokalfrnd.com{"\n\n"}
              Grievance Officer:{"\n"}
              Name: Pruthvi{"\n"}
              Email: pruthvi@gmail.com{"\n\n"}
              Nodal Officer:{"\n"}
              Name: Someone{"\n"}
              Email: someone@gmail.com{"\n\n"}
              Registered Office:{"\n"}
              Hyderabad, Telangana, India
            </Text>

            <Text style={styles.heading}>17. GOVERNING LAW</Text>
            <Text style={styles.content}>
              These Terms shall be governed by the laws of India.{"\n\n"}
              All disputes shall be subject to the exclusive jurisdiction of
              courts located in Hyderabad, Telangana.
            </Text>

            <Text style={styles.heading}>18. CHANGES TO TERMS</Text>
            <Text style={styles.content}>
              We may modify these Terms at any time.{"\n\n"}
              Continued use of the Platform after updates constitutes acceptance
              of the revised Terms.
            </Text>

            <Text style={styles.heading}>19. CONTACT US</Text>
            <Text style={styles.content}>
              LOKAL FRND{"\n\n"}
              Website: https://www.lokalfrnd.com{"\n\n"}
              Support Email: support@lokalfrnd.com{"\n\n"}
              Registered Office: Hyderabad, Telangana, India{"\n\n"}
              By using LOKAL FRND, you acknowledge that you have read,
              understood, and agreed to these Terms of Use.
            </Text>

            <Text style={styles.heading}>
              ADDITIONAL CLAUSES FOR LOKAL FRND TERMS OF USE
            </Text>

            <Text style={styles.heading}>20. REFUND POLICY</Text>
            <Text style={styles.content}>
              All purchases made through the Platform, including Coins, Virtual
              Gifts, Subscription Plans, and Premium Features, are final and
              non-refundable except where required under applicable law.{"\n\n"}
              Refund requests may be reviewed on a case-by-case basis for:{"\n"}
              • Duplicate transactions{"\n"}
              • Technical failures resulting in unsuccessful purchases{"\n"}
              • Unauthorized purchases verified by the Company{"\n\n"}
              LOKAL FRND reserves the right to approve or reject refund requests
              at its sole discretion.
            </Text>

            <Text style={styles.heading}>21. PAYMENT SERVICES</Text>
            <Text style={styles.content}>
              Payments made on the Platform may be processed through authorized
              third-party payment gateways, UPI providers, banks, app stores, or
              payment processors.{"\n\n"}
              LOKAL FRND does not store complete debit card, credit card, or
              banking credentials.{"\n\n"}
              Users agree to comply with all applicable payment provider terms
              and conditions.
            </Text>

            <Text style={styles.heading}>22. ACCOUNT DELETION</Text>
            <Text style={styles.content}>
              Users may delete their account at any time through the application
              settings or by contacting customer support.{"\n\n"}
              Upon deletion:{"\n"}
              • Profile information may be removed from public view.{"\n"}
              • Certain records may be retained for legal, regulatory, fraud
              prevention, and security purposes.{"\n"}
              • Coins, Gifts, Subscriptions, and Platform benefits may be
              forfeited upon account deletion.
            </Text>

            <Text style={styles.heading}>23. NETWORK CHARGES</Text>
            <Text style={styles.content}>
              Users are responsible for all internet, mobile data, telecom, and
              device charges incurred while accessing the Platform.{"\n\n"}
              LOKAL FRND shall not be responsible for charges imposed by mobile
              carriers or internet service providers.
            </Text>

            <Text style={styles.heading}>24. SERVICE AVAILABILITY</Text>
            <Text style={styles.content}>
              We do not guarantee uninterrupted availability of the Platform.
              {"\n\n"}
              Services may be temporarily unavailable due to:{"\n"}
              • Maintenance activities{"\n"}
              • Software updates{"\n"}
              • Technical failures{"\n"}
              • Internet outages{"\n"}
              • Government restrictions{"\n"}
              • Force majeure events
            </Text>

            <Text style={styles.heading}>25. FORCE MAJEURE</Text>
            <Text style={styles.content}>
              LOKAL FRND shall not be liable for any delay or failure in
              performance caused by events beyond its reasonable control
              including:{"\n"}
              • Natural disasters{"\n"}
              • Floods{"\n"}
              • Fires{"\n"}
              • Epidemics{"\n"}
              • Government actions{"\n"}
              • War{"\n"}
              • Terrorist activities{"\n"}
              • Internet disruptions{"\n"}
              • Power failures
            </Text>

            <Text style={styles.heading}>26. INTELLECTUAL PROPERTY</Text>
            <Text style={styles.content}>
              All rights, title, and interest in the Platform, including
              software, trademarks, logos, graphics, designs, source code,
              features, and content created by the Company, remain the exclusive
              property of LOKAL FRND and its licensors.{"\n\n"}
              Users may not:{"\n"}
              • Copy{"\n"}
              • Reproduce{"\n"}
              • Modify{"\n"}
              • Distribute{"\n"}
              • Reverse engineer{"\n"}
              • Commercially exploit{"\n\n"}
              any part of the Platform without prior written permission.
            </Text>

            <Text style={styles.heading}>27. REPORTING ABUSE</Text>
            <Text style={styles.content}>
              Users may report:{"\n"}
              • Harassment{"\n"}
              • Fraud{"\n"}
              • Nudity{"\n"}
              • Child Safety Violations{"\n"}
              • Hate Speech{"\n"}
              • Fake Profiles{"\n"}
              • Spam{"\n"}
              • Copyright Violations{"\n\n"}
              through the in-app reporting tools or by emailing
              support@lokalfrnd.com.
            </Text>

            <Text style={styles.heading}>28. APP STORE COMPLIANCE</Text>
            <Text style={styles.content}>
              Users acknowledge that Apple App Store, Google Play Store, and
              other distribution platforms are not responsible for the
              operation, maintenance, support, or content of the Platform.
            </Text>

            <Text style={styles.heading}>29. ELECTRONIC COMMUNICATIONS</Text>
            <Text style={styles.content}>
              By using the Platform, users consent to receive:{"\n"}
              • OTP messages{"\n"}
              • Service notifications{"\n"}
              • Security alerts{"\n"}
              • Transaction updates{"\n"}
              • Promotional communications where permitted{"\n\n"}
              Users may opt out of marketing communications where applicable.
            </Text>

            <Text style={styles.heading}>30. ENTIRE AGREEMENT</Text>
            <Text style={styles.content}>
              These Terms, together with the Privacy Policy, Community
              Guidelines, Refund Policy, and other Platform Policies, constitute
              the entire agreement between the user and LOKAL FRND regarding use
              of the Platform.
            </Text>
          </View>
        </ScrollView>
      </View>
    </WelcomeScreenbackgroungpage>
  );
};

export default TermsofUseScreen;

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
    marginBottom: 14,
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