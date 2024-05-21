import { View, Text } from 'react-native'
import React from 'react'
import { OnboardFlow } from 'react-native-onboard';

const Onboarding = () => {
  return (
    <OnboardFlow

   
      primaryButtonStyle={{
        backgroundColor: "green",
        borderRadius: 10,
      }}
      showDismissButton={true}
      pages={[
        {
          title: "Welcome to my app",
          subtitle: "This is page 1",
          imageUri: "https://frigade.com/img/example1.png",
        },
        {
          title: "Welcome to my app",
          subtitle: "This is page 1",
          imageUri: "https://frigade.com/img/example1.png",
        },
        {
          title: "Page 2 header",
          subtitle: "This is page 2",
          imageUri: "https://frigade.com/img/example2.png",
        },
      ]}
      type={"fullscreen"}
    />
  );
}

export default Onboarding