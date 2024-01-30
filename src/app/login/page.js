import LoginWithCompany from "@/components/buttons/loginWithCompany";

export default function LoginPage(){
    return (
        
        <div>
            <div className="p-4 max-w-xs mx-auto">
                <h1 className="text-4xl font-bold text-center mb-2">
                    Sign In
                </h1>
                <p className="text-center mb-6 text-gray-500">
                    Sign in to your account to continue
                </p>
            </div>

            <LoginWithCompany company="Google"/>
            <LoginWithCompany company="Microsoft"/>
            <LoginWithCompany company="Apple"/>
            <LoginWithCompany company="Github"/>
            <LoginWithCompany company="Linkedin"/>
            <LoginWithCompany company="Steam"/>
            <LoginWithCompany company="Twitch"/>

        </div>
    )
}