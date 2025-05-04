export interface ButtonProps{
    color: string;
    size: 'small' | 'medium' | 'large' | string;
    onClick?: ()=>void;
    type: string;
};

export interface InputProps{
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type: string;
};

export interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: ()=>void;
  content: string;
  children?: React.ReactNode;
};