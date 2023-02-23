import { AddMachineScreen, MachineDetail, MachinesScreen } from "@/screens";
import Routes from "@/navigation/Routes";
import COLORS from "@/utils/colors";

const screens = [
  {
    name: Routes.HOME_SCREEN,
    component: MachinesScreen,
    title: "Makineler",
    bg: COLORS.primary,
  },
  {
    name: Routes.ADD_MACHINE_STACK,
    component: AddMachineScreen,
    title: "Makine Ekle",
    bg: COLORS.primary,
  },
  {
    name: Routes.MACHINE_DETAIL_STACK,
    component: MachineDetail,
    title: "Makine İsmi [12]",
    bg: COLORS.primary,
  },
];

export default screens;
