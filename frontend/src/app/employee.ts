export interface EmployeeOutDto {
  id: number;
  name: string;
  email: string;
  jobTitle: string;
  phoneNumber: string;
  imageUrl: string;
}

export interface EmployeeAddDto {
  name: string
  email: string
  jobTitle: string
  phoneNumber: string
  imageUrl: string
}

export interface EmployeeUpdateDto {
  name: string
  email: string
  jobTitle: string
  phoneNumber: string
  imageUrl: string
}
