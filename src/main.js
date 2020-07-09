import Toaster from './index.svelte';

const toaster = new Toaster({
	target: document.querySelector('#toaster')
});

export default toaster;