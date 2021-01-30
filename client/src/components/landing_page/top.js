
function Top() {
    return (
        <header className="Page-top">
            <div className="Nav-menus">
                <ul className="Nav-menu-list">
                    <li className="Nav-menu-list-item">Premium</li>
                    <li className="Nav-menu-list-item">Signup</li>
                    <li className="Nav-menu-list-item">Register</li>
                </ul>
            </div>
            <div className="Main-logo">
                <img src="/ghetto_blaster-logo.png" alt="logo" />
            </div>
            <div className="Social-Icons">
                <ul className="Icons-list">
                    <li className="Icon">
                        <img src="/Instagram.png" alt="instagram" />
                    </li>
                    <li className="Icon">
                        <img src="/Twitter.png" alt="twitter" />
                    </li>
                    <li className="Icon">
                        <img src="/Youtube.png" alt="youtube" />
                    </li>
                    <li className="Icon">
                        <img src="/Dribbble.png" alt="dribble" />
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Top;