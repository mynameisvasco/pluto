import Event from "../src/Event";
import EventListener from "../src/EventListener";
import { MyEvent } from "./MyEvent";

export class MyEventListener extends EventListener {
  public handle(event: MyEvent) {
    console.log(event.getArgs());
  }
}
