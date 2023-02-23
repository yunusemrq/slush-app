import React, { useState } from "react";
import { AppButton, Block, Text } from "@/components/common";
import { StyleSheet, TextInput, View } from "react-native";
import COLORS from "@/utils/colors";
import { addMachine } from "@/api/services/machines";
import { useNavigation } from "@react-navigation/native";

const AddMachineScreen = () => {
  const navigation = useNavigation();
  const [values, setValues] = useState({ brand: "", number: "", customer: "" });

  const addData = async () => {
    const data = await addMachine(values);
    if (!data.status) console.log(data);
    if (data.data.success) {
      navigation.goBack();
    }
  };

  return (
    <Block p={20} flex={1} bg="mainBgColor">
      <Block mb={20}>
        <TextInput
          value={values.brand}
          onChangeText={(text) => setValues({ ...values, brand: text })}
          style={styles.textInput}
          placeholder="Marka"
        />
        <TextInput
          value={values.number}
          onChangeText={(text) => setValues({ ...values, number: text })}
          style={styles.textInput}
          placeholder="Numara"
          keyboardType="number-pad"
        />
        <TextInput
          value={values.customer}
          onChangeText={(text) => setValues({ ...values, customer: text })}
          style={styles.textInput}
          placeholder="Müşteri"
        />
      </Block>
      <View style={{ marginLeft: "auto", marginRight: "auto" }}>
        <AppButton onPress={() => addData()}>
          <Block
            w={"100%"}
            direction={"row"}
            justify={"center"}
            bw={1}
            py={8}
            br={8}
          >
            <Text fs={16}>Ekle</Text>
          </Block>
        </AppButton>
      </View>
    </Block>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    fontSize: 16,
    marginBottom: 14,
    borderColor: COLORS.lightGray,
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
});

export default AddMachineScreen;
