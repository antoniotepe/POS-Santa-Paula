let Navegar = {
    login:()=> {
        F.loadScript('./views/login.js', 'root')
        .then(()=> {
            initView();
        })
    },
    admin:()=> {
        F.loadScript('./views/admin.js', 'root')
        .then(() => {
            initView();
        })
    },
    registroUsuario:()=> {
        F.loadScript('./views/registroUsuario.js', 'root')
        .then(() => {
            initView();
        })
    }


}