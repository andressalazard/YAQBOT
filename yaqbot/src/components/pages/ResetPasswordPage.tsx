import { useEffect, useState } from 'react';
import FormInput from '../molecules/FormInput';
import Button from '../atoms/Button';
import { resetPassword, verifyResetToken } from '../../services/authService';
import { useNavigate } from 'react-router-dom';
import HeaderImage from '../atoms/HeaderImage';

export const ResetPasswordPage = () => {
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [message, setMessage] = useState<{ text: string; type: 'error' | 'success' } | null>(null);
  const [resetToken, setResetToken] = useState<string>('');
  const [finished, setFinished] = useState<boolean>(false);
  const navigate = useNavigate();
  //como obtener el token de la url para resetear la contraseña
  //le estoy pasando como ?token=valor
  const token = new URLSearchParams(window.location.search).get('token');

  useEffect(() => {
    const verifyToken = async () => {
      if (token) {
        const msm = await verifyResetToken(token);
        setResetToken(msm.resetToken);
      }
    };
    verifyToken();
  }, [token]);

  const handleForm = async (password: string) => {
    //hazme un regex que debe tener al menos 8 caracteres, al menos una mayuscula, una minuscula y un caracter especial
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    if (!passwordRegex.test(password)) {
      setMessage({ text: 'Por favor, ingrese una contraseña válida', type: 'error' });
      return;
    } else {
      setMessage(null);
    }

    // Aquí iría la lógica para manejar el envío del formulario
    const msm = await resetPassword(resetToken, password);
    setMessage({ text: msm?.message, type: msm?.success ? 'success' : 'error' });
    if (msm?.success) {
      setFinished(true);
    }
  };

  return (
    <HeaderImage height="100vh" imageUrl="/bg/plants-5.webp" overlayOpacity={0.4}>
      {resetToken !== '' && (
        <div className="relative z-10 backdrop-blur-sm bg-black/50 p-8 md:p-12 rounded-2xl border border-white/10 shadow-2xl max-w-2xl w-full mx-4">
          <h1 className="m-5 text-2xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
            ¿Has olvidado tu contraseña?
          </h1>
          <p className="text-gray-200 text-md md:text-xl mb-6 px-5">
            Por favor, ingresa tu nueva contraseña.
          </p>
          <div className="relative">
            <FormInput
              className="text-md md:text-2xl mt-8 p-2 rounded"
              inputName="Nueva Contraseña"
              inputProps={{
                className:
                  'text-md md:text-xl bg-white/10 backdrop-blur-md border border-cyan-400/50 p-3 my-2 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 pr-12',
                inputType: showPassword ? 'text' : 'password',
                id: 'passwordInput',
                placeholder: 'Ingresa tu nueva contraseña',
                value: password,
                onChange: (e) => setPassword(e.target.value),
              }}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 mt-6"
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              )}
            </button>
          </div>
          <p
            className={`text-gray-200 text-md md:text-md m-6 mt-2 px-5 ${message?.type === 'error' ? 'text-red-300' : 'text-green-500'}`}
          >
            {message?.text}
          </p>
          {!finished && (
            <Button
              className="bg-gradient-to-r from-cyan-500 to-fuchsia-600 hover:from-cyan-400 hover:to-fuchsia-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300 transform"
              label="Cambiar Contraseña"
              type="button"
              onClick={() => handleForm(password)}
            />
          )}
          <Button
            className="block mt-4 bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-400 hover:to-blue-500 text-white font-bold py-3 px-8 mx-auto rounded-lg shadow-lg hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 transform"
            label="Iniciar Sesión"
            type="button"
            onClick={() => navigate('/login')}
          />
        </div>
      )}
      {resetToken === '' && (
        <div className="relative z-10 backdrop-blur-sm bg-white/5 p-8 md:p-12 rounded-2xl border border-white/10 shadow-2xl max-w-2xl w-full mx-4">
          <h1 className="m-5 text-2xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
            Token inválido o expirado
          </h1>
          <p className="text-gray-200 text-md md:text-xl mb-6 px-5">
            El enlace de restablecimiento de contraseña no es válido o ha expirado. Por favor,
            solicita un nuevo enlace.
          </p>
          <Button
            className="bg-gradient-to-r from-cyan-500 to-fuchsia-600 hover:from-cyan-400 hover:to-fuchsia-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300 transform"
            label="Solicitar nuevo enlace"
            type="button"
            onClick={() => navigate('/forgot-password')}
          />
        </div>
      )}
    </HeaderImage>
  );
};
