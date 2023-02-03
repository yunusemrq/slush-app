import { AddMachineScreen, MachineDetail, MachinesScreen } from "@/screens";
import Routes from "@/navigation/Routes";

const screens = [
  {
    name: Routes.HOME_SCREEN,
    component: MachinesScreen,
    title: "Makineler"
  },
  {
    name: Routes.ADD_MACHINE_STACK,
    component: AddMachineScreen,
    title: "Makine Ekle"
  },
  {
    name: Routes.MACHINE_DETAIL,
    component: MachineDetail,
    title: "Makine İsmi [12]"
  }
];

export default screens;
