export interface updatedProfileResponse {
  userId: string;
  userName: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt: Date | null;
  emailSent: number;
  isDeleted: number;
  isAdmin: number;
}
