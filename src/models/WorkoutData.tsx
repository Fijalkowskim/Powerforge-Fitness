import { ExerciseData } from "./ExerciseData";

export interface WorkoutData {
  name: string;
  description: string;
  image: string;
  difficulty: number;
  target: string;
  time: number;
  exercises: ExerciseData[];
}
