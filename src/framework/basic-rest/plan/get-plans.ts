import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import http from "@framework/utils/http";

export interface Plan {
  id: string;
  // should be plan
  type: string;
  attributes: {
    name: string;
    amount: number;
    currency: string;
    interval: string;
    "interval-count": number;
    "stripe-id": string;
  };
}

export async function getPlans(): Promise<Plan[]> {
  const { data } = await http.get(`${API_ENDPOINTS.PLANS}`);
  return data.data;
}
