import { githubService } from "@/api";
import { AppImage, Block, Text } from "@/components/common";
import { useApi } from "@/hooks";
import { ProfileDto } from "@/models";
import { RootState } from "@/store";
import { userActions } from "@/store/actions";
import React, { useEffect } from "react";
import { ScrollView, Button, Linking } from "react-native";
import { useSelector } from "react-redux";

const ProfilePage = () => {
  const userReducer: any = useSelector(
    (state: RootState) => state.userReducer || {}
  );
  const githubRequest = useApi(githubService.getProfile);

  const loadData = async () => {
    const response = await githubRequest.request<ProfileDto>();
    if (response.isSuccess) {
      userActions.userProfile(response.data);
    }
  };

  useEffect(() => {
    if (!userReducer) {
      loadData();
    }
  }, []);

  return (
    <Block flex={1} bg="mainBgColor">
      <ScrollView>
        <Text>malik korucu</Text>
      </ScrollView>
    </Block>
  );
};

export default ProfilePage;
