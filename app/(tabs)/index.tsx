import LiveMatches from "@/components/LiveMatches/LiveMatches";
import MatchList from "@/components/MatchList/MatchList";
import ScrollableLeaguesHeader from "@/components/ScrollableLeaguesHeader/ScrollableHeader";
import { ScrollView, View } from "react-native";

const Page = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* Fixed Header */}
      <View style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: '#fff',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      }}>
        <ScrollableLeaguesHeader />
      </View>

      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 80,
        }}
      >
        <LiveMatches />
        <MatchList />
      </ScrollView>
    </View>
  )
};

export default Page;