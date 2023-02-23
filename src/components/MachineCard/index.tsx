import { getMachine } from "@/api/services/machines";
import { Block, Text } from "@/components/common";
import Routes from "@/navigation/Routes";
import COLORS from "@/utils/colors";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable } from "react-native";

export const MachineCard = (props: any) => {
  const { machine } = props;
  const navigation = useNavigation<NavigationProp<any>>();

  const toDetail = async () => {
    const id = machine.item.id;
    const res = await getMachine(id);
    console.log();
    navigation.navigate(Routes.MACHINE_DETAIL_STACK, { data: res.data.data });
  };

  return (
    <Pressable onPress={() => toDetail()} style={{ marginBottom: 12 }}>
      <Block
        direction={"row"}
        bw={1}
        p={8}
        br={10}
        h={120}
        bc={COLORS.lightGray}
      >
        <Block px={12} py={6} w={"100%"} justify="space-between">
          <Block direction={"row"} justify="space-between">
            <Block>
              <Text fs={18}>{machine?.item?.brand}</Text>
            </Block>
            <Block
              bg={"black"}
              h={28}
              br={3}
              align={"center"}
              justify={"center"}
              w={50}
            >
              <Text color={"#fff"} fs={18}>
                {machine?.item?.number}
              </Text>
            </Block>
          </Block>
          <Text fs={14}>Müşteri : {machine?.item?.customer}</Text>
        </Block>
      </Block>
    </Pressable>
  );
};
