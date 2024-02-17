import { WorkoutData } from "../models/WorkoutData";
import BenchpressImage from "../images/Benchpress.jpg";
import PushWorkoutImage from "../images/PushWorkout.jpg";
import PullWorkoutImage from "../images/PullWorkout.jpg";

const FullBodyWorkout: WorkoutData = {
  name: "Full body workout",
  description:
    "Comprehensive full body workout targeting multiple muscle groups.",
  image: BenchpressImage,
  difficulty: 4,
  target: "Full Body",
  time: 120,
  exercises: [
    { name: "Bench Press", sets: "4", reps: "5" },
    { name: "Chin Ups", sets: "4", reps: "8" },
    { name: "Hacksquat", sets: "3", reps: "10-12" },
    { name: "Seated DB Incline Press", sets: "2", reps: "8" },
    { name: "Seated DB Overhead Press", sets: "3", reps: "8-10" },
    { name: "Skullcrusher", sets: "3", reps: "8" },
    { name: "Leg Extension", sets: "2", reps: "12-15" },
    { name: "Leg Curl", sets: "2", reps: "12-15" },
  ],
};
const PushWorkout: WorkoutData = {
  name: "Push Workout",
  description: "Push workout targeting Chest, Triceps, and Shoulders.",
  image: PushWorkoutImage,
  difficulty: 3,
  target: "Chest, Triceps, Shoulders",
  time: 90,
  exercises: [
    { name: "Bench Press", sets: "3", reps: "6" },
    { name: "Overhead Press", sets: "3", reps: "8" },
    { name: "Incline Dumbbell Press", sets: "3", reps: "10" },
    { name: "Dumbbell Lateral Raise", sets: "3", reps: "12" },
    { name: "Dumbbell Chest Flyes", sets: "2", reps: "12" },
    { name: "Barbell Lying Triceps Extension", sets: "3", reps: "15" },
  ],
};
const PullWorkout: WorkoutData = {
  name: "Pull Workout",
  description: "Pull workout targeting Back and Biceps.",
  image: PullWorkoutImage,
  difficulty: 2,
  target: "Back, Biceps",
  time: 60,
  exercises: [
    { name: "Lat Pulldown", sets: "3", reps: "10" },
    { name: "Dumbbell Row", sets: "3", reps: "10" },
    { name: "Face Pull", sets: "3", reps: "15" },
    { name: "Barbell Curl", sets: "3", reps: "10" },
    { name: "Preacher Curl", sets: "2", reps: "15" },
  ],
};

export const Workouts: WorkoutData[] = [
  FullBodyWorkout,
  PushWorkout,
  PullWorkout,
  PushWorkout,
  PushWorkout,
];
