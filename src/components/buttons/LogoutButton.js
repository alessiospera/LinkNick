'use client';
import { signOut } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";


 
export default function LogoutButton() {
  return (
    <button
      className="flex shadow items-center gap-2 border p-2 px-4"
      onClick={() => {
        signOut();
      }}
    >
      <span>Logout</span>
      <FontAwesomeIcon icon={faRightFromBracket} />
    </button>
  );
}