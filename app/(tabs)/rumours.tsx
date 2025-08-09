import { FlatList, Text, View } from "react-native";

import data from '../../data.json';

interface Player {
  player_name: string;
  position: string;
  age: string;
  nationality: string;
  nationality_flag: string;
  player_image: string;
  current_club: string;
  current_club_logo: string;
  current_club_league: string;
  current_club_nation_flag: string;
  interested_club: string;
  interested_club_logo: string;
  interested_club_league: string;
  interested_club_nation_flag: string;
  contract_expires: string;
  market_value: string;
  probability: string;
  probability_trend: string;
}

const PlayerItem = (props: { player_name: string }) => {
  const { player_name } = props;
  return (
    <View>
      <Text>
        {player_name}
      </Text>
    </View>
  )
}

const Page = () => {
  return (
    <View>
      <FlatList<Player>
        data={data as Player[]}
        renderItem={({ item }) => <PlayerItem player_name={item.player_name} />}
        keyExtractor={(item) => item.player_name}
      />
    </View>
  )
}

export default Page;