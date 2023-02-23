import { HomeScreen } from "@/screens";
import Routes from "@/navigation/Routes";
import COLORS from "@/utils/colors";

const screens = [
  {
    name: Routes.HOME_SCREEN,
    component: HomeScreen,
    title: "home-screen",
    bg: COLORS.primary,
  },
];

export default screens;
