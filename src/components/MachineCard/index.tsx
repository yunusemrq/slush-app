import React from "react";
import { Block, Text } from "@/components/common";
import COLORS from "@/utils/colors";
import { Alert, Image, Pressable, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Routes from "@/navigation/Routes";

export const MachineCard = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={{ marginBottom: 12 }}
      onPress={() => navigation.navigate(Routes.MACHINE_DETAIL)}
    >
      <Block
        direction={"row"}
        bw={1}
        p={8}
        br={10}
        h={120}
        bc={COLORS.lightGray}
      >
        <Block w={"40%"}>
          <Image
            style={styles.image}
            source={require("@/assets/images/slush.jpeg")}
          />
        </Block>
        <Block ml={12} p={4} w={"57%"} justify="space-between">
          <Block direction={"row"} justify="space-between">
            <Block>
              <Text fs={18}>Makine İsmi</Text>
            </Block>
            <Block
              bg={"black"}
              w={22}
              h={22}
              br={3}
              align={"center"}
              justify={"center"}
            >
              <Text color={"#fff"} fs={15}>
                12
              </Text>
            </Block>
          </Block>
          <Text fs={14}>Müşteri : ----</Text>
        </Block>
      </Block>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  image: {
    borderWidth: 2,
    borderColor: COLORS.lightGray,
    borderRadius: 8,
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  }
});
