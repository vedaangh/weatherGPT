import { LocationTime, TripCard } from "@/components/TripCard";
import { Background } from "@/components/Background";
import { useCurrentTime } from "@/hooks/useCurrentTime";
import { Plan, usePlanner } from "@/hooks/usePlanner";
import { SettingsContext, useSettings } from "@/hooks/useSettings";
import { useWeather } from "@/hooks/useWeather";
import { ActivityIndicator, Image, TextStyle, SafeAreaView, StyleSheet, Text, View, StyleProp, ViewStyle } from "react-native";
import { styles } from "@/constants/styles";
import { useContext } from "react";
import { formatTime } from "@/utils/time";

const Banner = ({
  method,
  style
}: {
  method: string
  style?: StyleProp<ViewStyle>
}) => {
  return (
    <View style={style} className="bg-white rounded-full py-2 w-[90%] flex flex-row justify-center items-center">
      {method === 'cycle' ? (
        <Text>You're good to {method}!</Text>
      ) : (
        <Text>You'll have to {method} today!</Text>
      )}
      <Image
        source={require('./../../assets/checkmark.png')}
        style={{ width: 24, height: 24, marginLeft: 20}}
      />
    </View>
  )
}

export default function HomeScreen() {
  const {settings, loading} = useContext(SettingsContext) || {loading: true}
  const plan = usePlanner()

  console.log("home rerendering")

  if (loading || !plan) return <SafeAreaView className="flex items-center justify-center"><ActivityIndicator /></SafeAreaView>
  console.log(plan)

  return (
    <Background>
      <View style={{
        width: "100%",
        height: "100%",
        paddingBottom: "10%",
        paddingTop: "100%",
      }} className="flex flex-col items-center justify-between">
        <Banner method={plan.method} />
        <View className="flex flex-col">
          <TripCard
            temperature={plan.toJourney.temperature}
            rainfall={plan.toJourney.rainfall}
            start={{
              location: "Home",
              time: formatTime(plan.toJourney.startTime, settings.use24hrTime)
            }}
            end={{
              location: "USE TABLE DATA",
              time: formatTime(plan.toJourney.endTime, settings.use24hrTime)
            }}
          />
          <TripCard
            style={{ marginTop: 20 }}
            temperature={plan.backJourney.temperature}
            rainfall={plan.backJourney.rainfall}
            start={{
              location: "USE TABLE DATA",
              time: formatTime(plan.backJourney.startTime, settings.use24hrTime)
            }}
            end={{
              location: "Home",
              time: formatTime(plan.backJourney.endTime, settings.use24hrTime)
            }}
          />
        </View>
      </View>
    </Background>
  );
}
