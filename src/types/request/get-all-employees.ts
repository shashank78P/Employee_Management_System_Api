export type getAllEmployeeQueryParam = {
    sortBy : sortByDto
    sortOrder : "desc" | "asc"
    status : "ACTIVE" | "IN_ACTIVE",
    limit : number,
    page : number,
    search : string
}

export type sortByDto = "name" | "email" | "createdAt"