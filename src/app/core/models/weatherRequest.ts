import { States } from "../../features/weather/components/weather.component/weather-states.enum";

export interface weatherRequest {
    city: string;
    state: States;
    country: string;
    initDate: Date | string;
    finalDate: Date | string;
}
    