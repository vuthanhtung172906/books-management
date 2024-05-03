import { Injectable } from '@nestjs/common';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BookService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createBookInput: CreateBookInput) {
    return this.prismaService.book.create({
      data: createBookInput,
    });
  }

  findAll() {
    return this.prismaService.book.findMany();
  }

  findOne(id: string) {
    return this.prismaService.book.findUnique({
      where: { id },
    });
  }

  update(id: string, updateBookInput: UpdateBookInput) {
    return this.prismaService.book.update({
      where: { id },
      data: updateBookInput,
    });
  }

  remove(id: string) {
    return this.prismaService.book.delete({
      where: { id },
    });
  }
}
