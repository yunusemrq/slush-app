import React, { useEffect, useState } from "react";
import {
  AppButton,
  AppFlatList,
  AppIcon,
  Block,
  Text,
} from "@/components/common";
import { MachineCard } from "@/components/MachineCard";
import Routes from "@/navigation/Routes";
import { IconTypes } from "@/utils";
import COLORS from "@/utils/colors";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native";
import { getMachines } from "@/api/services/machines";

const MachinesScreen = () => {
  const [machines, setMachines] = useState([]);
  const [loader, setLoader] = useState(false);
  const [text, setText] = useState("");

  const navigation = useNavigation() as any;

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoader(true);
    const res = await getMachines();
    const data = res.data.data;
    setMachines(data);
    setInterval(() => {
      setLoader(false);
    }, 1000);
  };

  const filteredMachines = (text: string) =>
    [...machines]?.filter((r: any) => JSON.stringify(r).includes(text)) || [];

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
              fontSize: 16,
            }}
            onChangeText={setText}
            placeholder="Makine Ara"
          />
        </Block>
        <AppButton
          onPress={() => navigation.navigate(Routes.ADD_MACHINE_STACK)}
        >
          <Text align={"center"} direction={"row"}>
            <AppIcon name="diff-added" type={IconTypes.octicon} fs={24} />
          </Text>
        </AppButton>
      </Block>
      <Block px={20} flex={1}>
        <AppFlatList
          onRefresh={() => getData()}
          refreshing={loader}
          data={filteredMachines(text)}
          renderItem={(machine) => <MachineCard machine={machine} />}
        />
      </Block>
    </Block>
  );
};

export default MachinesScreen;
