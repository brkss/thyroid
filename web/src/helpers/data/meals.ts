import { IMeal } from "../types/Meal";

export const meals: IMeal[] = [
  {
    meal: "Breakfast",
    time: "9:00",
    recipes: [
      {
        time: "15min",
        cal: 22,
        title: "Tropical Bowl",
      },
      {
        title: "Orange Juice",
        cal: 40,
        time: "5min",
      },
    ],
  },
  {
    meal: "Lunch",
    time: "13:00",
    recipes: [
      {
        time: "25min",
        cal: 22,
        title: "Chiken Fries",
      },
      {
        title: "Apple Juice",
        cal: 40,
        time: "5min",
      },
      {
        title: "French Toast",
        cal: 33,
        time: "20min",
      },
    ],
  },
  {
    meal: "Snack",
    time: "17:00",
    recipes: [
      {
        title: "Fruits",
        time: "0min",
        cal: 60,
      },
    ],
  },
  {
    meal: "Dinner",
    time: "21:00",
    recipes: [
      {
        title: "Beef",
        time: "30min",
        cal: 40,
      },
      {
        title: "Cheese Bread",
        time: "20min",
        cal: 55,
      },
    ],
  },
];
