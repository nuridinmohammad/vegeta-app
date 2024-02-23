export default interface BaseResponse {
    success: boolean;
    data: any;
    message: string;
  }

  export interface AuthResponse extends BaseResponse {
    data: AuthRequest;
  }
  
  export type AuthRequest = {
    fullname: string;
    email: string;
    password: string;
  };
  