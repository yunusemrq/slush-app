import React from "react";
import { AppButton, Block, Text } from "@/components/common";
import { StyleSheet, TextInput } from "react-native";
import COLORS from "@/utils/colors";

const AddMachineScreen = () => {
  return (
    <Block p={20} flex={1} bg="mainBgColor">
      <TextInput style={styles.textInput} placeholder="Marka" />
      <TextInput style={styles.textInput} placeholder="Numara" />
      <TextInput style={styles.textInput} placeholder="Müşteri" />
      <AppButton>
        <Block direction={"row"} justify={"center"} bw={1} py={8} br={8}>
          <Text>Ekle</Text>
        </Block>
      </AppButton>
    </Block>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    marginBottom: 14,
    borderColor: COLORS.lightGray,
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
});

export default AddMachineScreen;
