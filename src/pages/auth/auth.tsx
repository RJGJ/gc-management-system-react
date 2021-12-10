import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react";
import { supabase } from "../../lib/supabase/main";
import "./auth.scss";

const Auth = () => {
  const formId = "auth-form";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logginIn, setLogginIn] = useState(true);
  const [alertMsg, setAlertMsg] = useState("");

  const clearFields = () => {
    setEmail("");
    setPassword("");
  };

  const handleSubmit = async (ev: FormEvent) => {
    ev.preventDefault();

    if (logginIn) {
      const { user, session, error } = await supabase.auth.signIn({
        email,
        password,
      });
      console.log(user, session, error);
    } else {
      const { user, session, error } = await supabase.auth.signUp({
        email,
        password,
      });
      console.log(user, session, error);
    }
  };

  const handleInputChange = (
    ev: ChangeEvent<HTMLInputElement>,
    statemodifier: Dispatch<SetStateAction<string>>
  ) => {
    statemodifier(ev.target.value);
  };

  return (
    <div className="page-wrapper auth">
      <section className="content-wrapper">
        <div className="container auth-container d-flex align-items-center justify-content-center">
          <div className="card auth-card">
            <h1 className="card-title text-center">
              {logginIn ? "Login" : "Register"}
            </h1>
            {!!alertMsg && <div className="alert alert-danger">{alertMsg}</div>}
            <form onSubmit={handleSubmit} id={formId} method="POST">
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  autoComplete="current-email"
                  className="form-control"
                  placeholder="email"
                  value={email}
                  onChange={(e) => handleInputChange(e, setEmail)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  autoComplete="current-password"
                  className="form-control"
                  placeholder="password"
                  value={password}
                  onChange={(e) => handleInputChange(e, setPassword)}
                />
              </div>
            </form>
            <div className="form-group d-flex justify-content-between">
              <button
                className="btn btn-link"
                onClick={() => setLogginIn(!logginIn)}
              >
                {logginIn ? "Register" : "Login"}
              </button>
              <button type="submit" className="btn btn-primary" form={formId}>
                {logginIn ? "Login" : "Register"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Auth;
