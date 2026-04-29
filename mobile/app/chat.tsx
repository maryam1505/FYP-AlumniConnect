import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
  ListRenderItem,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter, useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

type Message = {
  id: string;
  text?: string;
  sender: "me" | "other";
  type?: "imageCard";
  image?: string;
};

export default function ChatScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { userId, name, image } = params;

  const [message, setMessage] = useState<string>("");

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "imageCard",
      text: "College Conducted Successful Workshop on Artificial Intelligence and Machine Learning",
      image:
        "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b",
      sender: "other",
    },
    {
      id: "2",
      text: "Did you attend this ?",
      sender: "other",
    },
    {
      id: "3",
      text: "Yes I attended this",
      sender: "me",
    },
    {
      id: "4",
      text: "The Speaker was really good",
      sender: "me",
    },
    {
      id: "5",
      text:
        "When are you coming back from Delhi we can attend the next event together",
      sender: "me",
    },
  ]);

  const sendMessage = () => {
    if (!message.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: message,
      sender: "me",
    };

    setMessages((prev) => [...prev, newMessage]);
    setMessage("");
  };

  const renderMessage: ListRenderItem<Message> = ({ item }) => {
    if (item.type === "imageCard") {
      return (
        <View style={styles.cardWrapper}>
          <View style={styles.cardContainer}>
            <Image source={{ uri: item.image }} style={styles.cardImage} />
            <Text style={styles.cardText}>{item.text}</Text>
          </View>
        </View>
      );
    }

    const isMe = item.sender === "me";

    return (
      <View
        style={[
          styles.messageBubble,
          isMe ? styles.myMessage : styles.otherMessage,
        ]}
      >
        <Text style={[styles.messageText, isMe && { color: "#fff" }]}>
          {item.text}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header with back button, user image, name, and last seen */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>

        <Image 
          source={{ uri: (image as string) || "https://randomuser.me/api/portraits/women/44.jpg" }} 
          style={styles.avatar} 
        />

        <View style={styles.headerText}>
          <Text style={styles.name}>{name || "Samara Patel"}</Text>
          <Text style={styles.lastSeen}>Last Seen 3hr ago</Text>
        </View>
      </View>

      {/* Chat messages */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessage}
        contentContainerStyle={styles.chatContainer}
      />

      {/* Input area */}
      <View style={styles.inputContainer}>
        <TextInput
          value={message}
          onChangeText={setMessage}
          placeholder="Type a message..."
          style={styles.input}
        />

        <TouchableOpacity style={styles.sendBtn} onPress={sendMessage}>
          <Text style={styles.sendText}>Send</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  backButton: {
    marginRight: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  headerText: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
  },
  lastSeen: {
    fontSize: 12,
    color: "gray",
    marginTop: 2,
  },

  chatContainer: {
    padding: 10,
  },

  messageBubble: {
    maxWidth: "75%",
    padding: 10,
    marginVertical: 5,
    borderRadius: 12,
  },

  myMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#0b7d6c",
  },

  otherMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#e5e5ea",
  },

  messageText: {
    fontSize: 14,
    color: "#000",
  },

  cardWrapper: {
    alignItems: "flex-start",
    marginVertical: 8,
  },

  cardContainer: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
  },

  cardImage: {
    width: "100%",
    height: 150,
  },

  cardText: {
    padding: 10,
    fontWeight: "600",
  },

  inputContainer: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#ddd",
  },

  input: {
    flex: 1,
    backgroundColor: "#eee",
    borderRadius: 20,
    paddingHorizontal: 15,
    height: 40,
  },

  sendBtn: {
    marginLeft: 10,
    backgroundColor: "#0b7d6c",
    paddingHorizontal: 16,
    justifyContent: "center",
    borderRadius: 20,
  },

  sendText: {
    color: "#fff",
    fontWeight: "600",
  },
});