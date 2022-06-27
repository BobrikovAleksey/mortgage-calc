export type RadioGroupItem = {
  checked: boolean;
  id: number;
  label: string;
  value: string;
};

export interface RadioProps {
  item: RadioGroupItem;
  name: string;
}

export interface RadioGroupProps {
  label?: string;
  list: Array<RadioGroupItem>;
  name: string;
}
