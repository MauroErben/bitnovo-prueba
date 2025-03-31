import { HTTP_METHODS, SERVICES } from "@/src/enviroments";
import getApi from "..";
import { IOrder } from "@/src/interfaces/orders";

const createPaymentOrder = async (params: IOrder) => {
  const response = await getApi({
    method: HTTP_METHODS.POST,
    path: SERVICES.ORDERS,
    data: params
  });

  return response;
}

export const ordersServices = {
  createPaymentOrder
};
