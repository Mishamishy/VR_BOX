let modalBg = document.querySelector('.modal-bg'),
	modalShow = document.querySelector('.modal-show'),
	modalBtn = document.querySelectorAll('.button-show'),
	modalClose = document.querySelector('.modal-close');
	
	modalBtn.forEach(button => {
		button.addEventListener("click", function(){
			modalBg.tran
			modalBg.style.display = 'block';
			modalShow.style.display = 'flex';
		})
	});
	modalClose.onclick = () => {
		console.log('work')
		modalBg.style.display = 'none';
		modalShow.style.display = 'none';
	}

document.onkeydown = (event) => {
	if (event.keyCode == 27) {
		modalBg.style.display = 'none';
			modalShow.style.display = 'none'; 
	}
}


