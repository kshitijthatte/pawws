import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Computer Programming",
    description:
      "Computer programming is the process of designing and building an executable computer program to accomplish a specific computing",
  },
  {
    _id: uuid(),
    categoryName: "Cat",
    },
  {
    _id: uuid(),
    categoryName: "Dog",
   },
];
