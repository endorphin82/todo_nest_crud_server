export class CreateDto {
  title: string;
  isCompleted?: boolean;
}

export class UpdateDto extends CreateDto {}
