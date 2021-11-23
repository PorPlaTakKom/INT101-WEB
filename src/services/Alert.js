import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

class Alert {

	async getInput(){
		let student_id = 1
		return Swal.fire({
			title: 'Login Form',
			html: `<input type="text" id="login" class="swal2-input" placeholder="StudentID">
  		<input type="password" id="password" class="swal2-input" placeholder="Password">`,
			confirmButtonText: 'Confirm',
			focusConfirm: false,
			preConfirm: () => {
				const login = Swal.getPopup().querySelector('#login').value
				const password = Swal.getPopup().querySelector('#password').value
				if (!login || !password) {
					Swal.showValidationMessage(`Please enter login and password`)
				}
				return { login: login, password: password }
			}
		})
	}

	getGeneralAlertMsg(icon, titleMsg, textMsg = "", timer = 1500) {
		return MySwal.fire({
			icon: `${icon}`,
			title: `${titleMsg}`,
			text: `${textMsg}`,
			showConfirmButton: false,
			timer: ` ${timer}`,
		});
	}
}

export default new Alert();
