import { ICallbacksApi } from "@/src/services/types";

export interface IOrder extends ICallbacksApi {
  expected_output_amount: string;
  input_currency?: string;
  merchant_urlko?: string;
  merchant_urlok?: string;
  merchant_url_standby?: string;
  notes?: string;
  reference?: string;
  fiat?: string;
  language?: string;
  home_address?: string;
  address_additional?: string;
  email_client?: string;
  full_name?: string;
  address_number?: string;
  zip_code?: string;
  city?: string;
  province?: string;
  country?: string;
  phone_number?: string;
  nif?: string;
  internal_data?: string;
}