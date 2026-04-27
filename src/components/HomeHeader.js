import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const wp = (percent) => (width * percent) / 100;
const hp = (percent) => (height * percent) / 100;

const HomeHeader = ({
  navigation,
  userdata,
  unread,
  imageUrl,
  withSpacing,

}) => {
  return (
    <View
      style={[
        styles.headerContainer,
        { paddingTop: withSpacing ? hp(1.2) : 0 },
      ]}
    >
      <View style={styles.headerRow}>
        
        {/* COIN */}
        <TouchableOpacity onPress={() => navigation.navigate('PlanScreen')}>
          <LinearGradient
            colors={['#FFA726', '#FF7043']}
            style={[
              styles.coinBox,
              {
                height: wp(10),
                borderRadius: wp(5),
                paddingHorizontal: wp(3),
              },
            ]}
          >
            <Image
              source={require('../assets/coin1.png')}
              style={{
                width: wp(5.5),
                height: wp(5.5),
              }}
            />
            <Text
              style={[
                styles.coinText,
                { fontSize: wp(3.5), marginLeft: wp(1.5) },
              ]}
            >
              {userdata?.user?.coin_balance ?? 0}
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* RIGHT ICONS */}
        <View style={styles.rightIcons}>
          
          {/* MESSAGE */}
          <TouchableOpacity
            onPress={() => navigation.navigate('MessagesScreen')}
          >
            <View
              style={[
                styles.iconCircle,
                {
                  width: wp(9),
                  height: wp(9),
                  borderRadius: wp(4.5),
                },
              ]}
            >
              <Icon name="message-processing-outline" size={wp(5)} color="#fff" />
            </View>
          </TouchableOpacity>

          {/* NOTIFICATION */}
          <TouchableOpacity
            onPress={() => navigation.navigate('NotificationScreen')}
            style={{ marginLeft: wp(2) }}
          >
            <View
              style={[
                styles.iconCircle,
                {
                  width: wp(9),
                  height: wp(9),
                  borderRadius: wp(4.5),
                },
              ]}
            >
              <Icon name="bell-outline" size={wp(5)} color="#fff" />
            </View>

            {unread > 0 && (
              <View
                style={[
                  styles.badge,
                  {
                    top: -wp(1),
                    right: -wp(1),
                    minWidth: wp(4.5),
                    height: wp(4.5),
                    borderRadius: wp(2.2),
                  },
                ]}
              >
                <Text style={[styles.badgeText, { fontSize: wp(2.5) }]}>
                  {unread > 99 ? '99+' : unread}
                </Text>
              </View>
            )}
          </TouchableOpacity>

          {/* PROFILE */}
          {/* <TouchableOpacity
            onPress={() => navigation.navigate('UplodePhotoScreen')}
            style={{ marginLeft: wp(2) }}
          > */}
            <TouchableOpacity
            onPress={() => navigation.navigate('AboutScreen', {
      user_id: userdata?.user?.user_id,
    })}
            style={{ marginLeft: wp(2) }}
          >
            <Image
              source={imageUrl}
              style={{
                width: wp(9),
                height: wp(9),
                borderRadius: wp(4.5),
                borderWidth: 2,
                borderColor: '#A35DFE',
              }}
            />
          </TouchableOpacity>

        </View>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  headerContainer: {
    paddingBottom: 10,
  },

  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  coinBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  coinText: {
    fontWeight: '800',
    color: '#fff',
  },

  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconCircle: {
    backgroundColor: '#ce17fc',
    justifyContent: 'center',
    alignItems: 'center',
  },

  badge: {
    position: 'absolute',
    backgroundColor: '#ff0044',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 2,
  },

  badgeText: {
    color: '#fff',
    fontWeight: '700',
  },
});