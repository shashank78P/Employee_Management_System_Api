export interface employeeDto {
    name: string
    email: string
    mobileNumber: string
    gender: genderEnum
    designation: designationEnum
    course: courseEnum
    imageUrl: string
    status: status
}

export enum genderEnum {
    M = "M",
    F = "F",
}

export enum courseEnum {
    MCA = "MCA",
    BCA = "BCA",
    BSC = "BSC",
}

export enum designationEnum {
    Manager = "Manager",
    HR = "HR",
    SALES = "Sales",
}

export enum status {
    ACTIVE = "ACTIVE",
    IN_ACTIVE = "IN_ACTIVE",
}

export interface createdEmployeeBodyDto extends employeeDto {

}

export interface updateEmployeeBodyDto extends employeeDto {

}