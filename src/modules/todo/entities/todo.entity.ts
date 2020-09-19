import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

// GetOne
// GetMany
// Post (Create (?OR Update))
// ?Put/Patch (Replace/Update)
// Delete (Delete)
@Entity()
export class Todo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({default: false})
    isCompleted: boolean;
}