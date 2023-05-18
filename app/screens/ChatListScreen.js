import React, { useState } from 'react';
import { StyleSheet, View, Pressable, Text, Linking } from 'react-native';

import TopBar from '../components/TopBar';
import ChatList from '../components/ChatList';
import ChatTile from '../components/ChatTile';

export default function ChatListScreen() {
  const [selectedChat, setSelectedChat] = useState(null);

  const handleChatClick = (chat) => {
    setSelectedChat(chat);
  };

  return (
    <>
      <View style={styles.topBarContainer}>
        <TopBar />
      </View>
      <View style={styles.chatListContainer}>
        <ChatList onChatClick={handleChatClick} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  topBarContainer: {
    height: 60, // Adjust the value as needed
  },
  chatListContainer: {
    flex: 1,
  },
});