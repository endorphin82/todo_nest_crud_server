import { ApiProperty } from '@nestjs/swagger';

export class CreateDto {
  @ApiProperty()
  title: string;

  @ApiProperty({
    required: false,
  })
  isCompleted?: boolean;
}

export class UpdateDto extends CreateDto {
}
