import { IsArray, IsString } from "class-validator"

export class createCourseDTO {
    @IsString()
    readonly name: string

    @IsString()
    readonly description: string

    @IsArray()
    readonly tags: string[]
}