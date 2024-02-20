import { WorkoutData } from "../models/WorkoutData";
import BenchpressImage from "../images/Benchpress.jpg";
import PushWorkoutImage from "../images/PushWorkout.jpg";
import PullWorkoutImage from "../images/PullWorkout.jpg";
import LegsWorkoutImage from "../images/LegsWorkout.jpg";

const FullBodyWorkout: WorkoutData = {
  name: "Full body workout",
  description:
    "Comprehensive full body workout designed to target multiple muscle groups. Achieve a balanced physique with a mix of upper and lower body exercises, promoting overall strength and endurance.",
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
  description:
    "Intense Push Workout focusing on Chest, Triceps, and Shoulders. Strengthen your upper body and achieve a sculpted physique with this challenging push-focused regimen.",
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
  description:
    "Engage your back and biceps with this effective Pull Workout. This routine targets key muscle groups for a well-defined upper body.",
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
const LegsWorkout: WorkoutData = {
  name: "Legs Workout",
  description:
    "Strengthen your lower body with this dynamic Legs Workout. Enhance your lower body strength and endurance, promoting overall athletic performance.",
  image: LegsWorkoutImage,
  difficulty: 4,
  target: "Glutes, Quads, Hamstrings, Calves",
  time: 80,
  exercises: [
    { name: "Barbell Squat", sets: "4", reps: "6-10" },
    { name: "Hip Thrust", sets: "3", reps: "12" },
    { name: "Bulgarian Split Squats", sets: "3", reps: "12" },
    { name: "Lying Leg Curl", sets: "3", reps: "8-12" },
    { name: "Calf Raise", sets: "3", reps: "15-20" },
  ],
};

export const Workouts: WorkoutData[] = [
  FullBodyWorkout,
  PushWorkout,
  PullWorkout,
  LegsWorkout,
];
