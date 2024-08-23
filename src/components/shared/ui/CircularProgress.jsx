import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Circle,Text } from "react-native-svg";

const CircularProgress = ({
  size,
  strokeWidth,
  progress,
  color,
  backgroundColor,
  fontSize,
  textColor,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <View style={[styles.container, { width: size, height: size }]} className="">
      <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="">
        <Circle
          stroke={backgroundColor}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <Circle
          stroke={color}
          fill="none"
          cx={size /2}
          cy={size/2}
          r={radius - strokeWidth - 0.2}
          strokeWidth={strokeWidth + 1.2}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
        <Text x={size /2} y={size/2} fill={textColor} fontSize={fontSize} textAnchor="middle" dx={'-0.4em'} dy={"0.4em"}
        >
            {progress}%
        </Text>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CircularProgress;
