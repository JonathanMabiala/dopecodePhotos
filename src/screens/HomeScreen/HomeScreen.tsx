import {
  StyleSheet,
  FlatList,
  View,
  ViewabilityConfig,
  ViewToken,
  ActivityIndicator,
} from "react-native";
import { useState, useRef, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import { type Schema } from "../../../amplify/data/resource";
import FeedPost from "../../components/FeedPost";

const client = generateClient<Schema>();
const HomeScreen = () => {
  type Post = Schema["Post"]["type"];

  const [activePostId, setActivePostId] = useState<string | null>(null);
  const [posts, setPosts] = useState<Post[]>();

  useEffect(() => {
    const listPost = async () => {
      const { data: postsFetched, errors } = await client.models.Post.list({
        selectionSet: [
          "description",
          "user.*",
          "video",
          "id",
          "nofComments",
          "nofLikes",
          "images",
          "image",
          "createdAt",
          "comments.comment",
          "comments.id",
          "comments.user.id",
          "comments.user.image",
          "comments.user.username",
          "user.*",
        ],
      });
      if (!errors) {
        setPosts(postsFetched);
        console.log("List of posts ", postsFetched);
      } else {
        console.log("There was an error ", errors);
      }
    };
    listPost();
  }, []);

  const viewabilityConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  };

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: Array<ViewToken> }) => {
      if (viewableItems.length > 0) {
        setActivePostId(viewableItems[0].item.id);
      }
    }
  );
  return posts ? (
    <View>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <FeedPost post={item} isVisible={activePostId === item.id} />
        )}
        showsVerticalScrollIndicator={false}
        viewabilityConfig={viewabilityConfig}
        onViewableItemsChanged={onViewableItemsChanged.current}
      />
    </View>
  ) : (
    <ActivityIndicator />
  );
};

export default HomeScreen;
