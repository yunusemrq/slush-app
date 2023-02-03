import React from "react";
import { AppButton, AppIcon, Block, Text } from "@/components/common";
import { useNavigation } from "@react-navigation/native";
import Routes from "@/navigation/Routes";
import { MachineCard } from "@/components/MachineCard";
import { Alert, Keyboard, ScrollView, TextInput, View } from "react-native";
import { IconTypes } from "@/utils";
import COLORS from "@/utils/colors";

const MachinesScreen = () => {
  const navigation = useNavigation();
  //! !!!!!
  return (
    <Block flex={1} bg="mainBgColor">
      <Block
        direction={"row"}
        justify={"space-between"}
        align={"center"}
        h={40}
        mx={20}
        my={10}
        bw={1}
        br={8}
        pr={8}
        bc={COLORS.lightGray}
      >
        <Block h={"100%"} flex={1}>
          <TextInput
            style={{
              height: "100%",
              paddingLeft: 20,
              paddingRight: 10,
              fontSize: 16
            }}
            placeholder="Makine Ara"
          />
        </Block>
        <AppButton
          onPress={() => navigation.navigate(Routes.ADD_MACHINE_STACK)}
        >
          <Text align={"center"} direction={"row"}>
            Ekle{" "}
            <AppIcon name="plus" type={IconTypes.antdesign} fs={16} mr={12} />
          </Text>
        </AppButton>
      </Block>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block px={20}>
          <MachineCard />
          <MachineCard />
          <MachineCard />
          <MachineCard />
          <MachineCard />
          <MachineCard />
          <MachineCard />
          <MachineCard />
          <MachineCard />
          <MachineCard />
          <MachineCard />
        </Block>
      </ScrollView>
    </Block>
  );
};

export default MachinesScreen;
