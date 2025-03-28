import React from "react";
import styles from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import StyledButton from "../StyledButton/StyledButton";
import LogoutButton from "../Logout/LogoutButton";
import { logoutAsync } from "../../store/authSlice";

const Navbar = ({ transparent }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isLoggedIn } = useSelector((store) => store.authProvider);

    const loginRedirect = () => {
        navigate("/login");
    };
    const signupRedirect = () => {
        navigate("/signup");
    };

    const handleLogout = () => {
        dispatch(logoutAsync()); // Calls API & updates Redux state
        navigate("/login");
    };

    const navigateDashboard = () => {
        navigate("/dashboard");
    };

    const navigateChatpage = () => {
        navigate("/chatpage");
    };

    return (
        <nav
            className={`${styles.navbar} ${
                transparent ? styles.transparent : ""
            }`}
        >
            <div className={styles.logo}></div>
            <h1 onClick={navigateDashboard}>Dashboard</h1>
            {isLoggedIn && <h1 onClick={navigateChatpage}>Chatbot</h1>}
            <h1>About Us</h1>
            <h1>Score Analysis</h1>
            <h1>Contact Us</h1>
            {!isLoggedIn && (
                <div className={styles.authButtons}>
                    <StyledButton
                        executeFunction={loginRedirect}
                        displayText={"Login"}
                    ></StyledButton>
                    <StyledButton
                        executeFunction={signupRedirect}
                        displayText={"Signup"}
                    >
                        Signup
                    </StyledButton>
                </div>
            )}
            {isLoggedIn && <Link className={styles.profileLink} to="/profile">profile</Link>}
        </nav>
    );
};

export default Navbar;
