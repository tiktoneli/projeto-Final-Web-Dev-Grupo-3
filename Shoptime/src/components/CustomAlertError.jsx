import Swal from 'sweetalert2';

const CustomAlertError = (title, text) => {
    return Swal.fire({
        icon: 'error',
        title: title,
        text: text,
        confirmButtonColor: 'red',
        confirmButtonText: 'Ok'
        
    })
}
export default CustomAlertError;
