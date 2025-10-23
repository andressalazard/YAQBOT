import { useState } from "react";
import FormInput from "../molecules/FormInput";
import Button from "../atoms/Button";
import { forgotPassword } from "../../services/authService";

export const ForgotPasswordPage = () => { 
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<{text: string, type: 'error' | 'success'} | null>(null);

    const handleForm = async (email: string) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (email === '') {
            setMessage({text: 'Los campos no pueden estar vacíos', type: 'error'});
            return;
        }

        if (!emailRegex.test(email)) {
        setMessage({text: 'Por favor, ingrese un correo electrónico válido', type: 'error'});
        return;
        }


        // Aquí iría la lógica para manejar el envío del formulario
        const msm = await forgotPassword(email);
        setMessage({text: msm?.message, type: msm?.success ? 'success' : 'error'});
    }

    return (
    <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-950 min-h-screen flex flex-col justify-center items-center text-white relative overflow-hidden">
        
        {/* Contenido */}
        <div className="relative z-10 backdrop-blur-sm bg-white/5 p-8 md:p-12 rounded-2xl border border-white/10 shadow-2xl max-w-2xl w-full mx-4">
            <h1 className="m-5 text-2xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">¿Has olvidado tu contraseña?</h1>
            <p className="text-gray-200 text-md md:text-xl mb-6 px-5">Por favor, ingresa tu correo electrónico para recibir un enlace de restablecimiento de contraseña.</p>
            <FormInput
                className="text-md md:text-2xl mt-8 p-2 rounded"
                inputName='Correo Electrónico'
                inputProps={{
                  className: "text-md md:text-xl bg-white/10 backdrop-blur-md border border-cyan-400/50 p-3 my-2 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300",
                  inputType: 'email',
                  id: 'emailInput',
                  placeholder: 'johndoe123@email.com',
                  value: email,
                  onChange: (e) => setEmail(e.target.value),
                }}
              />
            <p className={`text-gray-200 text-md md:text-md m-6 mt-2 px-5 ${message?.type === 'error' ? 'text-red-300' : 'text-green-500'}`}>{message?.text}</p>
            <Button 
                className="bg-gradient-to-r from-cyan-500 to-fuchsia-600 hover:from-cyan-400 hover:to-fuchsia-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300 transform" 
                label='Ingresar' 
                type='button' 
                onClick={() => handleForm(email)} 
            />
        </div>
    </div>  
    );
};