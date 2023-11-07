import Swal from 'sweetalert2';

const CustomAlertSuccess = (title, text) => {
  Swal.fire({
    title: title,
    text: text,
    icon: 'success',
    confirmButtonColor: '#059742',
    confirmButtonText: 'OK'
  });
};

export default CustomAlertSuccess;
