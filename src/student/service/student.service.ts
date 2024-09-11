import { PrismaService } from 'src/prisma.service';
import { Student } from '../models/student.model';

export class StudentService {
  constructor(private prisma: PrismaService) {}

  async getAllStudents(): Promise<Student[]> {
    return this.prisma.student.findMany();
  }

  async getStudent(id: string): Promise<Student | null> {
    return this.prisma.student.findUnique({
      where: { id: id },
    });
  }
}
