export class Student {
  id?: string;
  name: string;
  email: string;
  age?: number;
  createdAt?: Date | string;
  updatedAt?: Date | string;

  constructor(partial: Partial<Student>) {
    Object.assign(this, partial);
  }
}
