import { FlatList, Text, View } from "react-native";

const matches = [
  {
    homeTeam: "Man City",
    awayTeam: "Palace",
    time: "06:30",
    date: "30 Oct"
  },
  {
    homeTeam: "Burnley",
    awayTeam: "Brentford",
    time: "06:30",
    date: "30 Oct"
  },
  {
    homeTeam: "Leicester",
    awayTeam: "Arsenal",
    time: "08:30",
    date: "30 Oct"
  },
  {
    homeTeam: "Spurs",
    awayTeam: "Man Utd",
    time: "08:30",
    date: "30 Oct"
  },
  {
    homeTeam: "Norwich",
    awayTeam: "Leeds",
    time: "08:30",
    date: "30 Nov"
  },
  {
    homeTeam: "A Villa",
    awayTeam: "West Ham",
    time: "08:30",
    date: "30 Oct"
  }
];

const GameCard = (props: any) => {
  const { homeTeam, awayTeam, date, time } = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 12,
        marginVertical: 8,
        marginHorizontal: 16,
        backgroundColor: '#fff',
        borderRadius: 8,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
      }}
    >
      <View style={{ flex: 1, alignItems: 'flex-start' }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{homeTeam}</Text>
      </View>

      <View style={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16
      }}>
        <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{time}</Text>
        <Text style={{ fontSize: 12, color: '#666' }}>{date}</Text>
      </View>

      <View style={{ flex: 1, alignItems: 'flex-end' }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{awayTeam}</Text>
      </View>
    </View>
  )
}

const MatchList = () => {
  return (
    <View>
      <Text style={{
        fontSize: 18,
        fontWeight: 'bold',
        paddingHorizontal: 20,
        paddingVertical: 15,
        color: '#333'
      }}>
        Games
      </Text>
      <FlatList
        data={matches}
        renderItem={({ item }) => <GameCard {...item} />}
        keyExtractor={(item, index) => `${item.homeTeam}-${item.awayTeam}-${index}`}
      />
    </View>
  )
}


export default MatchList;