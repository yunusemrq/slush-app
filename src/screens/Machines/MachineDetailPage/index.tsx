import { AppButton, AppIcon, AppImage, Block, Text } from "@/components/common";
import { IconTypes } from "@/utils";
import COLORS from "@/utils/colors";
import React from "react";
import { Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const MachineDetail = () => {
  return (
    <ScrollView>
      <Block flex={1} p={20}>
        <Block bw={2} h={200} br={12}>
          <Block
            style={{ position: "absolute", right: 10, top: 10, zIndex: 999 }}
            bg={COLORS.black}
            bw={1}
            w={28}
            h={28}
            align={"center"}
            justify={"center"}
            br={4}
          >
            <Text fs={18} color={"#fff"}>12</Text>
          </Block>
          <Image
            style={{ width: "100%", height: "100%", borderRadius: 10 }}
            source={require("@/assets/images/slush.jpeg")}
          />
        </Block>
        <Block mt={24}>
          <Text color={COLORS.primary} fs={18}>
            Müşteri:{" "}
            <Text color={COLORS.black} fs={15}>
              Olive Garden (İsim Soyisim)
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
