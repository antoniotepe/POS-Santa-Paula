
function getView(){
    let view = {
        body:()=>{
            return `
                <div class="col-12 p-0 bg-white">
                    <div class="tab-content" id="myTabHomeContent">
                        <div class="tab-pane fade show active" id="uno" role="tabpanel" aria-labelledby="receta-tab">
                            ${view.vista_listado()}
                        </div>
                        <div class="tab-pane fade" id="dos" role="tabpanel" aria-labelledby="home-tab">
                           
                        </div>
                        <div class="tab-pane fade" id="tres" role="tabpanel" aria-labelledby="home-tab">
                            
                        </div>    
                    </div>

                    <ul class="nav nav-tabs hidden" id="myTabHome" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active negrita text-success" id="tab-uno" data-toggle="tab" href="#uno" role="tab" aria-controls="profile" aria-selected="false">
                                <i class="fal fa-list"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-dos" data-toggle="tab" href="#dos" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i></a>
                        </li>  
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-tres" data-toggle="tab" href="#tres" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i></a>
                        </li>         
                    </ul>
                    
                </div>
               
            `
        },
        vista_listado:()=>{
            return `
            <div class="container-fluid" style="display: grid; place-items: center;">
            <div class="card card-rounded shadow col-sm-12 col-md-6 col-md-8 col-lg-5 col-xl-5" >
                <div class="card-body p-1">
                   
                        <img src="img/logo_santa_paula.png" class="rounded mx-auto d-block" alt="logo de laboratorio" width="300px" height="100px">

                        <div class="form-group">
                            <label>Usuario</label>
                            <input type="text" class="form-control negrita" id="usuarioL"/>
                        </div>
                        <div class="form-group">
                            <label>Contraseña</label>
                            <input type="password" class="form-control" id="passUsuarioL"/>
                        </div>
                        <div class="form-group text-right">
                            <a href="javascript:void(0)" onclick="Navegar.registroUsuario()" class="btn btn-secondary">Registrar <i class="fal fa-user"></i></a>
                        </div>
                        <div class="form-group text-center">
                            <button type="button" class="btn btn-info btn-xl btn-circle hand shadow" id="btnLogin">
                                <i class="fal fa-lock"></i>
                            </button>
                        </div>

                        <small class="text-secondary ">${versionapp}</small>
                    
                </div>
            </div>
        </div>
            `
        },
        vista_nuevo:()=>{
            return `
            <div class="table-responsive col-12">
                    <table class="table table-responsive table-hover col-12">
                            <thead class="bg-naranja text-white">
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody id="tblPedidos">
                            </tbody>
                        </table>
                    </div>
            `
        }
    }

    root.innerHTML = view.body();

};

function addListeners(){
    document.getElementById("btnLogin").addEventListener('click', () => {
        enviarLogin();
    });
};

function initView(){

    getView();
    addListeners();

};


function enviarLogin() {
    let usuario = document.getElementById("usuarioL").value;
    let password = document.getElementById("passUsuarioL").value;
    let btnLogin = document.getElementById("btnLogin");

    F.limpiarTexto(usuario);
    F.limpiarTexto(password);

    if (!usuario || !password) {
        F.Aviso("Por favor, ingrese su usuario y clave");
        return;
    }

    btnLogin.disabled = true;
    btnLogin.innerHTML = `<i class="fal fa-unlock fa-spin">`;


}