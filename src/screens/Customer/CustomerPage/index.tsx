import { Block, Text } from "@/components/common";
import React from "react";
import { ScrollView } from "react-native";

const CustomerPage = () => {
  return (
    <Block flex={1} bg="mainBgColor">
      <ScrollView>
        <Block p={20}>
          <Block p={10} bw={1} br={8}>
            <Text>müşteri card</Text>
          </Block>
        </Block>
      </ScrollView>
    </Block>
  );
};

export default CustomerPage;
