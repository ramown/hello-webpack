import '../css/styles.scss';
import img from '../assets/chair_top.jpeg'


const textComponent = () => {
	const elemH1 = document.createElement('H1');
	elemH1.innerHTML = "Olá mundo";
	elemH1.classList.add('title');
	return elemH1;
}

const imgComponent = () => {
	const elemImg = new Image(300,300);
	elemImg.src = img;

	return elemImg;
}

document.body.appendChild(textComponent());
document.body.appendChild(imgComponent());