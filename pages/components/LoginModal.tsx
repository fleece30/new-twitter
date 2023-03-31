import React, { useCallback, useState } from "react";
import useLoginModal from "@/hooks/useLoginModal";
import Input from "@/pages/components/Input";
import Modal from "@/pages/components/Modal";

interface LoginModalProps {}

const LoginModal: React.FC<LoginModalProps> = ({}) => {
  const loginModal = useLoginModal();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      loginModal.onClose;
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [loginModal]);

  const bodyContent = (
    <div className={"flex flex-col gap-4"}>
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

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title={"Login"}
      onClose={loginModal.onClose}
      onSubmit={onSubmit}
      actionLabel={"Sign in"}
      body={bodyContent}
    />
  );
};

export default LoginModal;
