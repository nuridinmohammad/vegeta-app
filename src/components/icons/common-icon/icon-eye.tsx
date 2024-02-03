import { IconProps } from "@/types/common";

const IconEye: React.FC<IconProps> = ({ className = "", fill = "primary", stroke = "primary" }: IconProps) => {
  return (
    <svg className={className} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M27.9344 14.0143C24.6312 10.208 20.0667 5.83301 14 5.83301C11.55 5.83301 9.30417 6.52572 6.93438 8.00592C4.93646 9.26009 2.8875 11.0247 0.0729167 13.9268L0 13.9997L0.488541 14.5028C4.50625 18.6153 7.97708 22.1663 14 22.1663C16.6615 22.1663 19.2427 21.2986 21.8896 19.5122C24.1427 17.9882 26.0604 16.0559 27.599 14.4955L28 14.0945L27.9344 14.0143ZM14 19.833C10.7844 19.833 8.16667 17.2153 8.16667 13.9997C8.16667 10.784 10.7844 8.16634 14 8.16634C17.2156 8.16634 19.8333 10.784 19.8333 13.9997C19.8333 17.2153 17.2156 19.833 14 19.833Z"
        fill={`var(--${fill})`}
      />
      <path
        d="M13.5917 11.8708C13.5917 11.3677 13.7375 10.8938 13.9927 10.5C12.0604 10.5 10.5 12.075 10.5 14.0146C10.5 15.9542 12.0677 17.5219 13.9927 17.5219C15.9177 17.5219 17.4927 15.9542 17.4927 14.0146C17.099 14.2698 16.625 14.4156 16.1219 14.4156C14.7292 14.4083 13.5917 13.2708 13.5917 11.8708Z"
        fill={`var(--${fill})`}
      />
    </svg>
  );
};

export default IconEye;
