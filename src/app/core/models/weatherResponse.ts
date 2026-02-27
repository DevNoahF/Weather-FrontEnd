import { weatherDaysListResponse } from "./weatherDaysListResponse";

export interface weatherResponse{
    
    addres: string;
    timezone: string;
    days: weatherDaysListResponse[];
}