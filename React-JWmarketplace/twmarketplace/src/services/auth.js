export const usuarioAutenticado = () => localStorage.getItem('usuario-Tw') !== null

export const parseJwt = () => {
    var base64 = localStorage.getItem('usuario-Tw').split('.')[1]
    return JSON.parse(window.atob(base64))
}