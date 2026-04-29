import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  StatusBar,
  TextInput,
  Modal,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { useDrawer } from '../app/context/DrawerContext';
import * as Sharing from 'expo-sharing';

type Comment = {
  id: string;
  userName: string;
  text: string;
  timestamp: string;
};

type Post = {
  id: string;
  name: string;
  role: string;
  batch: string;
  timeAgo: string;
  avatar: any;
  content: string;
  image?: any;
  likes: number;
  isLiked: boolean;
  comments: Comment[];
};

const SAMPLE_POSTS: Post[] = [
  {
    id: '1',
    name: 'Ramanjot Singh',
    role: 'Software Developer at Digital Labs',
    batch: 'BTech(ME) 2019',
    timeAgo: '3d',
    avatar: require('../assets/images/ria.jpg'),
    content: 'Insightful event held Chandigarh Computer Club on Importance of Virtual Safety. It was a great learning experience with industry experts sharing valuable insights on cybersecurity and data protection. The session covered modern threats and best practices for staying safe online. #CyberSecurity #VirtualSafety',
    image: require('../assets/images/horse_racing.jpg'),
    likes: 24,
    isLiked: false,
    comments: [],
  },
  {
    id: '2',
    name: 'Abhay Singh',
    role: 'Software Developer at Labs',
    batch: 'BTech(CSE) 2010',
    timeAgo: '3d',
    avatar: require('../assets/images/karan.jpg'),
    content: 'Excited to announce that our team has successfully launched the new alumni portal! Connect with your batchmates and explore opportunities. #AlumniConnect #NewLaunch',
    image: require('../assets/images/alumniConnect.jpg'),
    likes: 12,
    isLiked: false,
    comments: [],
  },
  {
    id: '3',
    name: 'Priya Sharma',
    role: 'Senior Developer at Google',
    batch: 'BTech(CSE) 2018',
    timeAgo: '5d',
    avatar: require('../assets/images/ria.jpg'),
    content: 'Just published a new article on React Native best practices. Check it out! #ReactNative #MobileDev #CodingLife',
    image: require('../assets/images/mobileDev.jpg'),
    likes: 45,
    isLiked: false,
    comments: [],
  },
];

export default function FeedScreen() {
  const router = useRouter();
  const { openDrawer } = useDrawer();
  const [posts, setPosts] = useState(SAMPLE_POSTS);
  const [expandedPosts, setExpandedPosts] = useState<{ [key: string]: boolean }>({});
  const [commentModalVisible, setCommentModalVisible] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
  const [commentText, setCommentText] = useState('');

  const toggleExpand = (postId: string) => {
    setExpandedPosts(prev => ({ ...prev, [postId]: !prev[postId] }));
  };

  const handleLike = (postId: string) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId
          ? {
              ...post,
              likes: post.isLiked ? post.likes - 1 : post.likes + 1,
              isLiked: !post.isLiked,
            }
          : post
      )
    );
  };

  const openCommentModal = (postId: string) => {
    setSelectedPostId(postId);
    setCommentText('');
    setCommentModalVisible(true);
  };

  const submitComment = () => {
    if (!commentText.trim() || !selectedPostId) return;
    
    const newComment: Comment = {
      id: Date.now().toString(),
      userName: 'You',
      text: commentText.trim(),
      timestamp: new Date().toLocaleString(),
    };
    
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === selectedPostId
          ? { ...post, comments: [newComment, ...post.comments] }
          : post
      )
    );
    setCommentModalVisible(false);
    setCommentText('');
    setSelectedPostId(null);
  };

  const handleShare = async (post: Post) => {
    const shareText = `${post.name}\n${post.content}\n\nCheck out this post on AlumniConnect!`;
    try {
      if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(shareText, {
          dialogTitle: 'Share this post',
        });
      } else {
        alert('Sharing is not available on this device');
      }
    } catch (error) {
      console.error('Share failed:', error);
    }
  };

  const handleHashtagPress = (hashtag: string) => {
    // You can implement hashtag search/filter here
    alert(`Show posts with ${hashtag}`);
  };

  const renderPost = ({ item }: { item: Post }) => {
    const isExpanded = expandedPosts[item.id] || false;
    const shouldTruncate = item.content.length > 150 && !isExpanded;
    const displayContent = shouldTruncate
      ? item.content.slice(0, 150) + '... '
      : item.content;

    // Extract hashtags (words starting with #)
    const hashtags = item.content.match(/#[\w\u0590-\u05fe]+/g) || [];

    return (
      <View style={styles.postCard}>
        {/* Header */}
        <View style={styles.postHeader}>
          <Image source={item.avatar} style={styles.avatar} />
          <View style={styles.headerText}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.role}>{item.role}</Text>
            <View style={styles.metaRow}>
              <Text style={styles.batch}>{item.batch}</Text>
              <Text style={styles.timeAgo}> • {item.timeAgo}</Text>
            </View>
          </View>
        </View>

        {/* Post Content - no numberOfLines */}
        <View style={styles.contentContainer}>
          <Text style={styles.postContent}>
            {displayContent}
            {shouldTruncate && (
              <Text onPress={() => toggleExpand(item.id)} style={styles.seeMore} numberOfLines={2}>
                see more
              </Text>
            )}
            {isExpanded && (
              <Text onPress={() => toggleExpand(item.id)} style={styles.seeMore}>
                see less
              </Text>
            )}
          </Text>
        </View>

        {/* Hashtags */}
        {hashtags.length > 0 && (
          <View style={styles.hashtagContainer}>
            {hashtags.map((tag, index) => (
              <TouchableOpacity key={index} onPress={() => handleHashtagPress(tag)}>
                <Text style={styles.hashtag}>{tag}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* Post Image */}
        {item.image && (
          <Image source={item.image} style={styles.postImage} resizeMode="cover" />
        )}

        {/* Action Buttons */}
        <View style={styles.actionRow}>
          <TouchableOpacity onPress={() => handleLike(item.id)} style={styles.actionButton}>
            <Feather
              name="thumbs-up"
              size={20}
              color={item.isLiked ? '#115848' : '#6B7280'}
            />
            <Text style={[styles.actionText, item.isLiked && styles.actionTextActive]}>
              Like {item.likes > 0 ? `(${item.likes})` : ''}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => openCommentModal(item.id)} style={styles.actionButton}>
            <Feather name="message-circle" size={18} color="#6B7280" />
            <Text style={styles.actionText}>
              Comment {item.comments.length > 0 ? `(${item.comments.length})` : ''}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleShare(item)} style={styles.actionButton}>
            <Feather name="share-2" size={18} color="#6B7280" />
            <Text style={styles.actionText}>Share</Text>
          </TouchableOpacity>
        </View>

        {/* Comments Section */}
        {item.comments.length > 0 && (
          <View style={styles.commentsSection}>
            {item.comments.slice(0, 2).map(comment => (
              <View key={comment.id} style={styles.commentItem}>
                <Text style={styles.commentUser}>{comment.userName}</Text>
                <Text style={styles.commentText}>{comment.text}</Text>
              </View>
            ))}
            {item.comments.length > 2 && (
              <TouchableOpacity onPress={() => openCommentModal(item.id)}>
                <Text style={styles.viewMoreComments}>
                  View all {item.comments.length} comments
                </Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#115848" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={openDrawer} style={styles.iconButton}>
          <Feather name="menu" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Feed</Text>
        <View style={{ width: 40 }} />
      </View>

      {/* Feed List */}
      <FlatList
        data={posts}
        keyExtractor={item => item.id}
        renderItem={renderPost}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />

      {/* Comment Modal */}
      <Modal
        visible={commentModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setCommentModalVisible(false)}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.modalContainer}
        >
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Add a Comment</Text>
              <TouchableOpacity onPress={() => setCommentModalVisible(false)}>
                <Feather name="x" size={22} color="#115848" />
              </TouchableOpacity>
            </View>
            <TextInput
              style={styles.commentInput}
              placeholder="Write your comment..."
              placeholderTextColor="#999"
              value={commentText}
              onChangeText={setCommentText}
              multiline
              autoFocus
            />
            <TouchableOpacity
              style={[styles.submitButton, !commentText.trim() && styles.disabledButton]}
              onPress={submitComment}
              disabled={!commentText.trim()}
            >
              <Text style={styles.submitButtonText}>Post Comment</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#115848',
    borderBottomWidth: 1,
    borderBottomColor: '#115848',
  },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#fff' },
  iconButton: { padding: 8 },
  listContent: { paddingHorizontal: 0, paddingTop: 0, paddingBottom: 20 },
  postCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 10,
  },
  postHeader: { flexDirection: 'row', marginBottom: 12 },
  avatar: { width: 48, height: 48, borderRadius: 24, marginRight: 12, backgroundColor: '#E5E7EB' },
  headerText: { flex: 1 },
  name: { fontSize: 16, fontWeight: '700', color: '#1F2937' },
  role: { fontSize: 13, color: '#4B5563', marginTop: 2 },
  metaRow: { flexDirection: 'row', alignItems: 'center', marginTop: 4 },
  batch: { fontSize: 12, color: '#6B7280' },
  timeAgo: { fontSize: 12, color: '#9CA3AF' },
  contentContainer: { marginBottom: 12 },
  postContent: { fontSize: 14, lineHeight: 20, color: '#374151' },
  seeMore: { color: '#115848', fontWeight: '500' },
  hashtagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 8,
  },
  hashtag: {
    color: '#115848',
    fontSize: 13,
    fontWeight: '500',
    marginRight: 8,
    marginBottom: 4,
  },
  postImage: { width: '100%', height: 200, borderRadius: 2, marginBottom: 12, backgroundColor: '#f0f0f0' },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    paddingTop: 12,
    marginTop: 4,
  },
  actionButton: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  actionText: { fontSize: 14, color: '#6B7280', fontWeight: '500' },
  actionTextActive: { color: '#115848' },
  commentsSection: { marginTop: 12, paddingTop: 8, borderTopWidth: 1, borderTopColor: '#f0f0f0' },
  commentItem: { flexDirection: 'row', marginBottom: 8 },
  commentUser: { fontWeight: 'bold', color: '#115848', marginRight: 8, fontSize: 13 },
  commentText: { flex: 1, fontSize: 13, color: '#374151' },
  viewMoreComments: { fontSize: 12, color: '#6B7280', marginTop: 4 },
  modalContainer: { flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.5)' },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    minHeight: 200,
  },
  modalHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  modalTitle: { fontSize: 18, fontWeight: 'bold', color: '#000' },
  commentInput: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    minHeight: 100,
    textAlignVertical: 'top',
    marginBottom: 16,
  },
  submitButton: { backgroundColor: '#115848', paddingVertical: 12, borderRadius: 8, alignItems: 'center' },
  disabledButton: { backgroundColor: '#115' },
  submitButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});