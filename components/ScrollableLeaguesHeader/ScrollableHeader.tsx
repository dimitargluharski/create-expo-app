import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export const leagues = [
  {
    id: 1,
    name: "Premier League",
    icon: "https://upload.wikimedia.org/wikipedia/en/f/f2/Premier_League_Logo.svg",
  },
  {
    id: 2,
    name: "La Liga",
    icon: "https://upload.wikimedia.org/wikipedia/en/9/92/La_Liga.png",
  },
  {
    id: 3,
    name: "Serie A",
    icon: "https://upload.wikimedia.org/wikipedia/en/e/e1/Serie_A_logo_%282019%29.svg",
  },
  {
    id: 4,
    name: "Bundesliga",
    icon: "https://upload.wikimedia.org/wikipedia/en/d/df/Bundesliga_logo_%282017%29.svg",
  },
  {
    id: 5,
    name: "Ligue 1",
    icon: "https://upload.wikimedia.org/wikipedia/en/b/ba/Ligue_1_Uber_Eats_logo.svg",
  },
  {
    id: 6,
    name: "Eredivisie",
    icon: "https://upload.wikimedia.org/wikipedia/en/6/65/Eredivisie_netherlands.svg",
  },
  {
    id: 7,
    name: "Primeira Liga",
    icon: "https://upload.wikimedia.org/wikipedia/en/9/90/Liga_Portugal_logo.svg",
  },
  {
    id: 8,
    name: "Major League Soccer",
    icon: "https://upload.wikimedia.org/wikipedia/en/6/60/Major_League_Soccer_logo.svg",
  },
  {
    id: 9,
    name: "Brasileirão Série A",
    icon: "https://upload.wikimedia.org/wikipedia/en/5/5e/Campeonato_Brasileiro_Série_A_logo.svg",
  },
  {
    id: 10,
    name: "Argentine Primera División",
    icon: "https://upload.wikimedia.org/wikipedia/en/6/6f/Argentine_Primera_División_logo.svg",
  },
  {
    id: 11,
    name: "J1 League",
    icon: "https://upload.wikimedia.org/wikipedia/en/5/5e/J1_League_logo.svg",
  },
  {
    id: 12,
    name: "Chinese Super League",
    icon: "https://upload.wikimedia.org/wikipedia/en/e/e7/Chinese_Super_League_logo.svg",
  },
  {
    id: 13,
    name: "Scottish Premiership",
    icon: "https://upload.wikimedia.org/wikipedia/en/b/b4/Scottish_Premiership_logo.svg",
  },
  {
    id: 14,
    name: "Belgian Pro League",
    icon: "https://upload.wikimedia.org/wikipedia/en/1/12/Belgian_Pro_League_logo.svg",
  },
  {
    id: 15,
    name: "Swiss Super League",
    icon: "https://upload.wikimedia.org/wikipedia/en/c/c6/Swiss_Super_League_logo.svg",
  },
  {
    id: 16,
    name: "A-League Men",
    icon: "https://upload.wikimedia.org/wikipedia/en/5/5e/A-League_Men_logo.svg",
  },
  {
    id: 17,
    name: "UEFA Champions League",
    icon: "https://upload.wikimedia.org/wikipedia/en/b/bf/UEFA_Champions_League_logo_2.svg",
  },
  {
    id: 18,
    name: "UEFA Europa League",
    icon: "https://upload.wikimedia.org/wikipedia/en/d/d6/UEFA_Europa_League_logo.svg",
  },
  {
    id: 19,
    name: "UEFA Conference League",
    icon: "https://upload.wikimedia.org/wikipedia/en/3/3e/UEFA_Europa_Conference_League_logo.svg",
  },
  {
    id: 20,
    name: "FIFA World Cup",
    icon: "https://upload.wikimedia.org/wikipedia/en/b/b3/FIFA_World_Cup_Icon_%28Campionship_Trophy%29.svg",
  },
  {
    id: 21,
    name: "Copa Libertadores",
    icon: "https://upload.wikimedia.org/wikipedia/en/f/f5/Copa_Libertadores_logo.svg",
  },
  {
    id: 22,
    name: "CONCACAF Champions Cup",
    icon: "https://upload.wikimedia.org/wikipedia/en/d/df/CONCACAF_Champions_Cup_logo.svg",
  },
  {
    id: 23,
    name: "Africa Cup of Nations",
    icon: "https://upload.wikimedia.org/wikipedia/en/f/f4/CAF_Africa_Cup_of_Nations_logo.svg",
  },
  {
    id: 24,
    name: "Asian Cup",
    icon: "https://upload.wikimedia.org/wikipedia/en/4/4d/AFC_Asian_Cup_logo.svg",
  }
];

const ScrollableLeaguesHeader = () => {
  const [activeLeagueId, setActiveLeagueId] = useState<number>(1);

  return (
    <View style={{
      backgroundColor: '#fff',
      paddingVertical: 15,
    }}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
      >
        {leagues.map((league) => (
          <TouchableOpacity
            key={league.id}
            onPress={() => setActiveLeagueId(league.id)}
            style={{
              backgroundColor: activeLeagueId === league.id ? '#F88AB9' : '#f8f8f8',
              paddingHorizontal: 16,
              paddingVertical: 12,
              borderRadius: 25,
              marginRight: 12,
              flexDirection: 'row',
              alignItems: 'center',
              minWidth: 120,
              elevation: 2,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.1,
              shadowRadius: 2,
            }}
          >
            <Image
              source={{ uri: league.icon }}
              style={{
                width: 20,
                height: 20,
                marginRight: 8,
              }}
              resizeMode="contain"
            />
            <Text
              style={{
                color: activeLeagueId === league.id ? '#fff' : '#333',
                fontWeight: activeLeagueId === league.id ? 'bold' : '500',
                fontSize: 13,
                flexShrink: 1,
              }}
              numberOfLines={1}
            >
              {league.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}

export default ScrollableLeaguesHeader;