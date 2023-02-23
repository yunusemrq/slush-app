import { AppButton, AppIcon, Block, Text } from "@/components/common";
import { clearStorage, IconTypes } from "@/utils";
import COLORS from "@/utils/colors";
import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";

const MachineDetail = () => {
  const [_data, setData] = useState({}) as any;
  const route = useRoute() as any;

  useEffect(() => {
    const data = route.params.data[0];
    setData(data);
  }, []);

  return (
    <ScrollView>
      <Block flex={1} p={20}>
        <Block mt={24}>
          <Text color={COLORS.primary} fs={18}>
            Marka:{""}
            <Text color={COLORS.black} fs={15}>
              {_data.brand}
            </Text>
          </Text>
        </Block>
        <Block mt={24}>
          <Text color={COLORS.primary} fs={18}>
            Müşteri:{" "}
            <Text color={COLORS.black} fs={15}>
              {_data.customer}
            </Text>
          </Text>
        </Block>
        <Block mt={24}>
          <Text fs={18} color={COLORS.primary}>
            Yapılacaklar
          </Text>
          <Block mt={12}>
            <Block
              direction={"row"}
              justify={"space-between"}
              bw={1}
              bc={COLORS.gray}
              p={4}
              br={6}
              mb={10}
            >
              <Text w={"84%"} fs={15}>
                {" "}
                - makine temizlenicek
              </Text>
              <Block direction={"row"}>
                <AppButton>
                  <AppIcon
                    name="edit"
                    type={IconTypes.fontAwesome5}
                    fs={18}
                    mr={12}
                    color={COLORS.primary}
                  />
                </AppButton>
                <AppButton>
                  <AppIcon
                    name="trash-o"
                    type={IconTypes.fontAwesome}
                    fs={20}
                    color={COLORS.danger}
                  />
                </AppButton>
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
    </ScrollView>
  );
};

export default MachineDetail;
