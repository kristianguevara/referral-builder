import { Dispatch, SetStateAction } from 'react';

export interface ICreateFormData {
  givenName: string;
  surName: string;
  homeName: string;
  street: string;
  suburb: string;
  state: string;
  postcode: string;
  country: string;
  avatar: string;
}

export interface IPreviewReferralFormData {
  formData: ICreateFormData;
}

export interface ICreateReferralFormData {
  formData: ICreateFormData;
  handleFormChange: Function;
}

