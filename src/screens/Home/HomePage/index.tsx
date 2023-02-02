import { AppButton, Block, Text } from "@/components/common";
import React from "react";
import { ScrollView } from "react-native";

const HomeScreen = () => {
  return (
    <Block flex={1} bg="mainBgColor">
      <ScrollView>
        <Block p={20}>
          <Text>test</Text>
          <AppButton>
            <Text>dil değiştir</Text>
          </AppButton>
        </Block>
      </ScrollView>
    </Block>
  );
};

export default HomeScreen;
