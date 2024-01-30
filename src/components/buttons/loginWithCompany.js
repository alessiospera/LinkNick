'use client';  // specify that this is a client-side component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faMicrosoft, faGithub, faApple, faLinkedin, faSteam, faTwitch } from "@fortawesome/free-brands-svg-icons";
import { signIn } from "next-auth/react";

const iconMap = {
    Google: faGoogle,
    Microsoft: faMicrosoft,
    Github: faGithub,
    Apple: faApple,
    Linkedin: faLinkedin,
    Steam: faSteam,
    Twitch: faTwitch
};

export default function LoginWithCompany({ company }){
    return (
        <button
            onClick={() => { signIn('google') }}
            className="bg-white shadow text-center w-full py-4 mt-4 flex items-center gap-3 justify-center">
            <FontAwesomeIcon icon={iconMap[company]} className="h-6"/>
            Sign In with {company}
        </button>
    )
}