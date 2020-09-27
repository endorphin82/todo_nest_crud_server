import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

// GetOne
// GetMany
// Post (Create (?OR Update))
// ?Put/Patch (Replace/Update)
// Delete (Delete)
@Entity()
export class Todo {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  title: string;

  @ApiProperty()
  @Column({ default: false })
  isCompleted: boolean;
}
