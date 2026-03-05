import { weatherDaysListResponse } from "./weatherDaysListResponse";

export interface weatherResponse{
    
    address: string;
    timezone: string;
    days: weatherDaysListResponse[];
}