
function getView() {
    let view = {
        body: () => {
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
        vista_listado: () => {
            return `
            <div class="container-fluid" style="display: grid; place-items: center">
                <div class="card card-rounded shadow col-sm-12 col-md-6 col-md-8 col-lg-5 col-xl-5">
                    <div class="card-header text-center">
                        <h2>Registro de Usuarios</h2>
                    </div>
                    <div class="card-body p-2">
                        <form>
                            <div class="form-group">
                                <label>Email</label>
                                <input type="email" class="form-control negrita" id="emailUsuarioR"  />
                            </div>
                            <div class="form-group">
                                <label>Nombre Completo</label>
                                <input type="text" class="form-control negrita" id="nombreUsuarioR"  />
                            </div>
                            <div class="form-group">
                                <label>Rol</label>
                                <select class="form-control negrita text-danger" id="cmbRolUsuarioR">
                                    <option value="ADMINISTRADOR">ADMINISTRADOR</option>
                                    <option value="LABORATORISTA">LABORATORISTA</option>
                                </select>
                                  
                            </div>
                            <div class="form-group">
                                <label>Contraseña</label>
                                <input type="password" class="form-control negrita" id="passUsuarioR"  />
                            </div>
                            <div class="form-group">
                                <label>Confirmar contraseña</label>
                                <input type="password" class="form-control negrita" id="confirmationPassUsuarioR"  />
                            </div>
                            <div class="form-group text-center">
                                <button type="button" class="btn btn-info btn-circle btn-xl hand shadow" id="btnRegistroUsuarioR">
                                    <i class="fal fa-user"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            `
        },
        vista_nuevo: () => {
            return `

                <div class="table-responsive col-12">
                            
                </div>
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
            `;
        }
    }

    root.innerHTML = view.body();

};

function addListeners() {

    document.getElementById("btnRegistroUsuarioR").addEventListener('click', ()=> {
        enviarRegistro();
    })

};

function initView() {

    getView();
    addListeners();

};

function enviarRegistro() {
    let email = document.getElementById("emailUsuarioR").value;
    let nombreUsuario = document.getElementById("nombreUsuarioR").value;
    let rolUsuario = document.getElementById("cmbRolUsuarioR").value;
    let password = document.getElementById("passUsuarioR").value;
    let confirmatePassword = document.getElementById("confirmationPassUsuarioR").value;
    let btnRegistro = document.getElementById("btnRegistroUsuarioR");

    F.limpiarTexto(email);
    F.limpiarTexto(nombreUsuario);
    F.limpiarTexto(rolUsuario);
    F.limpiarTexto(password);
    F.limpiarTexto(confirmatePassword);

    if(!email || !nombreUsuario || !rolUsuario || !password || !confirmatePassword) {
        F.Aviso("Rellene todos los campos solicitados");
        return;
    }else if(password !== confirmatePassword) {
        F.AvisoError("Las contraseñas no coinciden");
        return;
    } else {

        btnRegistro.disabled = true;
        btnRegistro.innerHTML = `<i class="fal fa-unlock fa-spin">`;
    }


}
