export class Product {
  id!: string;
  title!: string;
  description!: string;
  issueDate!: string;
  thumbnail!: string;
  stock!: number;
  rating!: number;
  brand!: string;
  warranty!: number;

  price!: {
    current: number;
    currency: string;
    beforeDiscount: number;
    discountPercentage: number;
  };

  category!: {
    id: string;
    name: string;
    image: string;
  };

  images!: string[];
}
