<script>
	import { form, field } from 'svelte-forms';
	import { required, email } from 'svelte-forms/validators';

	const name = field('name', '', [required()], { validateOnChange: false });

	const mail = field('mail', '', [email()], { validateOnChange: false });

	const myForm = form(name, mail);

	let val = () => {
		name.validate();
		mail.validate();
		console.log($myForm.hasError ? true : false);
	};
</script>

<div class="flex flex-col w-3/4">
	<div>
		<h2>Name</h2>
		<input title="Name" type="text" bind:value={$name.value} />
		{#if $myForm.hasError('name.required')}
			<p>Name is required</p>
		{/if}
		<h2>Email</h2>
		<input title="Email" type="text" bind:value={$mail.value} />
		{#if $myForm.hasError('mail.not_an_email')}
			<p>Please enter a valid email</p>
		{/if}
	</div>
	<h2>Text</h2>
	<input class="w-full" type="text" />
	<button on:click={val}>Submit</button>
</div>
