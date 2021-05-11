import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

registerApplication(
  "@Davor/navbar",
  () => System.import("@Davor/navbar"),
  isActive.nav,
  { domElement: document.getElementById("nav-container") }
);

registerApplication(
  "@Davor/to-do-app",
  () => System.import("@Davor/to-do-app"),
  isActive.toDoFunc,
  { domElement: document.getElementById("todo-container") }
);

registerApplication(
  "@Davor/trash-app",
  () => System.import("@Davor/trash-app"),
  isActive.trashFunc,
  { domElement: document.getElementById("trash-container") }
);

start();
