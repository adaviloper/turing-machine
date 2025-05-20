// import type { Route } from "./+types/home";
import React from 'react';
import { Game } from "../components/game";

export function meta(
  // {}: Route.MetaArgs
) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Game />;
}
