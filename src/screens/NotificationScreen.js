import React, { useEffect, useMemo, useState, useCallback } from 'react';
import {
  View,
  Text,
  SectionList,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';

import {
  fetchNotifications,
  markNotificationsRead,
} from '../features/notification/notificationAction';

import WelcomeScreenbackgroundgpage from '../components/BackgroundPages/WelcomeScreenbackgroungpage.js';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  FRIEND_ACCEPT_REQUEST,
  FRIEND_REJECT_REQUEST,
} from '../features/friend/friendType';

const getDayLabel = dateString => {
  const date = new Date(dateString);
  const today = new Date();

  const startToday = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
  );

  const startDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
  );

  const diff = (startToday - startDate) / (1000 * 60 * 60 * 24);

  if (diff === 0) return 'Today';
  if (diff === 1) return 'Yesterday';

  return 'Earlier';
};

const formatTimeAgo = dateString => {
  const diffMin = Math.floor((Date.now() - new Date(dateString)) / 60000);

  if (diffMin < 1) return 'Just now';
  if (diffMin < 60) return `${diffMin} min ago`;
  if (diffMin < 1440) return `${Math.floor(diffMin / 60)} hr ago`;

  return `${Math.floor(diffMin / 1440)} d ago`;
};

const NotificationScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const { list = [], loading } = useSelector(state => state.notification);

  const [processingId, setProcessingId] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const loadNotifications = useCallback(() => {
    dispatch(fetchNotifications());
    dispatch(markNotificationsRead());
  }, [dispatch]);

  useEffect(() => {
    loadNotifications();
  }, [loadNotifications]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    loadNotifications();

    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, [loadNotifications]);

  const sections = useMemo(() => {
    const grouped = {};

    list.forEach(item => {
      const label = getDayLabel(item.created_at);

      if (!grouped[label]) {
        grouped[label] = [];
      }

      grouped[label].push(item);
    });

    return Object.keys(grouped).map(key => ({
      title: key,
      data: grouped[key],
    }));
  }, [list]);

  const handleAccept = item => {
    if (processingId) return;

    setProcessingId(item.id);

    dispatch({
      type: FRIEND_ACCEPT_REQUEST,
      payload: {
        sender_id: item.sender_id,
      },
      meta: {
        notificationId: item.id,
      },
    });

    setTimeout(() => {
      setProcessingId(null);
    }, 1000);
  };

  const handleReject = item => {
    if (processingId) return;

    setProcessingId(item.id);

    dispatch({
      type: FRIEND_REJECT_REQUEST,
      payload: {
        sender_id: item.sender_id,
      },
      meta: {
        notificationId: item.id,
      },
    });

    setTimeout(() => {
      setProcessingId(null);
    }, 1000);
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.row}>
        <LinearGradient
          colors={['#B620E0', '#7B2FF7']}
          style={styles.avatarBorder}
        >
          <Image
            source={{
              uri: item.avatar_url || 'https://i.pravatar.cc/150?img=12',
            }}
            style={styles.avatar}
          />
        </LinearGradient>

        <View style={styles.textContainer}>
          <Text style={styles.name}>
            {item.sender_name || 'Notification'}
          </Text>

          <Text style={styles.subtitle}>{item.message}</Text>

          <Text style={styles.time}>
            {formatTimeAgo(item.created_at)}
          </Text>
        </View>

        {item.type === 'FRIEND_REQUEST' && (
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.acceptBtn}
              disabled={processingId === item.id}
              onPress={() => handleAccept(item)}
              activeOpacity={0.8}
            >
              <Text style={styles.acceptText}>
                {processingId === item.id ? '...' : 'Accept'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.rejectBtn}
              disabled={processingId === item.id}
              onPress={() => handleReject(item)}
              activeOpacity={0.8}
            >
              <Text style={styles.rejectText}>
                {processingId === item.id ? '...' : 'Reject'}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  };

  return (
    <WelcomeScreenbackgroundgpage>
      <View style={styles.screen}>
        <StatusBar barStyle="dark-content" />

        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="chevron-back" size={26} color="#000" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Notification</Text>
        </View>

        <SectionList
          sections={sections}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          renderSectionHeader={({ section }) => (
            <View style={styles.sectionHeader}>
              <View style={styles.sectionLine} />
              <Text style={styles.sectionTitle}>{section.title}</Text>
            </View>
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          refreshing={refreshing}
          onRefresh={onRefresh}
          ListEmptyComponent={
            <Text style={styles.empty}>
              {loading ? 'Loading...' : 'No notifications'}
            </Text>
          }
        />
      </View>
    </WelcomeScreenbackgroundgpage>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 25,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 10,
    color: '#000',
  },

  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 15,
  },

  sectionLine: {
    width: 4,
    height: 18,
    backgroundColor: '#8A2DFF',
    borderRadius: 4,
    marginRight: 8,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#222',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 16,
    marginBottom: 12,

    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 3,
  },

  avatarBorder: {
    padding: 2,
    borderRadius: 40,
    marginRight: 12,
  },

  avatar: {
    width: 55,
    height: 55,
    borderRadius: 30,
  },

  textContainer: {
    flex: 1,
  },

  name: {
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
  },

  subtitle: {
    fontSize: 13,
    color: '#555',
    marginTop: 3,
  },

  time: {
    fontSize: 12,
    color: '#9A9A9A',
    marginTop: 3,
  },

  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  acceptBtn: {
    backgroundColor: '#B620E0',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 14,
    marginRight: 6,
  },

  acceptText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },

  rejectBtn: {
    backgroundColor: '#E5E5EA',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 14,
  },

  rejectText: {
    color: '#555',
    fontSize: 12,
    fontWeight: '500',
  },

  listContent: {
    paddingBottom: 30,
    paddingHorizontal: 16,
  },

  empty: {
    textAlign: 'center',
    marginTop: 40,
    color: '#666',
  },
});