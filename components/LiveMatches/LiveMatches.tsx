import { ScrollView, Text, View } from "react-native";

const liveMatches = [
  {
    id: 1,
    league: "Premier League",
    week: "Week 10",
    homeTeam: "Newcastle",
    awayTeam: "Chelsea",
    homeScore: 0,
    awayScore: 3,
    minute: "83'",
    status: "Live"
  },
  {
    id: 2,
    league: "La Liga",
    week: "Week 12",
    homeTeam: "Barcelona",
    awayTeam: "Real Madrid",
    homeScore: 2,
    awayScore: 1,
    minute: "67'",
    status: "Live"
  },
  {
    id: 3,
    league: "Serie A",
    week: "Week 9",
    homeTeam: "Juventus",
    awayTeam: "Inter",
    homeScore: 1,
    awayScore: 1,
    minute: "45+2'",
    status: "Live"
  }
];

const LiveMatches = () => {
  return (
    <View>
      <Text style={{
        fontSize: 18,
        fontWeight: 'bold',
        paddingHorizontal: 20,
        paddingVertical: 15,
        color: '#333'
      }}>
        Live Games
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
      >
        {liveMatches.map((match) => (
          <View
            key={match.id}
            style={{
              backgroundColor: '#4A2C5B',
              borderRadius: 15,
              padding: 20,
              marginRight: 15,
              width: 280,
              minHeight: 150,
            }}
          >
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 10,
            }}>
              <Text style={{
                color: '#fff',
                fontSize: 16,
                fontWeight: 'bold',
              }}>
                {match.league}
              </Text>
              <Text style={{
                color: '#B0A0B5',
                fontSize: 12,
              }}>
                {match.week}
              </Text>
            </View>

            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 20,
            }}>
              <View style={{ flex: 1, alignItems: 'center' }}>
                <Text style={{
                  color: '#fff',
                  fontSize: 16,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                  {match.homeTeam}
                </Text>
                <Text style={{
                  color: '#B0A0B5',
                  fontSize: 12,
                  marginTop: 2,
                }}>
                  Home
                </Text>
              </View>

              <View style={{
                alignItems: 'center',
                backgroundColor: 'rgba(255,255,255,0.1)',
                paddingHorizontal: 15,
                paddingVertical: 8,
                borderRadius: 20,
              }}>
                <Text style={{
                  color: '#fff',
                  fontSize: 24,
                  fontWeight: 'bold',
                }}>
                  {match.homeScore} : {match.awayScore}
                </Text>
                <Text style={{
                  color: '#B0A0B5',
                  fontSize: 12,
                  marginTop: 2,
                }}>
                  {match.minute}
                </Text>
              </View>

              <View style={{ flex: 1, alignItems: 'center' }}>
                <Text style={{
                  color: '#fff',
                  fontSize: 16,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                  {match.awayTeam}
                </Text>
                <Text style={{
                  color: '#B0A0B5',
                  fontSize: 12,
                  marginTop: 2,
                }}>
                  Away
                </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default LiveMatches;