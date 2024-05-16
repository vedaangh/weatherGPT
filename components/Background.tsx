import { Text, Button, View, Image, StyleSheet } from "react-native";
import { Children, ReactNode } from "react";
import { Directions } from "react-native-gesture-handler";

interface BackgroundProps {
    children: ReactNode;
}


const TopGraphic = () => {
  return (
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
          <Image
              source={require('./../assets/sun.png')}
              style={{ left: 0, marginLeft: 0, flex: 1, resizeMode: 'contain', aspectRatio: 1 }}
          />
          <Image
              source={require('./../assets/cloud.png')}
              style={{ marginLeft: 1, flex: 2, resizeMode: 'contain', aspectRatio: 3 }}
          />
          <Image
            source = {require('./../assets/tree.png')}
            style = {{
              alignContent: "center",
              position: "absolute",
              top: 100
            }}
          />
          <Image
            source = {require('./../assets/cyclist.png')}
            style = {{
              alignContent:"center",
              position: "absolute",
              top: 160
            }}
          />
          <Image
            source = {require('./../assets/road.png')}
            style = {{
              alignContent:"center",
              position: "absolute",
              top: 334
            }}
          />
      </View>
  );
}

export const Background = ({ children } : BackgroundProps) => {
    return (
      <View style={{backgroundColor: "#089FF3"}}>
        <TopGraphic/>
        <View style = {{
          backgroundColor: "#0FC100",
          marginTop: 350,
          height: 700,
          ...StyleSheet.absoluteFillObject,
        }}/>
        {children}
      </View>
    )
}