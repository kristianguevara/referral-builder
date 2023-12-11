import { Dispatch, SetStateAction } from 'react';

export interface IReferralData {
  given_name: string;
  surname: string;
  email: string;
  phone: string;
  home_name: string;
  street: string;
  suburb: string;
  state: string;
  postcode: string;
  country: string;
  avatar: string;
}

export interface IReferralListData extends IReferralData {
  id: number;
}

export interface IPreviewReferralFormData {
  formData: IReferralData;
}

export interface IReferralInputFormData {
  isEditPage: boolean;
  formData: IReferralData;
  handleFormChange: Function;
  disabled: boolean;
  submitForm: Function;
}

