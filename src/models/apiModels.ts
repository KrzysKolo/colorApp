export interface ColorsInterface {
  colorName?: string,
  colorHEX?: string;
  colorRGB?: string;
  colorHexToArrayRgb?: number[] ;
  colorRgbToArray?: number[];
  id: number;
}

export type ButtonProps = {
  title: string;
  btnClass: string;
  type: string | any ;
  onClick?: () => void;
}

export type InputProps = {
  labelTitle: string;
  placeholder: string;
  value: string;
  name: string;
  errorInfo: boolean;
  errorMessage: string;
  onChange: (e: React.ChangeEvent<Event & EventTarget & HTMLInputElement>) => void;
}

export type InputRadioProps = {
  nameInput: string;
  id: string;
  label: string;
  checked: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export type MessageProps = {
  message: string;
}

export type ModalProps = {
  showModal: boolean;
  onCancel: () => void;
}

export type ColorElementProps = {
  color: ColorsInterface;
};

export type ColorProps= {
  colorName?: string;
  colorRGB?: string;
  colorHEX?: string;
  colorHexToArrayRgb?: number[] ;
  colorRgbToArray?: number[];
}
export type ColorSimpleElementProps= {
  colorName?: string;
  colorMode?: string;
  colorModeArray?: number[] ;
  rgb: boolean;
}

export type InputSearchProps = {
  value: string;
  onChange: (e: React.ChangeEvent<Event & EventTarget & HTMLInputElement>) => void;
}

export type ColorsListProps = {
  showModal: boolean;
};

