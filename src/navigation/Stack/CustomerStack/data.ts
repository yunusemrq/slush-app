import { CustomerPage } from "@/screens";
import Routes from "@/navigation/Routes";
import COLORS from "@/utils/colors";

const screens = [
  {
    name: Routes.PROFILE_STACK,
    component: CustomerPage,
    title: "Müşteriler",
    bg: COLORS.primary,
  },
];

export default screens;
