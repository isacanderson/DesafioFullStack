import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateReportDto {
    
    @IsNumber() @IsNotEmpty()
    producerId: number;

    @IsString() @IsNotEmpty()
    cropName: string;

    @IsNumber() @IsNotEmpty()
    cropArea: number;

    @IsNumber()
    productionCost: number;

    @IsNumber()
    harvestAmount: number;

    @IsDate()
    harvestDate: Date;
    
}