import React, {useCallback, useState} from "react";
import useAuthModal from "@/hooks/useAuthModal";
import Input from "@/pages/components/Input";
import Modal from "@/pages/components/Modal";

interface LoginModalProps {
  authVariant?: string;
}

const AuthModal: React.FC<LoginModalProps> = ({authVariant = "login"}) => {
  const authModal = useAuthModal();

  const [variant, setVariant] = useState(authVariant);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      authModal.setClose();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [authModal]);

  const toggleModal = useCallback(() => {
    if (!isLoading) {
      variant === "login" ? setVariant("register") : setVariant("login");
    }
  }, [isLoading, variant]);

  const handleClose = () => {
    authModal.setClose();
    setVariant('login');
  }

  const bodyContent = (
    <div className={"flex flex-col gap-4"}>
      {variant === "register" && (
        <>
          <Input
            onChange={(e) => setName(e.target.value)}
            placeholder={"Name"}
            value={name}
            disabled={isLoading}
          />
          <Input
            onChange={(e) => setUsername(e.target.value)}
            placeholder={"Username"}
            value={username}
            disabled={isLoading}
          />
        </>
      )}
      <Input
        onChange={(e) => setEmail(e.target.value)}
        placeholder={"Email"}
        value={email}
        disabled={isLoading}
      />
      <Input
        onChange={(e) => setPassword(e.target.value)}
        placeholder={"Password"}
        value={password}
        disabled={isLoading}
        type={"password"}
      />
    </div>
  );

  const footerContent = (
    <div className={"text-neutral-400 text-center mt-4"}>
      {variant === "login" ? (
        <p>
          Don&apos;t have an account yet?{" "}
          <span
            onClick={toggleModal}
            className={
              "text-white font-semibold cursor-pointer hover:underline"
            }
          >
            Register
          </span>
        </p>
      ) : (
        <p>
          Already have an account?{" "}
          <span
            onClick={toggleModal}
            className={
              "text-white font-semibold cursor-pointer hover:underline"
            }
          >
            Login
          </span>
        </p>
      )}
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={authModal.isOpen}
      title={variant === "login" ? "Login" : "Create new account"}
      onClose={handleClose}
      onSubmit={onSubmit}
      actionLabel={variant === "login" ? "Sign in" : "Register"}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default AuthModal;
