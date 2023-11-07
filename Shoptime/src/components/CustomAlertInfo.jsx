import Swal from 'sweetalert2';

const CustomAlertInfo = (title) => {
  Swal.fire({
    text: text,
    icon: 'info',
    confirmButtonColor: '#3085d6',
    confirmButtonText: 'OK'
  });
};

export default CustomAlertInfo;