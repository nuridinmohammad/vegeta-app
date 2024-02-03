import { IconProps } from "@/types/common";

const IconSettings: React.FC<IconProps> = ({ className = "", fill = "primary", stroke = "accent" }: IconProps) => {
  return (
    <svg className={className} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.3814 2H11.9414C11.4109 2 10.9022 2.21071 10.5272 2.58579C10.1521 2.96086 9.94138 3.46957 9.94138 4V4.18C9.94102 4.53073 9.84844 4.87519 9.67292 5.17884C9.4974 5.48248 9.24512 5.73464 8.94138 5.91L8.51138 6.16C8.20734 6.33554 7.86245 6.42795 7.51138 6.42795C7.16031 6.42795 6.81542 6.33554 6.51138 6.16L6.36138 6.08C5.90244 5.81526 5.35722 5.74344 4.84538 5.88031C4.33355 6.01717 3.89693 6.35154 3.63138 6.81L3.41138 7.19C3.14664 7.64893 3.07482 8.19416 3.21169 8.706C3.34855 9.21783 3.68291 9.65445 4.14138 9.92L4.29138 10.02C4.59365 10.1945 4.845 10.4451 5.02043 10.7468C5.19586 11.0486 5.28927 11.391 5.29138 11.74V12.25C5.29278 12.6024 5.20103 12.949 5.02542 13.2545C4.84982 13.5601 4.59659 13.8138 4.29138 13.99L4.14138 14.08C3.68291 14.3456 3.34855 14.7822 3.21169 15.294C3.07482 15.8058 3.14664 16.3511 3.41138 16.81L3.63138 17.19C3.89693 17.6485 4.33355 17.9828 4.84538 18.1197C5.35722 18.2566 5.90244 18.1847 6.36138 17.92L6.51138 17.84C6.81542 17.6645 7.16031 17.5721 7.51138 17.5721C7.86245 17.5721 8.20734 17.6645 8.51138 17.84L8.94138 18.09C9.24512 18.2654 9.4974 18.5175 9.67292 18.8212C9.84844 19.1248 9.94102 19.4693 9.94138 19.82V20C9.94138 20.5304 10.1521 21.0391 10.5272 21.4142C10.9022 21.7893 11.4109 22 11.9414 22H12.3814C12.9118 22 13.4205 21.7893 13.7956 21.4142C14.1707 21.0391 14.3814 20.5304 14.3814 20V19.82C14.3817 19.4693 14.4743 19.1248 14.6498 18.8212C14.8254 18.5175 15.0776 18.2654 15.3814 18.09L15.8114 17.84C16.1154 17.6645 16.4603 17.5721 16.8114 17.5721C17.1625 17.5721 17.5073 17.6645 17.8114 17.84L17.9614 17.92C18.4203 18.1847 18.9655 18.2566 19.4774 18.1197C19.9892 17.9828 20.4258 17.6485 20.6914 17.19L20.9114 16.8C21.1761 16.3411 21.2479 15.7958 21.1111 15.284C20.9742 14.7722 20.6398 14.3356 20.1814 14.07L20.0314 13.99C19.7262 13.8138 19.4729 13.5601 19.2973 13.2545C19.1217 12.949 19.03 12.6024 19.0314 12.25V11.75C19.03 11.3976 19.1217 11.051 19.2973 10.7455C19.4729 10.4399 19.7262 10.1862 20.0314 10.01L20.1814 9.92C20.6398 9.65445 20.9742 9.21783 21.1111 8.706C21.2479 8.19416 21.1761 7.64893 20.9114 7.19L20.6914 6.81C20.4258 6.35154 19.9892 6.01717 19.4774 5.88031C18.9655 5.74344 18.4203 5.81526 17.9614 6.08L17.8114 6.16C17.5073 6.33554 17.1625 6.42795 16.8114 6.42795C16.4603 6.42795 16.1154 6.33554 15.8114 6.16L15.3814 5.91C15.0776 5.73464 14.8254 5.48248 14.6498 5.17884C14.4743 4.87519 14.3817 4.53073 14.3814 4.18V4C14.3814 3.46957 14.1707 2.96086 13.7956 2.58579C13.4205 2.21071 12.9118 2 12.3814 2Z"
        stroke={`var(--${stroke})`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.1614 15C13.8182 15 15.1614 13.6569 15.1614 12C15.1614 10.3431 13.8182 9 12.1614 9C10.5045 9 9.16138 10.3431 9.16138 12C9.16138 13.6569 10.5045 15 12.1614 15Z"
        stroke={`var(--${stroke})`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconSettings;
