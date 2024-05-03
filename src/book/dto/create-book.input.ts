import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateBookInput {
  @Field()
  title: string;

  @Field()
  author: string;

  @Field()
  description: string;

  @Field()
  imageUrl: string;
}
