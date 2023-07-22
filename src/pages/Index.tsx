import { useContext } from "react";
import Header from "../components/Header";
import { UserContext } from "../context/UserContext";

export default function Index() {
  return (
    <>
      <Header />
      <h1>this is the index</h1>
    </>
  );
}
