import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZDI1MTRjOGIyMzM4MjQxNjY0N2QyMDI1NDVhY2QxYSIsIm5iZiI6MTcyNjc0Mjc0OC4wOTYxMywic3ViIjoiNjZlYWFjYTg4MmZmODczZjdkMWYzODk5Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.JmYfmBm439kJCptAlPdkzunDxl-epIHYZcCyxwvVrtQ",
  },
});

export default instance;
