import { AppButton, Block, Text } from "@/components/common";
import COLORS from "@/utils/colors";
import React from "react";
import { ScrollView } from "react-native";

const HomeScreen = () => {
  return (
    <Block flex={1} bg={COLORS.primary}>
      <Block h={200}></Block>
      <Block flex={1} bg={COLORS.white}>
        <ScrollView>
          <Text>Ana Menü</Text>
        </ScrollView>
      </Block>
    </Block>
  );
};

export default HomeScreen;
