function RestrictedPage( {isLoggedIn, user, Login, Logout} ){
    return (
        <>
            {isLoggedIn ? 
            <>
           <h2 className="Tittle">Bem-vindo, {user}!</h2>
           <div className="DivLogout">
           <button className="ButtonLogout" onClick={Logout}>
               Logout
           </button>
           </div>
           </>
            :
            <>
           <h2 className="Tittle">Você não pode acessar essa página.</h2> 
           <div className="DivButton">
            <button className= "ButtonLogin" onClick={Login}>
                    Login
            </button>
           </div>
           </>
            }
        
        </>
    )
}

export default RestrictedPage