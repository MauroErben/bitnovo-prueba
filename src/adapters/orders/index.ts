import { IOrder } from "@/src/interfaces/orders";
import { ordersServices } from "@/src/services/orders";

const createPaymentOrder = async (params: IOrder) => {
  const {
    successCallback = () => null,
    errorCallback = () => null,
    finallyCallback = () => null,
  } = params;

  try {
    const response = await ordersServices.createPaymentOrder(params)
    successCallback(response);
  } catch (error) {
    errorCallback(error);
  } finally {
    finallyCallback();
  }
}

export const ordersAdapters = {
  createPaymentOrder,
};
