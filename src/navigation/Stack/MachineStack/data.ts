import { AddMachineScreen, MachinesScreen } from "@/screens";
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
  }
];

export default screens;
