import { View, Text } from 'react-native'
import React from 'react'
import { OnboardFlow } from 'react-native-onboard';
import cart from '../../assets/cart.png'
import order from '../../assets/ord.png'
import shop from '../../assets/grocery.png'


const Onboarding = ({navigation}) => {
  return (
    <OnboardFlow
      primaryButtonStyle={{
        backgroundColor: "green",
        borderRadius: 10,
      }}
      

      titleStyles={{
        color: "black",
        fontSize: 5,
        fontWeight: "bold",
      }}
      showDismissButton={true}
      pages={[
        {
          title: "Create a shopping list",
          subtitle: "Shop for your favorite products",
          imageUri:
            "https://firebasestorage.googleapis.com/v0/b/ecommerce-9d7c8.appspot.com/o/Grocery%20shopping-rafiki.png?alt=media&token=50203755-f3b8-4e32-a5bd-d6ef1c7f9e2b",
        },
        {
          title: "Order your products",
          subtitle: "Get your products delivered to your doorstep",
          imageUri:
            "https://firebasestorage.googleapis.com/v0/b/ecommerce-9d7c8.appspot.com/o/Online%20Groceries-pana.png?alt=media&token=1da0f4fe-94b4-4d0c-9033-f32d80d20fb8",
        },
        {
          title: "Choose from your favorite stores",
          subtitle: "Shop from your favorite stores in one place",
          imageUri:
            "https://firebasestorage.googleapis.com/v0/b/ecommerce-9d7c8.appspot.com/o/Online%20Groceries-bro.png?alt=media&token=00948122-bb4b-4936-a549-f4212112a4e6",
        },
      ]}
      type={"fullscreen"}

    
    />
  );
}

export default Onboarding